import React, { useState, useEffect } from 'react';
import './SkillsPage.css'; // استيراد ملف CSS الخاص بالصفحة

const SkillsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  // تشغيل الصوت بناءً على اسم المهارة
  const playSound = (audioElement) => {
    audioElement.play(); // تشغيل الصوت
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // عندما يظهر الـ Section في النافذة
        }
      },
      { threshold: 0.5 } // نسبة الظهور المطلوبة لبدء الحركة
    );

    const section = document.querySelector('.skills');
    observer.observe(section);

    return () => {
      observer.disconnect(); // التنظيف عند الخروج
    };
  }, []);

  return (
    <div className="skills-page">
      {/* قسم المهارات */}
      <section className={`skills ${isVisible ? 'show' : ''}`}>
        <h2 className="skills-title">Skills</h2>
        <div className="skills-grid">
          <div
            className="skill-box"
            onClick={(e) => playSound(e.target.querySelector('audio'))}
          >
            HTML
            <audio>
              <source src="/sounds/note1.mp3" type="audio/mp3" />
            </audio>
          </div>
          <div
            className="skill-box"
            onClick={(e) => playSound(e.target.querySelector('audio'))}
          >
            CSS
            <audio>
              <source src="/sounds/note2.mp3" type="audio/mp3" />
            </audio>
          </div>
          <div
            className="skill-box"
            onClick={(e) => playSound(e.target.querySelector('audio'))}
          >
            JavaScript
            <audio>
              <source src="/sounds/note3.mp3" type="audio/mp3" />
            </audio>
          </div>
          <div
            className="skill-box"
            onClick={(e) => playSound(e.target.querySelector('audio'))}
          >
            UI/UX
            <audio>
              <source src="/sounds/note4.mp3" type="audio/mp3" />
            </audio>
          </div>
          <div
            className="skill-box"
            onClick={(e) => playSound(e.target.querySelector('audio'))}
          >
            Network
            <audio>
              <source src="/sounds/note5.mp3" type="audio/mp3" />
            </audio>
          </div>
          <div
            className="skill-box"
            onClick={(e) => playSound(e.target.querySelector('audio'))}
          >
            Microsoft Office
            <audio>
              <source src="/sounds/note6.mp3" type="audio/mp3" />
            </audio>
          </div>
        </div>
        <br />
        <div className="skills-grid">
          <div
            className="skill-box"
            onClick={(e) => playSound(e.target.querySelector('audio'))}
          >
            IOT
            <audio>
              <source src="/sounds/note7.mp3" type="audio/mp3" />
            </audio>
          </div>
          <div
            className="skill-box"
            onClick={(e) => playSound(e.target.querySelector('audio'))}
          >
            SQL
            <audio>
              <source src="/sounds/note8.mp3" type="audio/mp3" />
            </audio>
          </div>
          <div
            className="skill-box"
            onClick={(e) => playSound(e.target.querySelector('audio'))}
          >
            Figma
            <audio>
              <source src="/sounds/note9.mp3" type="audio/mp3" />
            </audio>
          </div>
          <div
            className="skill-box"
            onClick={(e) => playSound(e.target.querySelector('audio'))}
          >
            WordPress
            <audio>
              <source src="/sounds/note10.mp3" type="audio/mp3" />
            </audio>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
