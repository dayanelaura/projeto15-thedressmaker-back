import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;
try {
    await mongoClient.connect();
    db = mongoClient.db("orders");
} catch(error) {
    console.log(error);
}

//export const usersCollection = db.collection("users");
//export const sleevesCollection = db.collection("sleeves");
//export const necklinesCollection = db.collection("necklines");
//export const backCollection = db.collection("back");
//export const skirtsCollection = db.collection("skirts");
export const ordersCollection = db.collection("orders");