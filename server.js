import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads"))
routes(app);

app.listen(3000, () => {
    console.log("server listening...");
});




// function buscarPostID(id) {
//     return posts.findIndex((posts) => {
//         return posts.id === Number(id);
//     });
// }

// app.get("/posts/:id", (req, res) => {
//     const index = buscarPostID(req.params.id);
//     res.status(200).send(posts[index]);
// });

// const posts = [
//   {
//     id: 1,
//     descricao: "Foto teste",
//     imagem: "https://placecats.com/millie/300/150"
//   },
//   {
//     id: 2,
//     descricao: "Um post de texto longo e detalhado sobre um assunto interessante.",
//     imagem: "https://placecats.com/millie/300/150" // Substitua por uma imagem representativa de texto
//   },
//   {
//     id: 3,
//     descricao: "Vídeo interessante sobre um tópico X",
//     imagem: "https://placecats.com/millie/300/150" // Thumbnail do vídeo
//   },
//   {
//     id: 4,
//     descricao: "Galeria de imagens sobre a natureza",
//     imagem: "https://placecats.com/millie/300/150" // Uma imagem representativa da galeria
//   },
//   {
//     id: 5,
//     descricao: "Camiseta personalizada disponível em vários tamanhos",
//     imagem: "https://placecats.com/millie/300/150" // Imagem de uma camiseta
//   },
//   {
//     id: 6,
//     descricao: "Workshop de JavaScript com vagas limitadas",
//     imagem: "https://placecats.com/millie/300/150" // Imagem com texto
//   }
// ];