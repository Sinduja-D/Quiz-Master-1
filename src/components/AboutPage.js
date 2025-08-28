import React from 'react';

const AboutPage = ({ language }) => {
  return (
    <div className="page-content">
      <h2>{language === 'English' ? 'About Us' : 'எங்களைப் பற்றி'}</h2>
      <p>
        {language === 'English'
          ? '🔬 Welcome to Quiz Master – Science Park Edition! Our app turns science into a fun adventure through interactive quizzes, brain teasers, and cool facts. Available in Tamil & English, it helps students, kids, and families explore science with curiosity and confidence. 🚀'
          : '🔬 வினா மாஸ்டர் – அறிவியல் பூங்கா பதிப்புக்கு வரவேற்கிறோம்! எங்கள் பயன்பாடு அறிவியலை சுவாரஸ்யமான சாகசமாக மாற்றுகிறது – கேள்விகள், புதிர்கள், மற்றும் சுவாரஸ்யமான தகவல்களுடன். தமிழ் & ஆங்கிலத்தில் கிடைக்கிறது, இது மாணவர்கள், குழந்தைகள் மற்றும் குடும்பங்கள் அறிவியலை ஆர்வத்துடனும் நம்பிக்கையுடனும் ஆராய உதவுகிறது. 🚀'}
      </p>
      <p>
        {language === 'English'
          ? '🌟 Our goal: To make every visit to the Science Park unforgettable by combining fun with learning. Whether it’s space, biology, physics, or chemistry – Quiz Master makes science exciting for everyone!'
          : '🌟 எங்கள் நோக்கம்: அறிவியல் பூங்காவிற்கு வரும் ஒவ்வொரு பயணத்தையும் மறக்க முடியாததாக மாற்றுவதே. விண்வெளி, உயிரியல், இயற்பியல், இரசாயனம் – எந்த துறையாயினும் வினா மாஸ்டர் அறிவியலை சுவாரஸ்யமாக்குகிறது!'}
      </p>
    </div>
  );
};

export default AboutPage;
