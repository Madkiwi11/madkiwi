import React, { useEffect } from "react";
import "./exp.css";
import her1 from '../../imgs/ex1.png';
import her2 from '../../imgs/ex2.png';
import her3 from '../../imgs/ex3.png';
import her4 from '../../imgs/ex4.png';

const experiences = [
  {
  
    description: "Website Manager | 2022-2023\n Managed website design, content integration, \n and updates, ensuring functionality and visual appeal.",
    image: her1,
    reverse: false,
  },
  {
  
    description: "IT Trainer for Kids | 2023\nTaught IT fundamentals and programming basics,\n fostering creativity through engaging lessons.",
    image: her2,
    reverse: true,
  },
  {
  
    description: "Robotics and MBlock Programming Trainer | 2024 (Part-time)\nInstructed kids in robotics and programming,\n guiding them in building and programming robots.",
    image: her3,
    reverse: false,
  },
  {
    
    description: "Data Processor | October 2024\nMaintained and updated databases, ensured data accuracy, \n and performed data cleaning.",
    image: her4,
    reverse: true,
  },
];

const Exp = () => {
  useEffect(() => {
    const images = document.querySelectorAll(".exp-image");

    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target); // Stop observing once the element is in view
          }
        });
      },
      { threshold: 0.5 } // Trigger the effect when 50% of the element is visible
    );

    // Observe all the images
    images.forEach(image => {
      observer.observe(image);
    });

    return () => {
      observer.disconnect(); // Clean up the observer on unmount
    };
  }, []);

  return (
    <div className="exp-container">
      {/* Page Title */}
      <h1 className="page-title">My Experiences</h1>

      {experiences.map((exp, index) => (
        <div className={`exp-section ${exp.reverse ? "reverse" : ""}`} key={index}>
          <div className="exp-image-container">
            <img src={exp.image} alt={exp.title} className="exp-image" />
          </div>
          <div className="exp-text">
            <h1>{exp.title}</h1>
            <p>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Exp;
