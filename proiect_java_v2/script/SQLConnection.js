const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const sqlCONFIG = {
    server: 'localhost',
    database: 'DESKTOP-87H239E',
    options: {
        trustedConnection: true,
        trustServerCertificate: true,
    },
};

// Test de conectare
sql.connect(sqlCONFIG)
    .then(() => {
        console.log('Connected to SQL Server');
    })
    .catch(err => {
        console.error('Database connection failed:', err.message);
    });

app.get('/api/data', async (req, res) => {
    try {
        const pool = await sql.connect(sqlCONFIG);
        const result = await pool.request().query('SELECT * FROM MasiniDisponibile');
        res.json(result.recordset); // Rezultat JSON!!!
    } catch (err) {
        console.error('Eroare query:', err);
        res.status(500).json({ error: 'Eroare' });
    }
});