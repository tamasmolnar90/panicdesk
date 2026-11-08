import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "./AuthContext";
import { apiFetch } from "../services/api";

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const locationRef = useRef(location);
  const [user, setUser] = useState(null);
  const [expiresAt, setExpiresAt] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    locationRef.current = location;
  }, [location]);

  const clearSession = useCallback(() => {
    setUser(null);
    setExpiresAt(null);
  }, []);

  const getReturnLocation = useCallback(() => {
    const currentLocation = locationRef.current;

    if (
      currentLocation.pathname === "/bejelentkezes" ||
      currentLocation.pathname === "/regisztracio"
    ) {
      return undefined;
    }

    return {
      pathname: currentLocation.pathname,
      search: currentLocation.search,
      hash: currentLocation.hash,
    };
  }, []);

  /////////////////////////////////////////////////////////////////////
  const logout = useCallback(
    async (message) => {
      try {
        await apiFetch("/kijelentkezes", {
          method: "POST",
          credentials: "include",
        });
      } catch (error) {
        console.error(error);
      } finally {
        clearSession();
        navigate("/bejelentkezes", {
          state: { message, from: getReturnLocation() },
          replace: true,
        });
      }
    },
    [clearSession, getReturnLocation, navigate],
  );

  /////////////////////////////////////////////////////////////////////
  // RÉGI
  // useEffect(() => {
  //   const restoreSession = async () => {
  //     try {
  //       const data = await apiFetch("/me");
  //       setUser(data.user);
  //       setExpiresAt(data.expiresAt);
  //     } catch (error) {
  //       if (error.status !== 401) {
  //         console.error(error);
  //       }
  //       clearSession();
  //       const returnLocation = getReturnLocation();
  //       if (error.status === 401 && returnLocation) {
  //         navigate("/bejelentkezes", {
  //           state: {
  //             message: "A munkamenet lejárt.",
  //             from: returnLocation,
  //           },
  //           replace: true,
  //         });
  //       }
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   const handleUnauthorized = () => {
  //     clearSession();
  //     navigate("/bejelentkezes", {
  //       state: {
  //         message: "A munkamenet lejárt.",
  //         from: getReturnLocation(),
  //       },
  //       replace: true,
  //     });
  //   };

  //   window.addEventListener("auth:unauthorized", handleUnauthorized);
  //   restoreSession();

  //   return () => {
  //     window.removeEventListener("auth:unauthorized", handleUnauthorized);
  //   };
  // }, [clearSession, getReturnLocation, navigate]);

  // JOBB MEGOLDÁS
  useEffect(() => {
    const controller = new AbortController();

    const restoreSession = async () => {
      try {
        const data = await apiFetch("/me", {
          signal: controller.signal,
        });

        if (controller.signal.aborted) return;

        setUser(data.user);
        setExpiresAt(data.expiresAt);
      } catch (error) {
        if (controller.signal.aborted) return;

        if (error.status !== 401) {
          console.error(error);
        }

        clearSession();

        const returnLocation = getReturnLocation();

        if (error.status === 401 && returnLocation) {
          navigate("/bejelentkezes", {
            state: {
              message: "A munkamenet lejárt.",
              from: returnLocation,
            },
            replace: true,
          });
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    const handleUnauthorized = () => {
      clearSession();

      navigate("/bejelentkezes", {
        state: {
          message: "A munkamenet lejárt.",
          from: getReturnLocation(),
        },
        replace: true,
      });
    };

    window.addEventListener("auth:unauthorized", handleUnauthorized);

    restoreSession();

    return () => {
      controller.abort();

      window.removeEventListener("auth:unauthorized", handleUnauthorized);
    };
  }, [clearSession, getReturnLocation, navigate]);

  /////////////////////////////////////////////////////////////////////
  const login = useCallback(async (credentials) => {
    const data = await apiFetch("/bejelentkezes", {
      method: "POST",
      body: JSON.stringify(credentials),
    });

    setUser(data.user);
    setExpiresAt(data.expiresAt);

    return data;
  }, []);

  /////////////////////////////////////////////////////////////////////
  const value = useMemo(
    () => ({ user, expiresAt, isLoading, login, logout }),
    [user, expiresAt, isLoading, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
