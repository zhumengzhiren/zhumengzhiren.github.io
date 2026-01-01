// server/index.js
const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const mysql = require('mysql2');
const db = require('./db.js');
const { createProxyMiddleware } = require('http-proxy-middleware');


app.use(express.urlencoded({ extended: true }));

// Configure CORS to allow requests from frontend
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

app.use(express.json());

// User authentication removed - no longer needed

// Database visualization dashboard
const databaseRouter = require('./routes/database');
app.use('/', databaseRouter);

// server/index.js
const path = require('path');




app.use('/calibre', createProxyMiddleware({
    target: 'http://localhost:8083', // Calibre Web address
    changeOrigin: true,
    pathRewrite: {
        '^/calibre': '', // Remove /calibre prefix from request path
    },
}));

// Should be put the most under.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});
