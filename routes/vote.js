import express from 'express';

const router = express.Router();

router.post("/", (req, res) => {
    res.json({
        message: "About us"
    })
}); 


export default router;