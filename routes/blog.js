const express = require("express");
const path = require("path");
const blogs = require(path.join(__dirname, "../data/blogs.js"));
const router = express.Router();

router.get('/', (req,res)=>{
    // res.sendFile(path.join(__dirname,"../views/html/index.html"));
    res.render('home');
});
router.get('/blogs', (req,res)=>{
    // res.sendFile(path.join(__dirname,"../views/html/blogs"));
    res.render('blogHome', {
        blogs:blogs
    });
});
router.get('/blogs/:slug' , (req,res)=>{
    myBlog = blogs.filter((e)=>{
        return e.slug == req.params.slug;
    });
    // res.sendFile(path.join(__dirname,`../views/html/${myBlog[0].slug}.html`));
    res.render('blogPage', {
        title: myBlog[0].title,
        content: myBlog[0].content,
        date: myBlog[0].date,
        slug: myBlog[0].slug
    })
})

module.exports = router;
