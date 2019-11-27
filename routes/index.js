const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("main route");
  res.render("home");
});

router.get("/home", (req, res) => {
    console.log("home page");
    res.render("home");
  });

router.get("/contact", (req, res) => {
  console.log("contact page");
  res.render("contact");
});

router.get("/work", (req, res) => {
  console.log("work page");
  res.render("work");
});

module.exports = router;
