import userService from "./user.service.js";

const getAllUsers = async (_req, res) => {
  try {
    const users = await userService.findAllUsers();

    res.status(200).json(users);
  } catch (error) {
    console.error("Server: Hiba történt a felhasználók lekérdezésekor:", error);

    res.status(500).json({
      message: "Server: Adatbázis-hiba történt",
    });
  }
};

const getUserById = async (req, res) => {};

const getUserByName = async (req, res) => {};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: "Server: Érvénytelen felhasználói azonosító",
    });
  }

  try {
    const user = await userService.deleteUser(id);

    if (!user) {
      return res.status(404).json({
        message: "Server: A felhasználó nem található",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Server: Hiba történt a felhasználó törlésekor:", error);

    res.status(500).json({
      message: "Server: Adatbázis-hiba történt",
    });
  }
};

export default {
  getAllUsers,
  getUserById,
  getUserByName,
  deleteUser,
};
