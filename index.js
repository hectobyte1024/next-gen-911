//index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const incidentRoutes = require('./routes/incidentRoutes');
app.use('/api/incidents', incidentRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});