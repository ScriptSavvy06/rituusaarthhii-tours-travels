const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: String, required: true },
    location: { type: String, required: true },
    images: [{ type: String }],
    category: { type: String, enum: ['Spiritual', 'Holiday', 'Customized', 'Group'], default: 'Spiritual' },
    isFeatured: { type: Boolean, default: false },
    itinerary: [{
        day: Number,
        title: String,
        details: String
    }],
    inclusions: [String],
    exclusions: [String],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Package', packageSchema);
