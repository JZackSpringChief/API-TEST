import express from "express";
const router = express.Router();

// middle ware look up 'morgan middle ware'
const authentication = (req, res) => {
  if (req.body.role === "Admin") {
    console.log("Authenticated");
  } else {
    console.log("Unauthorized");
  }
};

router.use(authentication);

export default router;
