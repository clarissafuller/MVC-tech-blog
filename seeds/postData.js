const { Post } = require("../models");

const postdata = [
  {
    title: "Blossoming Apricot",
    author: "LedyX",
    text: "March 30, 2018",
  },
  {
    title: "Blossoming Apricot",
    author: "LedyX",
    text: "March 30, 2018",
  },
  {
    title: "Blossoming Apricot",
    author: "LedyX",
    text: "March 30, 2018",
  },
  {
    title: "Blossoming Apricot",
    author: "LedyX",
    text: "March 30, 2018",
  },
  {
    title: "Blossoming Apricot",
    author: "LedyX",
    text: "March 30, 2018",
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
