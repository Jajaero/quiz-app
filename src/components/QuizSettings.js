// src/components/QuizSettings.js
import axios from 'axios';
import React, { useState } from 'react';
import '../css/settings_style.css';

const QuizSettings = () => {
const [settings, setSettings] = useState({
time_limit_hours: '',
time_limit_minutes: '',
time_limit_seconds: '',
deadline_date: '',
deadline_time: '',
passing_score: '',
attempts_allowed: '',
view_incorrect: false,
view_correct: false,
view_points: false,
});

const handleChange = (e) => {
const { name, value, type, checked } = e.target;
setSettings({
    ...settings,
    [name]: type === 'checkbox' ? checked : value,
});
};

const handleSubmit = (e) => {
e.preventDefault();
axios.post('/creating_quiz-settings.php', settings)
    .then(response => {
    console.log(response.data);
    })
    .catch(error => {
    console.error('There was an error!', error);
    });
};

return (
<div className="card">
    <h2 className="section-title">General</h2>
    <form onSubmit={handleSubmit}>
    <div className="input-group">
        <div className="title-wrapper">
        <img src="media/timer.svg" alt="Timer Icon" className="icon" />
        <label className="Category">Time Limit</label>
        </div>
        <div className="time-inputs">
        <input type="number" name="time_limit_hours" className="input-field" placeholder="Hours" value={settings.time_limit_hours} onChange={handleChange} />
        <input type="number" name="time_limit_minutes" className="input-field" placeholder="Minutes" value={settings.time_limit_minutes} onChange={handleChange} />
        <input type="number" name="time_limit_seconds" className="input-field" placeholder="Seconds" value={settings.time_limit_seconds} onChange={handleChange} />
        </div>
        <p className="help-text">Set a time limit for completing the quiz or exam</p>
    </div>
    <div className="input-group">
        <label className="Subcategory">Deadline</label>
        <input type="date" name="deadline_date" className="input-field" value={settings.deadline_date} onChange={handleChange} />
        <input type="time" name="deadline_time" className="input-field" value={settings.deadline_time} onChange={handleChange} />
    </div>
    <div className="input-group">
        <div className="title-wrapper">
        <img src="media/passing.svg" alt="Passing Icon" className="icon" />
        <label className="Category">Passing Score</label>
        </div>
        <input type="number" name="passing_score" className="input-field" placeholder="score" value={settings.passing_score} onChange={handleChange} />
        <p className="help-text">Set the required score to pass the quiz or exam</p>
    </div>
    <div className="input-group">
        <div className="title-wrapper">
        <img src="media/retry.svg" alt="Retry Icon" className="icon" />
        <label className="Category">Attempts Allowed</label>
        </div>
        <input type="number" name="attempts_allowed" className="input-field" placeholder="attempts" value={settings.attempts_allowed} onChange={handleChange} />
        <p className="help-text">Set the number of attempts each student is allowed to attempt.</p>
    </div>

    <h2 className="section-title">Respondents’</h2>
    <div className="options">
        <div className="option">
        <span className="description">Allow respondents to view which questions they answered incorrectly.</span>
        <label className="switch">
            <input type="checkbox" name="view_incorrect" checked={settings.view_incorrect} onChange={handleChange} />
            <span className="slider"></span>
        </label>
        </div>

        <div className="option">
        <span className="description">Decide if respondents can view the correct answers once the grades are released.</span>
        <label className="switch">
            <input type="checkbox" name="view_correct" checked={settings.view_correct} onChange={handleChange} />
            <span className="slider"></span>
        </label>
        </div>

        <div className="option">
        <span className="description">Select whether respondents can view the total possible points and the points they received for each question.</span>
        <label className="switch">
            <input type="checkbox" name="view_points" checked={settings.view_points} onChange={handleChange} />
            <span className="slider"></span>
        </label>
        </div>
    </div>

    <button type="submit" className="btn-save">Save</button>
    </form>
</div>
);
};

export default QuizSettings;