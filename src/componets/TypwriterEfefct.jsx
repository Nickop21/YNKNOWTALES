// src/Typewriter.js
import React, { useState, useEffect } from 'react';

const Typewriter = ({ words, speed }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleType = () => {
      const currentWord = words[currentWordIndex];
      if (isDeleting) {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
        }
      } else {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex === currentWord.length) {
          setIsDeleting(true);
        }
      }
    };

    const typingTimeout = setTimeout(handleType, speed);
    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, words, currentWordIndex, speed]);

  return (
    <div className="sm:min-h-[115px] lg:min-h-[85px] xl:min-h-[50px] ">
      {text}
    </div>
  );
};

export default Typewriter;
