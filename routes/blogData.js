
let blogs = []; 

function addBlog(blog) {
    blogs.push(blog);
}
function deleteBlog (blogId) {
    blogs.splice(blogId,1);
}
function getAllBlogs() {
    return blogs;
}
function editBlog(blogId, newTitle, newContent) {
    if (blogId >= 0 && blogId < blogs.length) {
        blogs[blogId].title = newTitle;
        blogs[blogId].content = newContent;
        return true; // Return true to indicate successful edit
    }
    return false; // Return false if blogId is out of range
}
module.exports = { addBlog, getAllBlogs, deleteBlog, editBlog };
