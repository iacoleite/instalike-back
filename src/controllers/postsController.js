import fs from "fs";
import { getAllPosts, createNewPost }from "../models/postsModel.js";



export async function listPosts(req, res) {
    const posts = await getAllPosts();
    res.status(200).send(posts);
  }

  export async function createPost(req,res) {
    const newPost = req.body;
    try {
      const toPost = await createNewPost(newPost);
      res.status(200).send(toPost);
    } catch(err) {
      console.error(err.message);
      res.status(500).json({"error:" : "request failed"});
    }
  }

  export async function uploadImage(req,res) {
    const newPost = {
      descricao: "",
      imgURL: req.file.originalname,
      alt: ""
    };

    try {
      const toPost = await createNewPost(newPost);
      const imgRenamed = `uploads/${toPost.insertedId}.png`;
      fs.renameSync(req.file.path, imgRenamed);
      res.status(200).send(toPost);
    } catch(err) {
      console.error(err.message);
      res.status(500).json({"error:" : "request failed"});
    }
  }
