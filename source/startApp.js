import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import session from 'express-session'
import passport from 'passport'
import flash from 'connect-flash'

import mongooseConfig from './config/mongoose'
import routes from './routes/routes'
import passportAuth from './config/passport'

const app = express();

const startApp = (envConfig) => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(morgan('combined'));
    app.use('/dist', express.static(__dirname + '/../dist/'));

    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/views/');
    
    app.use(session({secret: 'super'}));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());
    mongooseConfig(envConfig);
    passportAuth(passport);

    app.use('/', routes);
    app.listen(envConfig.port);
    console.log('Application running!', envConfig.port);

    return app
}

export default startApp