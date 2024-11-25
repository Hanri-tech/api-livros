import { ObjectId } from "mongodb";
import conectarBd from "../config/configBd.js";


const DB_NAME = "IMERSAODB";
const COLLECTION_NAME = "posts";

async function getBanco(){
    const conn = await conectarBd();
    const banco = conn.db(DB_NAME);
    return banco;

}

export async function buscarTodosPosts(){
    const banco = await getBanco();

    const collections = banco.collection(COLLECTION_NAME);

    return collections.find().toArray();
}

export async function buscarPorIdPosts(id){
    const objID = new ObjectId(id);
    const findOne = {_id: objID};

    const banco = await getBanco();

    const findId = await banco.collection(COLLECTION_NAME).findOne(findOne);

    return findId;
}

export async function savePost(body){

    const banco = await getBanco();
    const collection = await banco.collection(COLLECTION_NAME);

    return collection.insertOne(body);
}