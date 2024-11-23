import fs from "fs";
import { getAllPosts, createNewPost, updatePost }from "../models/postsModel.js";
import gerarDescricaoComGemini from "../services/geminiServices.js";



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
      res.status(500).json({"error:" : "cannot createPost"});
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
      res.status(500).json({"error:" : "cant createNewPost"});
    }
  }


  export async function updateNewPost(req,res) {
    const id = req.params.id;
    const urlImg = `http://localhost:3000/${id}.png`

    try {
      const imgBuffer = fs.readFileSync(`uploads/${id}.png`)
      const descricao = await gerarDescricaoComGemini(imgBuffer);
      
      const post = {
        imgURL: urlImg,
        descricao : descricao,
        alt : req.body.alt
      };
      const toPost = await updatePost(id, post);
      res.status(200).send(toPost);
    } catch(err) {
      console.error(err.message);
      res.status(500).json({"error:" : "cannot updateNewPost"});
    }
  }
