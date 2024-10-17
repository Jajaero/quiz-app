// models/Quiz.js
const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    quiz_title: String,
    quiz_desc: String,
    quiz_instructions: String,
    questions: [
        {
            question: String,
            choices: [String],
            correct_answer: String,
            points: Number
        }
    ],
    classId: String // Assuming you have a classId to link quizzes to classes
});

module.exports = mongoose.model('Quiz', quizSchema);