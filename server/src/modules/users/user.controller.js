import userService from "./user.service.js";

const getAllUsers = async (_req, res) => {
  try {
    const users = await userService.findAllUsers();

    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);

    res.status(500).json({
      message: "Database error",
    });
  }
};

const getUserById = async (req, res) => {};

const getUserByName = async (req, res) => {};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: "Invalid user ID",
    });
  }

  try {
    const user = await userService.deleteUser(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error deleting book:", error);

    res.status(500).json({
      message: "Database error",
    });
  }
};

export default {
  getAllUsers,
  getUserById,
  getUserByName,
  deleteUser,
};
