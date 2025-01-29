import { PrismaClient } from "@prisma/client";
import catchAsync from "../utils/catchAsync.js"
import express from "express";

const userRouter = express.Router();
const dbClient = new PrismaClient();

userRouter.post("/", catchAsync(async (req, res) => {
    const newUser = req.body
    const createdUser = await dbClient.users.create({
        data:newUser
    })
    res.json(createdUser);
}));

// TODO: On DELETE: CASCADE
userRouter.delete("/", catchAsync(async (req, res) => {
    const {walletAddress} = req.body;
    const deletedUser = await dbClient.users.delete({
        where:{
            walletAddress:walletAddress
        }
    })
    res.json(deletedUser);
}));

userRouter.get("/:walletAddress",catchAsync(async (req, res) => {
    const { walletAddress } = req.params;
    const fetchedUser = await dbClient.users.findUnique({
        where:{
            walletAddress:walletAddress
        }
    })
    res.json(fetchedUser);
}));

export default userRouter;
