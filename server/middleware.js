import {printDrainHydrateMarks} from 'react-imported-component';
import React from 'react';
import ReactDOM from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';

import App from '../app/App';
import generateHtml from './generateHtml';
import {getProjectStyles, getUsedStyles} from 'used-styles';

let projectStyles;
getProjectStyles(__dirname+'/../client').then(x => {
  projectStyles = x;
  console.log(x);
});

export default function middleware(req, res) {
  const context = {};
  const markup = ReactDOM.renderToString(
    <StaticRouter location={req.originalUrl} context={context}>
      <App/>
    </StaticRouter>
  ) + printDrainHydrateMarks();
  if (context.url) {
    return res.redirect(301, context.url);
  }
  const usedStyles = getUsedStyles(markup, projectStyles);
  console.log('used styles', usedStyles);
  const html = generateHtml( markup, usedStyles);
  res.send(html);
}
