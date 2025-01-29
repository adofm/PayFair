import express from "express";
import { PrismaClient } from "@prisma/client";
import catchAsync from "../utils/catchAsync.js";
import { v4 as uuidv4 } from 'uuid';

const jobRouter = express.Router();
const dbClient = new PrismaClient();


jobRouter.get("/", catchAsync(async (req, res) => {
    const allJobs = await dbClient.jobs.findMany();
    res.json(allJobs);
}));

jobRouter.post("/", catchAsync(async (req, res) => {
    const newJob = req.body
    newJob.jobId = uuidv4();
    const createdJob = await dbClient.jobs.create({
        data:newJob
    })
    res.json(createdJob);
}));

jobRouter.get("/:jobId", catchAsync(async (req, res) => {
    const { jobId } = req.params;
    const fetchedJob = await dbClient.jobs.findUnique({
        where:{
            jobId:jobId
        }
    })
    res.json(fetchedJob);
}));

jobRouter.delete("/:jobId", catchAsync(async (req, res) => {
    const {jobId} = req.params
    const deletedJob = await dbClient.jobs.delete({
        where:{
            jobId:jobId
        }
    })
    res.json(deletedJob);
}));


export default jobRouter;