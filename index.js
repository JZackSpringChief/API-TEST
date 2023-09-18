import express from "express";

const app = express();
const port = 5777;

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

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
