const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog"); // Assuming blogData module is in the same directory

router.get('/', async(req, res) => {
    const allBlogs = await Blog.find();
    res.render('index', {blogs: allBlogs});
});


module.exports = router;
