import React from 'react'
import './mySelf.css';
import Typewriter from "typewriter-effect";


function MySelf() {
  return (
    <div className='mySelf-container'>
      <div className='mySelf-text'>
        <span>WELCOME TO MY WORLD</span>
        <h1 className='mySelf-name'>Hi, I’m Achraf Al Rachini</h1>
        <h1>
            <Typewriter 
              options={{
                strings: ["FullStack Developer!", 
                          "MernStack Developer!",
                          "Content Writer!"],
                autoStart: true,
                loop: true,
              }}
              
            />
          </h1>
        <h3>based in UAE.</h3>
      </div>
      
    </div>
  )
}

export default MySelf