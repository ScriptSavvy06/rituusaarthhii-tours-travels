const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

// Admin Registration (Use this once to create your account, then disable it)
router.post('/register', async (req, res) => {
    try {
        const { username, password, email } = req.body;

        // Check if admin already exists
        const existingAdmin = await Admin.findOne({ $or: [{ username }, { email }] });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin already exists with this username or email' });
        }

        const newAdmin = new Admin({ username, password, email });
        await newAdmin.save();

        res.status(201).json({ message: 'Admin registered successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error during registration' });
    }
});

// Admin Login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        // Find by username or email for better user experience
        const admin = await Admin.findOne({ 
            $or: [{ username: username }, { email: username }] 
        });

        if (!admin) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const isMatch = await admin.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Sign JWT
        const token = jwt.sign(
            { id: admin._id }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1d' }
        );

        res.json({ 
            token, 
            admin: { id: admin._id, username: admin.username, email: admin.email } 
        });
    } catch (err) {
        res.status(500).json({ message: 'Server error during login' });
    }
});

module.exports = router;