import express from 'express';
import postgresClient from '../config/db.js'

const router = express.Router();
// Get users
router.get('/', async (req, res) => {
    try {
        const text = "SELECT * FROM images ORDER BY id ASC"

        const { rows } = await postgresClient.query(text)

        return res.status(200).json(rows)
    } catch (error) {
        console.log('Error occured', error.message)
        return res.status(400).json({ message: error.message })   
    }
})

// Update images
router.put('/update/:imageId', async (req, res) => {
    try {
        const { imageId } = req.params;
        const text = "UPDATE images SET base64 = $1 WHERE id = $2 RETURNING *"; 
        const values = [req.body.base64, imageId];
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