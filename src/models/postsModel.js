const arrayListAutores = [
    {id: 1, autor: "CONSTANCE", descriacao: "Livro java desing patterns"},
    {id: 2, autor: "CTC", descriacao: "Livro java desing patterns"},
    {id: 3, autor: "FRANSING", descriacao: "Livro java desing patterns"}
];

export async function buscarTodosPosts(){
    return arrayListAutores;
}

export async function buscarPorIdPosts(id){
    const autor = arrayListAutores.find(obj => obj.id === Number(id))
    return autor
}