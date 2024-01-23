import React, { useState, useEffect } from 'react';

const HackingText = ({ word = '', speed = 100, settleTime = 500 }) => {
  const [display, setDisplay] = useState('_'.repeat(word.length));
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

  useEffect(() => {
    let isMounted = true;

    const settleChars = () => {
      let i = 0;
      const interval = setInterval(() => {
        if (i >= word.length || !isMounted) {
          clearInterval(interval);
          return;
        }
        setDisplay((prev) => prev.substring(0, i) + word[i] + prev.substring(i + 1));
        i++;
      }, settleTime);
    };

    if (word) {
      const randomInterval = setInterval(() => {
        if (!isMounted) {
          clearInterval(randomInterval);
          return;
        }
        setDisplay((prev) => prev.split('').map((char, index) => {
          return char !== word[index] ? characters[Math.floor(Math.random() * characters.length)] : char;
        }).join(''));
      }, speed);

      setTimeout(() => {
        if (!isMounted) {
          return;
        }
        clearInterval(randomInterval);
        settleChars();
      }, word.length * settleTime);

      return () => {
        clearInterval(randomInterval);
        isMounted = false;
      };
    }
  }, [word, characters, speed, settleTime]);

  return <span>{display}</span>;
};

export default HackingText;
