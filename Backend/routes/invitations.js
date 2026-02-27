const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
    createInvitation,
    getInvitations,
    getInvitationById,
    updateInvitation,
    deleteInvitation
} = require('../controllers/invitationController');

router.use(protect);

router.route('/')
    .post(createInvitation)
    .get(getInvitations);

router.route('/:id')
    .get(getInvitationById)
    .put(updateInvitation)
    .delete(deleteInvitation);

module.exports = router;
