import express from 'express';
import cookieParser from 'cookie-parser';
import vote from './routes/vote.js';
import { readVotesFile } from './json-parser/index.js';
import { calVotesPercentage } from './util.js';

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.urlencoded({extended: true }));


app.get("/", async (req, res) => {
    if (req.cookies.voted) {

        const votes = await readVotesFile();
        const votesPercentages = calVotesPercentage(votes);

        return res.render("result", {percent: votesPercentages})
    }

    res.render("index");
    
});

app.use("/vote", vote);


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});