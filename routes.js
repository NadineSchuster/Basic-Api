const router = require("express").Router();

router.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "👕",
    size: "large",
  });
});

router.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: "We need a logo!" });
  }

  res.send({
    tshirt: `👕 with your ${logo} and ID of ${id}`,
  });
});

module.exports = router;
