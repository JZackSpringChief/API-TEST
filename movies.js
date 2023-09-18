import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("You are in the movie directory");
});

router.get("/:id/:name", (req, res) => {
  const { id, name } = req.params;
  res.send(`im a movie id in id ${id} and the ${name} in the movie directory`);
});

export default router;
