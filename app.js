import express from 'express';
import cookieParser from 'cookie-parser';
import vote from './routes/vote.js';

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.urlencoded({extended: true }));


app.get("/", (req, res) => {
    if (req.cookies.voted) {
        res.send("Redirect to result");
    }

    res.render("index");
    
});

app.use("/vote", vote);


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});