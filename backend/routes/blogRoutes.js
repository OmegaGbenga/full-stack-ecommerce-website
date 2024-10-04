const express = require("express");
const router = express.Router();

const blogController = require("../controller/blogController");


router.get('/', blogController.getBlogs);

module.exports = router;