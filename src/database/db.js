import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;
try {
    await mongoClient.connect();
    db = mongoClient.db("theDressmaker");
    console.log("MongoDB Connected!");
} catch(error) {
    console.log(error);
}

export const usersCollection = db.collection("users");
export const sessionsCollection = db.collection("sessions");
export const ordersCollection = db.collection("orders");
//export const sleevesCollection = db.collection("sleeves");
//export const necklinesCollection = db.collection("necklines");
//export const backCollection = db.collection("back");
//export const skirtsCollection = db.collection("skirts");
//Não precisa coleções para isso. No front já dá para enviar as 
//strings necessárias pelo input de cada imagem que o usuário escolher pelo onClick