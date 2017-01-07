import passportLocal from 'passport-local'
import User from '../models/users'
import configAuth from './auth'
import rfbStrategy from 'passport-facebook'

const FacebookStrategy = rfbStrategy.Strategy;
const LocalStrategy = passportLocal.Strategy

const setupPassport = (passport) => {

    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });


    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });

    passport.use('local-login', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback : true
        },
        (req, email, password, done) => { 
            User.findOne({ 'local.email' :  email }, function(err, user) {
                if (err)
                    return done(err);
                    
                if (!user)
                    return done(null, false, req.flash('loginMessage', 'No user found.'));
                    
                if (!user.validPassword(user, password)){
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
                }
                    
                return done(null, user);
            });
        }
    ));

    passport.use('local-signup', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        (req, email, password, done) => {
            process.nextTick(_ => {
                User.findOne({
                    'local.email': email
                }, (err, user) => {
                    if (err)
                        return done(err);

                    if (user) {
                        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                    } else {
                        var newUser = new User();

                        newUser.local.email = email;
                        newUser.local.password = newUser.generateHash(password);

                        newUser.save(err => {
                            if (err)
                                throw err;
                                console.log(newUser)
                            return done(null, newUser);
                        });
                    }

                });

            });

        }));
        const fbCred = {
            clientID: configAuth.facebookAuth.clientID,
            clientSecret: configAuth.facebookAuth.clientSecret,
            callbackURL: configAuth.facebookAuth.callbackURL
        };
        passport.use(new FacebookStrategy(fbCred, function(accessToken, refreshToken, profile, done) {
            User.findOne({
                'facebook.id': profile.id 
            }, function(err, user) {
            
                if (err) {
                    return done(err);
                }

                if (!user) {
                    user = new User({
                        name: profile.displayName,
                        username: profile.username,
                        provider: 'facebook',
                        facebook: profile._json
                    });
                
                    user.save(function(err) {
                        if (err) console.log(err);
                            return done(err, user);
                    });
                } else {
                    return done(err, user);
                }
                });
            }
        ));
};

export default setupPassport