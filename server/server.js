import app from "./src/app.js";
import { env } from "./src/config/env.js";

const PORT = env.serverPort;

app.listen(PORT, () => {
  console.log(`Server is running : http://localhost:${PORT}\n`);
});
