import express from 'express'
import Users from '../models/users'

const router = express.Router();

router.get('/', (req, res) => {
    Users.find((err, collection) => {
        if(err) return new Error(err)
        res.send(collection);
    });
});

export default router
