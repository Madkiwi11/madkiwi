import React from "react";
import "./ach.css"; // ربط ملف CSS
import heri from '../../imgs/ki.png';  // الصورة الأولى
const Ach = () => {
  return (
    <div className="ach-container">
  
  <div id="Experiences">
  </div>
      <div className="ach-text-container">
       <p> 
       <h1>Achievements</h1>
       HurryApp2 Hackathon 2024 by Aswar Company: 
        Developed a website to check the weather, monitor IoT pollution levels, and measure air pollution.
       </p>
       <p>NASA Space Apps Hackathon 2024 by NASA:   🏆 First Place (National, Iraq) Project: "Beyond Sunlight: An Aquatic Chemosynthetic World" Qualified for the global final judging round.</p>
       <p>Women in Technology Competition by Zain Company:  
        🏆 First Place Project: Educational platform empowering women in tech.</p>
        <p>Game Development Competition by Baghdad Game Lab:  
        Participated in designing and developing an innovative game prototype focused on immersive storytelling and gameplay mechanics. 🎮👾</p>
      </div>
      <div className="ach-image-container">
        <img 
          src={heri} 
          alt="Achievement" 
          className="ach-image"
        />
      </div>
    </div>
  );
};

export default Ach;
