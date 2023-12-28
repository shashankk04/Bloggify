
let blogs = []; 

function addBlog(blog) {
    blogs.push(blog);
}

function getAllBlogs() {
    return blogs;
}

module.exports = { addBlog, getAllBlogs };
