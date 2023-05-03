const PORT = 3001;
import app from "./src/app";

const start = () => {
  app.listen(PORT);
  console.log("Server running on port" , PORT);
}

start();
