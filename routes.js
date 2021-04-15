const router = require("express").Router();

router.get("/oranges", (req, res) => {
  res.status(200).send({
    fruit: "🍊🍊🍊",
  });
});

router.get("/berries", (req, res) => {
  res.status(200).send({
    fruit: "🍓",
  });
});

router.get("/pineapples", (req, res) => {
  res.status(200).send({
    fruit: "🍍🍍",
  });
});

router.post("/addItem", (req, res) => {
  const name = req.body.name;
  const item = req.body.item;

  if (!name || !item) {
    res.send("No name or item found! Please try again!");
  } else {
    res.send(`Thanks for your input: ${item} and ${name}`);
  }
});

module.exports = router;
