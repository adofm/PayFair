import express from "express";

const jobRouter = express.Router();

jobRouter.get("/", (req, res) => {
    res.json({ message: "GET JOBS" });
});

jobRouter.post("/", (req, res) => {
    res.json({ message: "CREATE JOB" });
});

jobRouter.get("/:jobId", (req, res) => {
    const { jobId } = req.params;
    res.json({ message: jobId });
});

export default jobRouter;