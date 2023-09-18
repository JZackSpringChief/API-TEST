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

router.use((req, res, next) => {
  console.log("Incoming Request...");
  console.log(`Request Type: ${req.method}`);
  next();
});

export default router;
