const router = require("express").Router();
const blogData = require("./blogData"); // Import the blog data module

router.get("/compose",(req,res)=>{
    res.render("composeBlog");
});

router.post("/compose",(req,res)=>{
    const { title, content } = req.body;
    if(!title || !content) {
        return res.send("Please enter required credentials.");
    }

    const newBlog = {
        title,
        content
    };

    // Use the function from blogData.js to add the blog
    blogData.addBlog(newBlog);

    res.redirect("/"); // Redirect to the home page after submitting the blog
});

module.exports = router;
