import express from 'express'
import Message from '../models/message'

const router = express.Router();

router.get('/', (req, res) => {
    var msg = new Message

    Message.find((err, collection) => {
        if(err) return console.error(err);
        res.send(collection);
    });
});

router.put('/', (req, res) => {
    var msg = new Message

    Message.find((err, collection) => {
        if(err) return console.error(err);
        res.send(collection);
    });
})

router.get('/', (req, res) => {
    var msg = new Message

    Message.find((err, collection) => {
        if(err) return console.error(err);
        res.send(collection);
    });
})

router.get('/', (req, res) => {
    var msg = new Message

    Message.find((err, collection) => {
        if(err) return console.error(err);
        res.send(collection);
    });
})

export default router
