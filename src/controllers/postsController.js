import {buscarTodosPosts, buscarPorIdPosts} from "../models/postsModel.js"

export async function getAllPost(req, res) {
    const postsAll = await buscarTodosPosts();
    res.status(200).json(postsAll);
}

export async function getByIdPosts(req, res) {
    const postById = await buscarPorIdPosts(req.params.id)
    res.status(200).json(postById)    
}