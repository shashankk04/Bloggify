const router = require("express").Router();
const blogData = require("./blogData"); // Import the blog data module

router.get("/", (req, res) => {
    const blogs = blogData.getAllBlogs(); // Get all blogs using the function from blogData.js
    res.render("index", { blogs });
});

module.exports = router;
