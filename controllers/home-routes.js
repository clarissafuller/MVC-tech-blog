const router = require("express").Router();
const { User, Post } = require("../models");

// GET all posts for homepage
router.get("/", async (req, res) => {
  try {
    const dbPostData = await Post.findAll();

    const posts = dbPostData.map((post) => post.get({ plain: true }));

    res.render("homepage", {
      posts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//route for the login page that renders the login handlebars
router.get("/login", (req, res) => {
  // You can render a "login" handlebars view here
  res.render("login");
});

// GET one post
// router.get("/gallery/:id", async (req, res) => {
//   try {
//     const dbGalleryData = await Gallery.findByPk(req.params.id, {
//       include: [
//         {
//           model: Painting,
//           attributes: [
//             "id",
//             "title",
//             "artist",
//             "exhibition_date",
//             "filename",
//             "description",
//           ],
//         },
//       ],
//     });

//     const gallery = dbGalleryData.get({ plain: true });
//     res.render("gallery", { gallery });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // GET one painting
// router.get("/painting/:id", async (req, res) => {
//   try {
//     const dbPaintingData = await Painting.findByPk(req.params.id);

//     const painting = dbPaintingData.get({ plain: true });

//     res.render("painting", { painting });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;
