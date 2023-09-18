import express from "express";
// const router = express.Router();

import moviesRouter from "./movies.js";
import authticationRouter from "./authentication.js";

const app = express();
const port = 5777;
app.use(express.json);

app.use((req, res, next) => {
  console.log("Incoming Request...");
  console.log(`Request Type: ${req.method}`);
  next();
});

app.get("/", (request, response) => {
  console.log(`New request made: ${request.method}`);
  console.log(`Hostname: ${request.hostname}`);
  if (request.hostname === "localhost") {
    console.log("Request Accepted");
  } else {
    console.log("Request Denied");
  }
  response.status(200).send("<p>if you see this it a good ole 200 status</p>");
});

app.use("/movies", moviesRouter);
app.use("/authenticate", authticationRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
