import {buscarTodosPosts, buscarPorIdPosts, savePost} from "../models/postsModel.js"

export async function getAllPost(req, res) {
    const postsAll = await buscarTodosPosts();
    res.status(200).json(postsAll);
}

export async function getByIdPosts(req, res) {
    const postById = await buscarPorIdPosts(req.params.id)
    res.status(200).json(postById)    
}

export async function createPost(req, res) {
    const reqBody = req.body;
    console.log(reqBody)
    try{
        const response = await savePost(reqBody);
        res.status(201).json(response);
    }catch(exceptions){
        console.log(`[LOG-ERROR] - Erro ao tentar inserir registro no banco de dados... STACKTRACE: ${exceptions}`);
        res.status(500).json({error: "Falha Interna ao inserir registro no banco de dados..."})
    }

}