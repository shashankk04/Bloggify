const express = require("express");
const router = express.Router();
const blogData = require("./blogData"); // Assuming blogData module is in the same directory

router.get('/', (req, res) => {
    const blogs = blogData.getAllBlogs().map((blog, index) => ({ ...blog, blogId: index }));
    res.render('index', { blogs });
});



router.get('/blog/:id', (req, res) => {
    const blogId = req.params.id;
    const blogs = blogData.getAllBlogs();

    if (isNaN(blogId) || blogId < 0 || blogId >= blogs.length) {
        res.status(404).send('Blog not found');
    } else {
        const blog = blogs[blogId];
        res.render('blog', { blog });
    }
});

router.get("/delete/:id", (req, res) => {
    const blogId = req.params.id;
    blogData.deleteBlog(blogId); // 
    res.redirect("/");
});
router.get("/edit/:id", (req, res) => {
    const blogId = req.params.id;
    const blogs = blogData.getAllBlogs();

    if (blogId >= 0 && blogId < blogs.length) {
        const blog = blogs[blogId];
        res.render('edit', { blogId, blog });
    } else {
        res.status(404).send('Blog not found');
    }
});


router.post("/edit/:id", (req, res) => {
    const blogId = req.params.id;
    const newTitle = req.body.newTitle;
    const newContent = req.body.newContent;

    const edited = blogData.editBlog(blogId, newTitle, newContent);

    if (edited) {
        res.redirect("/");
    } else {
        res.status(404).send('Blog not found');
    }
});

module.exports = router;
