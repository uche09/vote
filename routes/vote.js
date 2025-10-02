import express from 'express';
import {readVotesFile, writeVotesFile} from '../json-parser/index.js';
import {
    calVotesPercentage,
    incrementYes,
    incrementNo
} from '../util.js';


const dayInSeconds = 24 * (60 * 60);
const hourInSeconds = 60 * 60;

const router = express.Router();

const checkVoteStatus = async (req, res, next) => {
    const voteStatus = req.cookies.voted;

    if (voteStatus) {
        const votes = await readVotesFile();
        const votesPercentages = calVotesPercentage(votes);

        return res.status(400).render("result", {percent: votesPercentages});
    }

    next();
}

router.post("/", checkVoteStatus, async (req, res) => {
    let userChoice = req.body.vote;
    let votes = await readVotesFile();

    if ( typeof(userChoice) === "string" && userChoice.toLowerCase() === "yes") {
        res.cookie("voted", true, {
            maxAge: 1000 * (hourInSeconds),
        });

        votes = incrementYes(votes);
        writeVotesFile(votes);
        
        const votesPercentages = calVotesPercentage(votes);

        res.render("result", {percent: votesPercentages});

    } else if (typeof(userChoice) === "string" && userChoice.toLowerCase() === "no") {
        res.cookie("voted", true, {
            maxAge: 1000 * (hourInSeconds),
        });

        votes = incrementNo(votes);
        writeVotesFile(votes);
        const votesPercentages = calVotesPercentage(votes);

        res.render("result", {percent: votesPercentages});
    } else {
        res.status(400).send("Invalid vote");
    }
}); 


export default router;