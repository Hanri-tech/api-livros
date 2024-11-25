import express from "express"
import { getAllPost, getByIdPosts, createPost, uploadImg } from "../controllers/postsController.js";
import multer from "multer";
import path from "path";

// Essa Logica de salvar arquivo precisa ser escrita apenas na maquina WINDOWS.
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Define a pasta onde os arquivos serão armazenados
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        // Define o nome do arquivo (mantendo a extensão original)
        cb(null, `${file.fieldname}${path.extname(file.originalname)}`);
    },
});

const upload = multer({dest : "./uploads", storage})

const routers = (app) => {
    app.use(express.json());
    
    app.get("/posts", getAllPost);
        
    app.get("/posts/:id", getByIdPosts);

    app.post("/posts", createPost);

    app.post("/upload", upload.single("imagem"), uploadImg);
}

export default routers;