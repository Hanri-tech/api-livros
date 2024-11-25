import express from "express"
import { getAllPost, getByIdPosts, createPost } from "../controllers/postsController.js";

const routers = (app) => {
    app.use(express.json());
    
    app.get("/posts", getAllPost);
        
    app.get("/posts/:id", getByIdPosts);

    app.post("/posts", createPost);
}

export default routers;