import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { ChunkExtractor } from '@loadable/server'

import App from '../../src/App';

const path = require("path");
const fs = require("fs");

export default (req, res, next) => {
    const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');
    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        }
        const statsFile = path.resolve(__dirname, '..', '..', 'build', 'loadable-stats.json')
        const extractor = new ChunkExtractor({ statsFile })
        const jsx = extractor.collectChunks(<App />)
        const html = ReactDOMServer.renderToString(jsx)
        res.set('content-type', 'text/html')
        return res.send(`<!DOCTYPE html>
<html>
<head>
${extractor.getLinkTags()}
${extractor.getStyleTags()}
</head>
<body>
<div id="main">${html}</div>
${extractor.getScriptTags()}
</body>
</html>
`)
    });
}
