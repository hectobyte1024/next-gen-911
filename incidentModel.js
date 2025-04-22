// models/incidentModel.js
const pool = require('../db');

const IncidentModel = {
    async createIncident({ type, description, latitude, longitude }) {
        const query = `
            INSERT INTO incidents (type, description, latitude, longitude)
            VALUES ($1, $2, $3, $4)
            RETURNING id
        `;
        const values = [type, description, latitude, longitude];

        try {
            const result = await pool.query(query, values);
            return result.rows[0].id;
        } catch (error) {
            console.error('Error creating incident:', error);
            throw error;
        }
    }
};

module.exports = IncidentModel; 