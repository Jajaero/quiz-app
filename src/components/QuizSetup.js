import React, { useState } from 'react';
import QuizQuestions from './QuizQuestions';
import QuizSettings from './QuizSettings';

const QuizSetup = () => {
    const [settingsSaved, setSettingsSaved] = useState(false);

    const handleSettingsSaved = () => {
        setSettingsSaved(true);
    };

    return (
        <div>
            {!settingsSaved ? (
                <QuizSettings onSettingsSaved={handleSettingsSaved} />
            ) : (
                <QuizQuestions settingsSaved={settingsSaved} />
            )}
        </div>
    );
};

export default QuizSetup;