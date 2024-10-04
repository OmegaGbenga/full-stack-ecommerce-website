const multer = require('multer');
const Blog = require('../model/Blog')

const getBlogs = async(req, res) => {
    try {
        const blogs = await Blog.find();

        if(!blogs){
            return res.json({
                status: false,
                message: "Blogs does not exist!"
            })
        }

        res.json({
            status: true,
            message: "Blogs fetched successfully",
            data: blogs
        })
        
    } catch (error) {
        res.json({
            status: false,
            message: "Server error" + error
        })
    }
}

module.exports = {
    getBlogs
}


//const upload = multer({ dest: 'uploads/' });