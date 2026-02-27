const Template = require('../models/Template');

// @desc    Get all templates
// @route   GET /api/templates
// @access  Public
exports.getAllTemplates = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12;
        const skip = (page - 1) * limit;

        const query = {};
        if (req.query.category) query.category = req.query.category;
        if (req.query.isPremium) query.isPremium = req.query.isPremium === 'true';
        if (req.query.isActive !== undefined) query.isActive = req.query.isActive === 'true';

        const templates = await Template.find(query)
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 });

        const total = await Template.countDocuments(query);

        res.status(200).json({
            success: true,
            count: templates.length,
            total,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
            templates
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Get single template
// @route   GET /api/templates/:id
// @access  Public
exports.getTemplate = async (req, res) => {
    try {
        const template = await Template.findById(req.params.id);

        if (!template) {
            return res.status(404).json({
                success: false,
                message: 'Template not found'
            });
        }

        res.status(200).json({
            success: true,
            template
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Create template
// @route   POST /api/templates
// @access  Private/Admin
exports.createTemplate = async (req, res) => {
    try {
        const template = await Template.create(req.body);

        res.status(201).json({
            success: true,
            template
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Update template
// @route   PUT /api/templates/:id
// @access  Private/Admin
exports.updateTemplate = async (req, res) => {
    try {
        const template = await Template.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!template) {
            return res.status(404).json({
                success: false,
                message: 'Template not found'
            });
        }

        res.status(200).json({
            success: true,
            template
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Delete template
// @route   DELETE /api/templates/:id
// @access  Private/Admin
exports.deleteTemplate = async (req, res) => {
    try {
        const template = await Template.findById(req.params.id);

        if (!template) {
            return res.status(404).json({
                success: false,
                message: 'Template not found'
            });
        }

        await template.deleteOne();

        res.status(200).json({
            success: true,
            message: 'Template deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Get template statistics
// @route   GET /api/templates/stats
// @access  Private/Admin
exports.getTemplateStats = async (req, res) => {
    try {
        const totalTemplates = await Template.countDocuments();
        const activeTemplates = await Template.countDocuments({ isActive: true });
        const premiumTemplates = await Template.countDocuments({ isPremium: true });

        const categoryStats = await Template.aggregate([
            {
                $group: {
                    _id: '$category',
                    count: { $sum: 1 }
                }
            }
        ]);

        const popularTemplates = await Template.find()
            .sort({ usageCount: -1 })
            .limit(5)
            .select('name usageCount rating');

        res.status(200).json({
            success: true,
            stats: {
                totalTemplates,
                activeTemplates,
                inactiveTemplates: totalTemplates - activeTemplates,
                premiumTemplates,
                freeTemplates: totalTemplates - premiumTemplates,
                categoryStats,
                popularTemplates
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
