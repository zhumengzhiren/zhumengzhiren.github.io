const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all database tables and their data
router.get('/db-admin', async (req, res) => {
    try {
        // Get all tables
        db.query('SHOW TABLES', (err, tables) => {
            if (err) {
                return res.status(500).send('Database error');
            }

            const tableName = Object.keys(tables[0])[0];
            const tableNames = tables.map(t => t[tableName]);
            
            const promises = tableNames.map(table => {
                return new Promise((resolve, reject) => {
                    db.query(`SELECT * FROM ${table}`, (err, data) => {
                        if (err) reject(err);
                        else resolve({ table, data });
                    });
                });
            });

            Promise.all(promises)
                .then(results => {
                    res.send(generateHTML(results));
                })
                .catch(err => {
                    res.status(500).send('Error fetching data: ' + err.message);
                });
        });
    } catch (err) {
        res.status(500).send('Server error: ' + err.message);
    }
});

// API endpoint to get database data as JSON
router.get('/db-admin/api', (req, res) => {
    db.query('SHOW TABLES', (err, tables) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }

        const tableName = Object.keys(tables[0])[0];
        const tableNames = tables.map(t => t[tableName]);
        
        const promises = tableNames.map(table => {
            return new Promise((resolve, reject) => {
                db.query(`SELECT * FROM ${table}`, (err, data) => {
                    if (err) reject(err);
                    else resolve({ table, data });
                });
            });
        });

        Promise.all(promises)
            .then(results => {
                res.json(results);
            })
            .catch(err => {
                res.status(500).json({ error: err.message });
            });
    });
});

function generateHTML(data) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Database Admin - Visual Dashboard</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
        }

        .header {
            background: rgba(255, 255, 255, 0.95);
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
            margin-bottom: 30px;
            backdrop-filter: blur(10px);
        }

        .header h1 {
            color: #667eea;
            font-size: 2.5rem;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .header p {
            color: #666;
            font-size: 1.1rem;
        }

        .stats {
            display: flex;
            gap: 20px;
            margin-bottom: 30px;
            flex-wrap: wrap;
        }

        .stat-card {
            background: rgba(255, 255, 255, 0.95);
            padding: 20px 30px;
            border-radius: 12px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
            flex: 1;
            min-width: 200px;
        }

        .stat-card h3 {
            color: #999;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 10px;
        }

        .stat-card .number {
            font-size: 2.5rem;
            font-weight: bold;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .table-section {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 15px;
            padding: 30px;
            margin-bottom: 30px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
            animation: fadeIn 0.5s ease-in;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .table-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 3px solid #667eea;
        }

        .table-header h2 {
            color: #333;
            font-size: 1.8rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .badge {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 600;
        }

        .data-table {
            width: 100%;
            border-collapse: collapse;
            overflow: hidden;
            border-radius: 8px;
        }

        .data-table thead {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }

        .data-table th {
            padding: 15px;
            text-align: left;
            font-weight: 600;
            text-transform: uppercase;
            font-size: 0.85rem;
            letter-spacing: 1px;
        }

        .data-table td {
            padding: 15px;
            border-bottom: 1px solid #f0f0f0;
            color: #555;
        }

        .data-table tbody tr {
            transition: all 0.3s ease;
        }

        .data-table tbody tr:hover {
            background: #f8f9ff;
            transform: scale(1.01);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .data-table tbody tr:last-child td {
            border-bottom: none;
        }

        .empty-state {
            text-align: center;
            padding: 40px;
            color: #999;
            font-style: italic;
        }

        .refresh-btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        .refresh-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(102, 126, 234, 0.6);
        }

        .icon {
            font-size: 1.5rem;
        }

        .timestamp {
            color: #999;
            font-size: 0.9rem;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>
                <span class="icon">🗄️</span>
                Database Visual Dashboard
            </h1>
            <p>Real-time database monitoring and management</p>
            <p class="timestamp">Last updated: ${new Date().toLocaleString()}</p>
        </div>

        <div class="stats">
            <div class="stat-card">
                <h3>Total Tables</h3>
                <div class="number">${data.length}</div>
            </div>
            <div class="stat-card">
                <h3>Total Records</h3>
                <div class="number">${data.reduce((sum, t) => sum + t.data.length, 0)}</div>
            </div>
            <div class="stat-card">
                <h3>Database</h3>
                <div class="number" style="font-size: 1.5rem;">nodejs</div>
            </div>
        </div>

        ${data.map(tableData => `
            <div class="table-section">
                <div class="table-header">
                    <h2>
                        <span class="icon">📊</span>
                        ${tableData.table}
                    </h2>
                    <span class="badge">${tableData.data.length} rows</span>
                </div>
                ${tableData.data.length > 0 ? `
                    <div style="overflow-x: auto;">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    ${Object.keys(tableData.data[0]).map(col => `<th>${col}</th>`).join('')}
                                </tr>
                            </thead>
                            <tbody>
                                ${tableData.data.map(row => `
                                    <tr>
                                        ${Object.values(row).map(val => `
                                            <td>${val !== null ? val : '<em style="color: #ccc;">NULL</em>'}</td>
                                        `).join('')}
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                ` : `
                    <div class="empty-state">
                        <span class="icon">📭</span>
                        <p>No data in this table</p>
                    </div>
                `}
            </div>
        `).join('')}

        <div style="text-align: center; margin-top: 30px;">
            <button class="refresh-btn" onclick="location.reload()">
                🔄 Refresh Data
            </button>
        </div>
    </div>

    <script>
        // Auto refresh every 30 seconds
        setTimeout(() => {
            location.reload();
        }, 30000);
    </script>
</body>
</html>
    `;
}

module.exports = router;


