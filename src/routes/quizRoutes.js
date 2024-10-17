// routes/quizRoutes.js
const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');
const QuizSettings = require('../models/QuizSettings');

// Create a new quiz
router.post('/', async (req, res) => {
    try {
        const quiz = new Quiz(req.body);
        await quiz.save();
        res.status(201).send(quiz);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all quizzes
router.get('/', async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.status(200).send(quizzes);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Fetch quiz questions and settings for a linked class
router.get('/class/:classId', async (req, res) => {
    try {
        const classId = req.params.classId;
        const quizQuestions = await Quiz.find({ classId });
        const quizSettings = await QuizSettings.find({ classId });

        res.status(200).json({
            quizQuestions,
            quizSettings
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;