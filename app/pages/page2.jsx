import React from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from "react-helmet";

export default function Page2() {
    return <div>
        <Helmet defaultTitle="page2">
            <meta charSet="utf-8"/>
        </Helmet>
        <h1>Page2</h1>
        <br/>
        <Link to="/">Home</Link>
    </div>
}
