import express from "express";

const userRouter = express.Router();

userRouter.post("/", (req, res) => {
    res.json({ message: "CREATE USER Route" });
});

// TODO: On DELETE: CASCADE
userRouter.delete("/", (req, res) => {
    res.json({ message: "DELETE USER Route" });
});

userRouter.get("/:userId", (req, res) => {
    const { userId } = req.params;
    res.json({ message: userId });
});

export default userRouter;
