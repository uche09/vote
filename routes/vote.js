import express from 'express';


const dayInSeconds = 24 * (60 * 60);
const hourInSeconds = 60 * 60;

const router = express.Router();

const checkVoteStatus = (req, res, next) => {
    const voteStatus = req.cookies.voted;

    if (voteStatus) {
        res.status(400)
        res.render("result", {no: 80, yes: 20});
    }

    next();
}

router.post("/", checkVoteStatus, (req, res) => {
    let userChoice = req.body.vote;

    if (userChoice == "yes") {
        res.cookie("voted", true, {
            maxAge: 1000 * (hourInSeconds),
        });

        res.send(`You voted yes`);

    } else if (userChoice == "no") {
        res.cookie("voted", true, {
            maxAge: 1000 * (hourInSeconds),
        });

        res.send("You voted no");
    } else {
        res.status(400).send("Invalid vote");
    }
}); 


export default router;