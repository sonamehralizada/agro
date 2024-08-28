import express from 'express';
import postgresClient from '../config/db.js'

const router = express.Router();
// Get users
router.get('/texts', async (req, res) => {
    try {
        const text = "SELECT * FROM texts ORDER BY id ASC"

        const { rows } = await postgresClient.query(text)

        return res.status(200).json(rows)
    } catch (error) {
        console.log('Error occured', error.message)
        return res.status(400).json({ message: error.message })   
    }
})

// Update images
router.put('/texts/update/:textId', async (req, res) => {
    try {
        const { textId } = req.params;
        const text = "UPDATE texts SET text = $1 WHERE id = $2 RETURNING *"; 
        const values = [req.body.text, textId];
        const { rows } = await postgresClient.query(text, values);
        if (!rows.length)
            return res.status(404).json({ message: 'Image not found.' });
        return res.status(200).json({ updatedImage: rows[0] });
    } catch (error) {
        console.error('Error occurred:', error.message);
        return res.status(400).json({ message: error.message });
    }
});


export default router