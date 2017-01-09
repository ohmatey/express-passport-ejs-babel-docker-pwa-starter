import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

import configureStore from '../common/store/configureStore'
import routes from '../common/router'
import AppRouter from '../common/components/AppRouter'
import NoFoundPage from '../common/components/NoFoundPage'

const router = express.Router();

router.get('/', (req, res) => {
    match(
        { routes, location: req.url },
        (err, redirectLocation, renderProps) => {
            // in case of error display the error message
            if (err) {
                return res.status(500).send(err.message);
            }

            // in case of redirect propagate the redirect to the browser
            if (redirectLocation) {
                return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
            }

            // generate the React markup for the current route
            let Markup;
            if(renderProps){
                // if the current route matched we have renderProps
                Markup = () => <RouterContext {...renderProps}/>
            }else{
                // otherwise we can render a 404 page
                Markup = () => <NoFoundPage/>
                res.status(404);
            }
            // render the index template with the embedded React markup
            
            const store = configureStore()
            const initialState = JSON.stringify(store.getState())

            Markup = renderToString(
                <Provider className="root" store={store}>
                    <Markup history={hashHistory}  />
                </Provider>
            );
            console.log(Markup)
            
            return res.render('index', {
                markup: Markup,
                initialState
            });
        }
    );
});

export default router
