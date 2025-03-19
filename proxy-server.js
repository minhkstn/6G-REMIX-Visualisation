/* -----------------------------------------------------------------------------
 * Copyright (c) 2023, Fraunhofer-Gesellschaft zur Förderung der angewandten Forschung e.V.
 * All rights reserved.

 * For more information please contact:
 * Fraunhofer FOKUS
 * Kaiserin-Augusta-Allee 31
 * 10589 Berlin, Germany
 * https://www.fokus.fraunhofer.de/go/fame
 * famecontact@fokus.fraunhofer.de
 * -----------------------------------------------------------------------------
 */

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Set CORS headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/api', createProxyMiddleware({
    target: 'http://<netio-ip>', // replace with the IP address of NETIO device such as http://10.147.66.186
    changeOrigin: true,
    pathRewrite: {
        '^/api': '',
    },
}));

// Handle the root URL
app.get('/', (req, res) => {
    res.send('Proxy server is running');
});

app.listen(3000, () => {
    console.log('Proxy server is running on http://localhost:3000');
});