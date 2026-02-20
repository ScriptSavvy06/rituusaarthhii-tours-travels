const express = require('express');
const router = express.Router();
const Package = require('../models/Package');
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

// Public: Get all packages
router.get('/', async (req, res) => {
    try {
        const packages = await Package.find();
        res.json(packages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Public: Get single package
router.get('/:id', async (req, res) => {
    try {
        const pkg = await Package.findById(req.params.id);
        if (!pkg) return res.status(404).json({ message: 'Package not found' });
        res.json(pkg);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Admin: Create package
router.post('/', verifyToken, async (req, res) => {
    const pkg = new Package(req.body);
    try {
        const newPkg = await pkg.save();
        res.status(201).json(newPkg);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Admin: Update package
router.put('/:id', verifyToken, async (req, res) => {
    try {
        const updatedPkg = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedPkg);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Admin: Delete package
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        await Package.findByIdAndDelete(req.params.id);
        res.json({ message: 'Package deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
