import {hot} from 'react-hot-loader';
import React from 'react';
import importedComponent from 'react-imported-component';

import {Helmet} from 'react-helmet';
import {Switch, Route, Redirect} from 'react-router-dom';

const page1 = importedComponent(() => import('./pages/page1'));
const page2 = importedComponent(() => import('./pages/page2'));

export default hot(module)(function App() {
    return (
        <div>
            <Helmet defaultTitle="page1">
                <meta charSet="utf-8"/>
            </Helmet>
            AppKA
            <Switch>
                <Route exact path="/" component={page1}/>
                <Route exact path="/page2" component={page2}/>
                <Redirect to="/"/>
            </Switch>
        </div>
    );
})
