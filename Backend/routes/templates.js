const express = require('express');
const router = express.Router();
const {
    getAllTemplates,
    getTemplate,
    createTemplate,
    updateTemplate,
    deleteTemplate,
    getTemplateStats
} = require('../controllers/templateController');
const { protect, adminOnly } = require('../middleware/auth');

router.route('/')
    .get(getAllTemplates)
    .post(protect, adminOnly, createTemplate);

router.get('/stats', protect, adminOnly, getTemplateStats);

router.route('/:id')
    .get(getTemplate)
    .put(protect, adminOnly, updateTemplate)
    .delete(protect, adminOnly, deleteTemplate);

module.exports = router;
