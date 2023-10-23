import React, { useState, useEffect } from 'react';
import WelcomeBackground from "../images/welcomeBackground.jpg"

const Welcome = () => {
    const words = ["Semih","Web Developer"];
    const [text, setText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
    useEffect(() => {
        const animateText = () => {
          const currentWord = words[currentWordIndex];
    
          if (currentIndex === currentWord.length) {
            if (currentWordIndex === words.length - 1) {
              setCurrentIndex(0);
              setCurrentWordIndex(0);
            } else {
              setCurrentIndex(0);
              setCurrentWordIndex(currentWordIndex + 1);
            }
          } else {
            setText(currentWord.slice(0, currentIndex + 1));
            setCurrentIndex(currentIndex + 1);
          }
        };
    
        const animationInterval = setInterval(animateText, 500);
    
        return () => clearInterval(animationInterval);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [currentIndex, currentWordIndex]);
 

  return (
    <>
        <div className='h-screen w-screen lg:w-full bg-cover bg-center' style={{backgroundImage: `url(${WelcomeBackground})`}}>
            <div className='absolute flex w-full h-full justify-center items-center mt-16'>
                <div className='w-full text-center'>
                <h1 className='title text-white text-7xl'>Hello!</h1>
                <h1 className='title text-white text-7xl'>I am <span className='changeText'>{text}</span><span className='cursor'>|</span></h1>
                </div>
            </div>    
        </div>
    </>
  )
}

export default Welcome