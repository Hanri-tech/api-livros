import express from "express"
import { getAllPost, getByIdPosts } from "../controllers/postsController.js";

const routers = (app) => {
    app.use(express.json());
    
    app.get("/posts", getAllPost);
        
    app.get("/posts/:id", getByIdPosts);
}

export default routers;