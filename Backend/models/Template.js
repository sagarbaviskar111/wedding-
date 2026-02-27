const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a template name'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Please provide a description'],
        trim: true
    },
    category: {
        type: String,
        required: [true, 'Please provide a category'],
        enum: ['wedding', 'birthday', 'party', 'corporate', 'other']
    },
    subcategory: {
        type: String,
        trim: true
    },
    thumbnailUrl: {
        type: String,
        required: [true, 'Please provide a thumbnail URL']
    },
    previewUrl: {
        type: String
    },
    isPremium: {
        type: Boolean,
        default: false
    },
    price: {
        type: Number,
        default: 0
    },
    isActive: {
        type: Boolean,
        default: true
    },
    features: [{
        type: String
    }],
    colorScheme: {
        primary: String,
        secondary: String,
        accent: String
    },
    usageCount: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    reviews: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        rating: Number,
        comment: String,
        createdAt: {
            type: Date,
            default: Date.now
        }
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Template', templateSchema);
