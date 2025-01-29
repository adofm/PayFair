import { PrismaClient } from "@prisma/client";
import catchAsync from "../utils/catchAsync.js"
import express from "express";

const jobRelationsRouter = express.Router();
const dbClient = new PrismaClient();

jobRelationsRouter.post("/",catchAsync(async (req,res)=>{
    const newRelation = req.body;
    const createdRelation = await dbClient.job_relations.create({
        data:newRelation
    });
    res.send(createdRelation);
}))

jobRelationsRouter.delete("/",catchAsync(async (req,res)=>{
    const relation = req.body;
    console.log(relation.walletAddress,relation.jobId)
    const deletedRelation = await dbClient.job_relations.delete({
        where: {
          walletAddress_jobId: {
            jobId: relation.jobId,
            walletAddress: relation.walletAddress,
          },
        },
      });
    res.send(deletedRelation);
}))


export default jobRelationsRouter