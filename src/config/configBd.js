import { MongoClient } from "mongodb";

export default async function conectarBd() {

    try{
        const client = new MongoClient(process.env.STRING_URL_MONGO);
        console.log("[LOG-INFO] - Conectando ao Cluster do banco de dados Atlas Mongo...");

        await client.connect()
        console.log("[LOG-INFO] - Conexão com banco de dados realizado com sucesso...");

        return client;
    }catch(exceptions){
        console.log(`[LOG-ERROR] - Erro ao tentar conectar com banco de dados... STACKTRACE: ${exceptions}`);
        console.error("Falha ao tentar conectar com banco de dados...");
    }
} 