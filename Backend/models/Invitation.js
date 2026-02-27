const mongoose = require('mongoose');

const invitationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    template: {
        type: String,
        required: true
    },
    eventDetails: {
        eventType: {
            type: String,
            required: true
        },
        eventName: String,
        brideName: String,
        groomName: String,
        brideParents: String,
        groomParents: String,
        welcomeMessage: String,
        birthdayPersonName: String,
        turningAge: Number,
        hostName: String,
        theme: String,
        dressCode: String,
        functions: String,
        date: Date,
        time: String,
        venue: {
            name: String,
            address: String,
            city: String,
            state: String,
            pincode: String
        },
        description: String
    },
    customization: {
        images: [String],
        music: String,
        backgroundVideo: String,
        customText: String,
        colorScheme: {
            primary: String,
            secondary: String,
            accent: String
        }
    },
    qrCode: String,
    shareUrl: String,
    isPublished: {
        type: Boolean,
        default: false
    },
    views: {
        type: Number,
        default: 0
    },
    shares: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Invitation', invitationSchema);
