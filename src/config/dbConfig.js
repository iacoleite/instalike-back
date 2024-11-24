import { MongoClient } from "mongodb";

export default async function dbConnect(connectionString) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(connectionString);
        console.log("Trying to connect to dbCluster...");
        await mongoClient.connect();
        console.log("Connection estabilished");
        
        return mongoClient;
    } catch (err) {
        console.log("Connection failed!", err);
        process.exit();
    }
}