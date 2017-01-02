import express from 'express'
import messages from './messages'

const router = express.Router();

router.get('/', (req, res) => res.send("You shouldn't be here"));

router.use('/messages', messages);

export default router
