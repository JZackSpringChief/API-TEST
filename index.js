import { express } from "express";

const app = express();
const port = 5777;

app.get("/", (request, response) => {
  response.send("server is up\n");
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
