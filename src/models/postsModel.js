import dbConnect from "../config/dbConfig.js";

const conexao = await dbConnect(process.env.CONNECTION_STRING);


export default async function getAllPosts() {
    const db = conexao.db("instabytes");
    const collection = db.collection("posts");
    return collection.find().toArray();
}