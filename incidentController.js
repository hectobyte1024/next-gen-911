const IncidentModel = require('../models/incidentModel');

const IncidentController = {
    async reportIncident(req, res) {
        try {
            const { type, description, latitude, longitude } = req.body;
            const incident = await IncidentModel.createIncident({
                type,
                description,
                latitude,
                longitude,
            }); 
            res.status(201).json(incident);
        } catch (error) {
            console.error('Error reporting incident:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
};

module.exports = IncidentController; 