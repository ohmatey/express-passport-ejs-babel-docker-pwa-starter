import express from 'express'
import passport from 'passport'

const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login.ejs', { message: req.flash('loginMessage') });
});

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/login',
    passReqToCallBack: true
}));

router.get('/signup', (req, res) => {
    res.render('signup.ejs', { message: req.flash('signupMessage') });
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    passReqToCallBack: true
}));

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

const fbAuth = passport.authenticate('facebook', {
    successRedirect : '/',
    failureRedirect : '/'
})
router.get('/auth/facebook/callback', fbAuth);

export default router
