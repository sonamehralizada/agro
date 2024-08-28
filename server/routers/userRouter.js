import express from 'express';
import postgresClient from '../config/db.js'
import jwt from 'jsonwebtoken';


const router = express.Router();

// Create user
router.post('/', async (req, res) => {
    try {
        const text = "INSERT INTO users (email, password, fullname) VALUES ($1, crypt($2, gen_salt('bf')), $3) RETURNING *"

        const values = [req.body.email, req.body.password, req.body.fullname]

        const { rows } = await postgresClient.query(text, values)

        return res.status(201).json({ createdUser: rows[0] })
    } catch (error) {
        console.log('Error occured', error.message)
        return res.status(400).json({ message: error. message })
    }
})


// login
router.post('/login', async (req, res) => {
    try {
        const text = "SELECT * FROM users WHERE email = $1 AND password = crypt($2, password)";
        const values = [req.body.email, req.body.password];

        const { rows } = await postgresClient.query(text, values);
        if (!rows.length) {
            return res.status(401).json({ status: 401, message: 'User not found.' });
        }

        return res.status(200).json({
            status: 200,
            message: 'Authentication successful.',
            user: rows[0] 
        });
    } catch (error) {
        console.log('Error occurred', error.message);
        return res.status(401).json({
            status: 401,
            message: error.message
        });
    }
});






// Update user
router.put('/update/:userId', async (req, res) => {
    try {
        const { userId } = req.params

        const text = "UPDATE users SET email = $1, fullname = $2 WHERE id = $3 RETURNING *"

        const values = [req.body.email, req.body.fullname, userId]

        const { rows } = await postgresClient.query(text, values)
        if(!rows.length)
            return res.status(404).json({ message: 'User not found.' })

        return res.status(200).json({ updatedUser: rows[0] })
    } catch (error) {
        console.log('Error occured', error.message)
        return res.status(400).json({ message: error.message })   
    }
})

// Delete user
router.delete('/:userId', async (req, res) => {
    try {
        const { userId } = req.params

        const text = "DELETE FROM users WHERE id = $1 RETURNING *"

        const values = [userId]

        const { rows } = await postgresClient.query(text, values)
        if(!rows.length)
            return res.status(404).json({ message: 'User not found.' })

        return res.status(200).json({ deletedUser: rows[0] })
    } catch (error) {
        console.log('Error occured', error.message)
        return res.status(400).json({ message: error.message })   
    }
})

// Get users
router.get('/', async (req, res) => {
    try {
        const text = "SELECT * FROM users ORDER BY id ASC"

        const { rows } = await postgresClient.query(text)

        return res.status(200).json(rows)
    } catch (error) {
        console.log('Error occured', error.message)
        return res.status(400).json({ message: error.message })   
    }
})

//asan login
router.post('/asanLogin', (req, res) => {
    const { pin, password } = req.body;
    const secretKey = process.env.JWT_SECRET || 'your-secure-secret-key'; 

    const userData = {
        pin: 'pin123',
        password: '123456'
    };

    const user = {
        fullName: 'Sona Mehralizada',
        birthday: '10.01.1998',
        phone: '051-340-92-77',
        address: 'Lorem ipsum'
    };

    if (userData.pin === pin && userData.password === password) {
        const tokenPayload = {
            pin: user.pin,
            fullName: user.fullName
        };

        const tokenOptions = {
            expiresIn: '1m'  // 1 minute
        };

        const newSpecificToken = jwt.sign(tokenPayload, secretKey, tokenOptions);
        const decodedToken = jwt.decode(newSpecificToken);

        res.json({
            status: 200,
            message: "Login successful",
            token: newSpecificToken,
            issuedAt: new Date(decodedToken.iat * 1000),
            expiresAt: new Date(decodedToken.exp * 1000),
            user: user
        });
    } else {
        res.status(401).json({
            status: 401,
            message: "not authorized"
        });
    }
});


router.post('/logoutAsan', (req, res) => {
    res.cookie('authToken', '', { expires: new Date(0) });
    res.json({ message: 'Logged out successfully. Cookie cleared.' });
});

export default router