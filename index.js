import express from "express";

const app = express();
const port = 5777;
app.use(express.json);

const authentication = (req, res) => {
  if (req.body.role === "Admin") {
    console.log("Authenticated");
  } else {
    console.log("Unauthorized");
  }
};

app.use((req, res) => {
  console.log("Incoming Request...");
  console.log(`Request Type: ${req.method}`);
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

app.get("/movies", (req, res) => {
  res.send("You are in the movie directory");
});

app.get("/movies/:id/:name", (req, res) => {
  const { id, name } = req.params;
  res.send(`im a movie id in id ${id} and the ${name} in the movie directory`);
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
