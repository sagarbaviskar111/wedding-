const Invitation = require('../models/Invitation');
const User = require('../models/User');

// @desc    Create new invitation
// @route   POST /api/invitations
// @access  Private
exports.createInvitation = async (req, res) => {
    try {
        const { template, eventDetails, customization } = req.body;

        // Create the invitation
        const invitation = await Invitation.create({
            user: req.user._id,
            template,
            eventDetails,
            customization
        });

        // Add invitation reference to the user
        await User.findByIdAndUpdate(
            req.user._id,
            { $push: { createdInvitations: invitation._id } },
            { new: true }
        );

        res.status(201).json({
            success: true,
            data: invitation
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
};

// @desc    Get all invitations for logged in user
// @route   GET /api/invitations
// @access  Private
exports.getInvitations = async (req, res) => {
    try {
        const invitations = await Invitation.find({ user: req.user._id })
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: invitations.length,
            data: invitations
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
};

// @desc    Get single invitation
// @route   GET /api/invitations/:id
// @access  Private
exports.getInvitationById = async (req, res) => {
    try {
        const invitation = await Invitation.findById(req.params.id);

        if (!invitation) {
            return res.status(404).json({
                success: false,
                message: 'Invitation not found'
            });
        }

        // Check if user owns the invitation
        if (invitation.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({
                success: false,
                message: 'Not authorized to access this invitation'
            });
        }

        res.status(200).json({
            success: true,
            data: invitation
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: 'Invalid invitation ID'
        });
    }
};

// @desc    Update invitation
// @route   PUT /api/invitations/:id
// @access  Private
exports.updateInvitation = async (req, res) => {
    try {
        let invitation = await Invitation.findById(req.params.id);

        if (!invitation) {
            return res.status(404).json({
                success: false,
                message: 'Invitation not found'
            });
        }

        // Check if user owns the invitation
        if (invitation.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({
                success: false,
                message: 'Not authorized to update this invitation'
            });
        }

        invitation = await Invitation.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            success: true,
            data: invitation
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
};

// @desc    Delete invitation
// @route   DELETE /api/invitations/:id
// @access  Private
exports.deleteInvitation = async (req, res) => {
    try {
        const invitation = await Invitation.findById(req.params.id);

        if (!invitation) {
            return res.status(404).json({
                success: false,
                message: 'Invitation not found'
            });
        }

        // Check if user owns the invitation
        if (invitation.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({
                success: false,
                message: 'Not authorized to delete this invitation'
            });
        }

        await invitation.deleteOne();

        // Remove from user's array
        await User.findByIdAndUpdate(
            req.user._id,
            { $pull: { createdInvitations: req.params.id } }
        );

        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
};
