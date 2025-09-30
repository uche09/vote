import express from 'express';
import vote from "./routes/vote.js";

const app = express();
const PORT = 3000;
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.send("TODO");
    
});

app.use("/vote", vote);


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});