import { ordersCollection } from "../database/db.js";

export async function createOrder(req, res){
    const order = res.locals.order;

    try{
        await ordersCollection.insertOne(order);
        res.sendStatus(201);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}

export async function findAllOrders(req, res){
    try {
       const allOrders = await ordersCollection.find({}).toArray();
       res.send(allOrders);
    } catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}