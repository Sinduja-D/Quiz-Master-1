// src/components/HomePage.jsx
import React from 'react';
import '../App.css';
import { levels } from '../levels.js';

const HomePage = ({ language, setActivePage, onLevelSelect }) => {
  const t = (eng, tam) => (language === "English" ? eng : tam);
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">
          {language === "English" ? "Quiz Master" : "வினா மாஸ்டர்"}
        </h1>
        <p className="home-subtitle">
          {language === "English" 
            ? "Test your knowledge with our interactive quizzes!" 
            : "எங்களின் ஊடாடும் வினாத்திட்டங்களுடன் உங்கள் அறிவை சோதிக்கவும்!"}
        </p>
        
        <div className="level-container">
          <h2 className="section-title">
            {language === "English" ? "Select Difficulty Level" : "சிரம நிலையைத் தேர்ந்தெடுக்கவும்"}
          </h2>
          <div className="level-cards">
            {levels.map((level) => (
              <div
                key={level.id}
                className="level-card"
                style={{ backgroundColor: level.color }}
                onClick={() => {
                  onLevelSelect(level);
                  setActivePage("quizsetup");
                }}
              >
                <div className="level-icon">{level.icon}</div>
                <h3 className="level-name">{level.name[language]}</h3>
                <p className="level-grade">{level.grade[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="extra-features">
        <h2>
          {language === "English" ? "More Features" : "கூடுதல் அம்சங்கள்"}
        </h2>
        <div className="feature-buttons">
          <button
            onClick={() => setActivePage("achievements")}
            className="feature-btn"
          >
            🏅 {language === "English" ? "Achievements" : "சாதனைகள்"}
          </button>
          <button
            onClick={() => setActivePage("leaderboard")}
            className="feature-btn"
          >
            📊 {language === "English" ? "Leaderboard" : "முன்னணி பட்டியல்"}
          </button>
          <button
            onClick={() => setActivePage("funFacts")}
            className="feature-btn"
          >
            💡 {language === "English" ? "Fun Facts" : "சுவாரஸ்யங்கள்"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;