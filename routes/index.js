const express = require("express");
const messageModel = require("../models/message");

const router = express.Router();

async function getMessageAll() {
    try {
        const messages = await messageModel.find().sort({time: -1});
        return messages;
    } catch (error) {
        console.error(error);
    }
}

router.get('/', async (req, res) => {
    const messages = await getMessageAll();
    res.render('index', {messages: messages});
});

router.get('/new', (req, res) => {
    res.render('form');
});

router.post('/new', async (req, res) => {
    const author = req.body.name;
    const message = req.body.message;
    const newMessage = new messageModel({author: author, text: message});
    await newMessage.save();
    res.redirect('/');
});

module.exports = router;