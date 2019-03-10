import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { ChunkExtractor } from '@loadable/server'

import App from '../../src/App';

const path = require("path");
const fs = require("fs");

export default (req, res, next) => {
    const statsFile = path.resolve(__dirname, '..', '..', 'build', 'loadable-stats.json')
    const extractor = new ChunkExtractor({ statsFile })
    const jsx = extractor.collectChunks(<App />)
    const html = ReactDOMServer.renderToString(jsx)
    res.set('content-type', 'text/html')
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<link rel="shortcut icon" href="/favicon.ico" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
<meta name="theme-color" content="#000000" />
<link rel="manifest" href="/manifest.json" />
${extractor.getStyleTags()}
<title>React Code Splitting</title>
</head>
<body>
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root">${html}</div>
${extractor.getScriptTags()}
</body>
</html>
`)
}
