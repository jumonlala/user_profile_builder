const express = require("express")
const path = require("path"); 

var app = express();
const port = 80;
const htmlDirectory = path.join(__dirname, "html");

app.use(express.static(htmlDirectory));

app.get("/", (req, res) => {
    res.sendFile(path.join(htmlDirectory, "index.html"));
});

app.get("/upload", (req, res) => {
    res.sendFile(path.join(htmlDirectory, "upload.html"));
});

app.get("/video", (req, res) => {
    res.sendFile(path.join(htmlDirectory, "video.html"));
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});