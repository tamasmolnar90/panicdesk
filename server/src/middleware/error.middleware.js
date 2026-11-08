export const errorHandler = (error, _req, res, _next) => {
  console.error(error);

  const statusCode = error.statusCode || 500;

  return res.status(statusCode).json({
    message: statusCode === 500 ? "Szerverhiba történt" : error.message,
    code: error.code || "INTERNAL_ERROR",
  });
};
