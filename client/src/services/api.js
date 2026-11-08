const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const apiFetch = async (path, options = {}) => {
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  const contentType = response.headers.get("content-type");

  const data =
    response.status === 204
      ? null
      : contentType?.includes("application/json")
        ? await response.json()
        : null;

  const isPublicAuthRequest =
    path === "/me" ||
    path === "/bejelentkezes" ||
    path === "/regisztracio" ||
    path === "/kijelentkezes";

  if (response.status === 401 && !isPublicAuthRequest) {
    window.dispatchEvent(new CustomEvent("auth:unauthorized"));
  }

  if (!response.ok) {
    const error = new Error(data?.message || "A kérés sikertelen");
    error.code = data?.code;
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
};
