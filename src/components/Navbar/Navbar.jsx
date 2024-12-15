import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react'; // استيراد الأيقونات من lucide-react
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('dark'); // تعيين الوضع الافتراضي إلى dark
  const [mounted, setMounted] = useState(false); // لضمان تحميل المكونات بعد التثبيت

  // دالة لتبديل حالة القائمة المنسدلة
  const toggleMenu = () => setIsOpen(!isOpen);

  // دالة لتبديل الوضع بين الفاتح والداكن
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // تأكد من أن المكون قد تم تحميله قبل تطبيق الوضع
  useEffect(() => {
    setMounted(true);
    document.body.classList.toggle('dark', theme === 'dark'); // تطبيق الوضع على الجسم
  }, [theme]);

  if (!mounted) return null; // لمنع العرض قبل تحميل المكون

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-container">
        {/* الشعار */}
        <div className="logo">
          KIWI
        </div>

        {/* أيقونة القائمة المنسدلة */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X /> : <Menu />} {/* استبدال النصوص بالأيقونات */}
        </div>

        {/* قائمة الروابط */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#Experiences">Experiences</a></li>
        </ul>

        {/* زر "Contact Me" يؤدي إلى بريد إلكتروني */}
        <a href="mailto:fatimahasannazim@gmail.com" className="contact-button">
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
