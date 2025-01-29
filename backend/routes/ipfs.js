import express from "express"
const ipfsRouter = express.Router()

ipfsRouter.post("/",(req,res)=>{
    res.json({"message":"Upload deliverables to IPFS and store CID"});
})

export default ipfsRouter;