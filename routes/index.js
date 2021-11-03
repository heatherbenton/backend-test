const express = require("express");
const router = express.Router();

// request and send responses
router.get("/", (req, res) => {
	res.render("index");
});

module.exports = router;
