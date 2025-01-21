import axios from "axios";
import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://secrets-api.appbrewery.com/random");
        const result = response.data;
        const secret = result.secret;
        const user = result.username;
        res.render("index.ejs",  { secret, user });
    } catch (error) {
        console.error("Error fetching a secret", error)
    }   
})

app.listen(port, () => {
    console.log(`Server is listening on port ${ port }`);
});