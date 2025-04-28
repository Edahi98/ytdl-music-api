const { ytmp3 } = require("@hiudyy/ytdl");
const express = require("express")
const cors = require("cors")

const app = express();
const port = process.env.PORT || 3001;
app.use(cors())

app.get("/ytld", (req, res)=>{
    ytmp3(req.query.url).then(audio =>{
        return res.send({"base64": audio.toString("base64")});
    });
});

app.listen(port, ()=>{
    console.log(`Listen in ${port}`)
});