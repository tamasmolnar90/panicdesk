export const notFoundHandler = (_req, res) => {
  return res
    .status(404)
    .json({ message: "Az útvonal nem található", code: "NOT_FOUND" });
};
