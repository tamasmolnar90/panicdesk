import "dotenv/config";

export const env = {
  serverPort: process.env.SERVER_PORT,
  clientOrigin: process.env.CLIENT_ORIGIN,

  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
};
