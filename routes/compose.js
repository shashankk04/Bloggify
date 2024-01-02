const router = require("express").Router();
const Blog = require("../models/Blog"); // Import the blog data module

router.get("/compose",async(req,res)=>{
    
    res.render("composeBlog");
});

router.post("/compose",(req,res)=>{
    const { title, content } = req.body;
    if(!title || !content) {
        return res.send("Please enter required credentials.");
    }

    const newBlog = new Blog({title,content});

    
    newBlog.save();

    res.redirect("/"); // Redirect to the home page after submitting the blog
});

module.exports = router;
