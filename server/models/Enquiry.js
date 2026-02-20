const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    package: { type: String },
    travelDate: { type: Date },
    message: { type: String },
    status: { type: String, enum: ['New', 'Contacted', 'Closed'], default: 'New' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Enquiry', enquirySchema);
