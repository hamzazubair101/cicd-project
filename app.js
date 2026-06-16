const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Landing Page
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>DevOps Pipeline Demo</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #0F172A;
                    color: #F8FAFC;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    margin: 0;
                }
                h1 { color: #38BDF8; font-size: 3rem; }
                p { color: #94A3B8; font-size: 1.5rem; }
                .badge {
                    background-color: #F97316;
                    color: white;
                    padding: 5px 15px;
                    border-radius: 20px;
                    font-size: 1rem;
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <h1>Automated Web Deployment Pipeline</h1>
            <p>Status: <span class="badge">Code Build Deploy Repeat</span></p>
            <p>Welcome to Chapter 26 DevOps Roadmap Live Demo!</p>
        </body>
        </html>
    `);
});

// Health Check Endpoint (Critical for AWS Load Balancer)
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', timestamp: new Date() });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});