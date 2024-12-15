import React, { useEffect, useRef } from "react";
import "./about.css"; // ربط ملف CSS
import her from '../../imgs/kyo.png';  // الصورة الأولى
import hert from '../../imgs/kk.png';  // الصورة الثانية
import herk from '../../imgs/kyoo.png';  // الصورة الثالثة

const About = () => {
  // المرجع للصور
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

  useEffect(() => {
    // إعداد Intersection Observer
    const images = [image1Ref.current, image2Ref.current, image3Ref.current];

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // إضافة الفئة 'visible' عند دخول الصورة في العرض
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // توقف عن مراقبة العنصر بعد ظهوره
        }
      });
    }, { threshold: 0.5 }); // تفعيل المراقبة عندما يظهر 50% من العنصر في العرض

    // مراقبة جميع الصور
    images.forEach(image => observer.observe(image));
    
    // تنظيف عند تفريغ المكون
    return () => {
      images.forEach(image => observer.unobserve(image));
    };
  }, []); // نفذ مرة واحدة بعد تحميل المكون

  return (
    
    <div className="about-container">
           <div id="About">
</div>
      <img 
        src={her}  /* رابط الصورة الأولى */
        alt="Hero"
        className="top-left-image"
        ref={image1Ref}
      />
 
      <img 
        src={hert}  /* رابط الصورة الثانية */
        alt="Hero"
        className="top-left-image2"
        ref={image2Ref}
      />
      <div className="about-content">
        <h1>About Me</h1>
        <p>
   Graduated in 2024 with a Computer Engineering degree! <br />
  Front-end developer since 2022, passionate about crafting user-friendly websites with amazing UI/UX! ✨<br />
  I love turning complex ideas into simple, beautiful, and effective web experiences! <br />
  Reach out if you have a cool project in mind! 
</p>

      </div>
      <img 
        src={herk}  /* رابط الصورة الثالثة */
        alt="Hero"
        className="bottom-right-image"
        ref={image3Ref}
      />
    </div>
  );
};

export default About;
