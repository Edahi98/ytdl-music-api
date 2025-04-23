const { ytmp3 } = require("@hiudyy/ytdl");
const express = require("express")
const cors = require("cors")

const app = express();
const port = process.env.PORT || 3001;
app.use(cors())

app.get("/ytld", (req, res)=>{
    ytmp3(req.query.url).then(audio =>{
        res.setHeader("Content-Disposition", `attachment; filename="${req.query.nombre}.mp3"`);
        res.setHeader("Content-Type", "audio/mpeg");
        return res.send(audio);
    });
});

app.listen(port, ()=>{
    console.log(`Listen in ${port}`)
});