// models/QuizSettings.js
const mongoose = require('mongoose');

const quizSettingsSchema = new mongoose.Schema({
    time_limit_hours: Number,
    time_limit_minutes: Number,
    time_limit_seconds: Number,
    deadline_date: Date,
    deadline_time: String,
    passing_score: Number,
    attempts_allowed: Number,
    view_incorrect: Boolean,
    view_correct: Boolean,
    view_points: Boolean,
    classId: String // Add classId to link settings to classes
});

module.exports = mongoose.model('QuizSettings', quizSettingsSchema);