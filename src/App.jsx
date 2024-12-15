import React from 'react'
import Navbar from './components/Navbar/Navbar'
import 'typeface-inter';
import Hero from './components/Hero/Hero'
import SkillsPage from './components/skills/SkillsPage'
import About from './components/aboutme/about';
import Ach from './components/ach/ach';
import Project from './components/projectt/project';
import Exp from './components/exp/exp';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <SkillsPage/>
      < About/>
      <Project/>
      <Ach/>
      
      <Exp/>
<Footer/>
    </div>
    
  )
}

export default App
