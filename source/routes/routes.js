import express from 'express'
import fs from 'fs'
import isLoggedIn from '../utils/isLoggedIn'
import passport from 'passport'
import users from './users'
import auth from './auth'
import renderPage from './renderPage'

const router = express.Router();

router.get('/api', isLoggedIn, (req, res) => res.send("You shouldn't be here"));
router.use('/api/users', users);

router.use('/auth', auth);
router.use('/', renderPage);

router.get('/', (req, res) => {
    res.render('index.ejs', { authenticated: req.isAuthenticated() });
});



export default router
