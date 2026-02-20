const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');
const jwt = require('jsonwebtoken');

// Middleware to verify Admin JWT
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ message: 'No token provided' });

    jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Unauthorized' });
        req.adminId = decoded.id;
        next();
    });
};

// Public: Submit an enquiry
router.post('/', async (req, res) => {
    const enquiry = new Enquiry(req.body);
    try {
        const newEnquiry = await enquiry.save();
        res.status(201).json(newEnquiry);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Admin: Get all enquiries
router.get('/', verifyToken, async (req, res) => {
    try {
        const enquiries = await Enquiry.find().sort({ createdAt: -1 });
        res.json(enquiries);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Admin: Update enquiry status
router.put('/:id', verifyToken, async (req, res) => {
    try {
        const updatedEnquiry = await Enquiry.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
        res.json(updatedEnquiry);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
