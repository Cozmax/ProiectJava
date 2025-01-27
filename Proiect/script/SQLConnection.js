const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const sqlCONFIG = {
    user: 'Test',
    password: 'test',
    server: 'DESKTOP-87H239E',
    database: 'Proiect_Java',
    options: {
        trustedConnection: true,
        trustServerCertificate: true,
    },
    authentication: {
        type: 'default',
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

app.get('/modeleMasini', async (req, res) => {
    try {
        const pool = await sql.connect(sqlCONFIG);
        const result = await pool.request().query('SELECT * FROM MasiniDisponibile');
        res.json(result.recordset); // Rezultat JSON!!!
    } catch (err) {
        console.error('Eroare query:', err);
        res.status(500).json({ error: 'Eroare' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});