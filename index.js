const { ytmp3 } = require("@hiudyy/ytdl");
const express = require("express")
const cors = require("cors")

const app = express();
const port = process.env.PORT || 3001;
app.use(cors())

app.get("/ytld", (req, res)=>{
    ytmp3(req.query.url).then(audio =>{
        return res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Solicitud de descarga procesada</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js" integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq" crossorigin="anonymous"></script>
</head>
<body>
    <h1>Solitud de descarga aprobada</h1>
    <a href="data:audio/mp3;${audio.toString("base64")}" download="${req.query.nombre}.mp3">
        <button type="button" class="btn btn-success">Descargar musica</button>
    </a>
    <audio controls src="data:audio/mp3;${audio.toString("base64")}"></audio>
</body>
</html>`)
    });
});

app.listen(port, ()=>{
    console.log(`Listen in ${port}`)
});