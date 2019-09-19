const express = require('express');
const app = express();
const fs = require('fs');
const multer = require('multer');
const {TesseractWorker} = require('tesseract.js');
const worker = new TesseractWorker();

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "./uploads")
    },
    filename: (req, res, cb) => {
        cb(null, req.file)
    }
});

const upload = multer({storage: storage}).single('avatar');
app.set('view engine','ejs');

// routes
app.get('/',(req,res)=>{
    res.render('index');
});

app.post('/upload',(req,res)=>{
    upload
});

// start up our server
const PORT = 500;
app.listen(PORT, ()=>console.log(`hey I'm running on port ${PORT}`));
