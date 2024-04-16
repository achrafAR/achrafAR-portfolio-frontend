import React from 'react';
import HomePage from './HomePage.js';
import AboutMe from './AboutMe.js';
import Services from './Services.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import Footer from './Footer.js';

function singlePage() {
  return (
    
      <div className="singlePage">
        {/* Render all components */}
        <HomePage />
        <AboutMe />
        <Services />
        <Projects />
        <Contact />
        <Footer />

        
      </div>
  );
}

export default singlePage;