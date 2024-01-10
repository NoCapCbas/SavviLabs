import React, { useState, useEffect } from 'react';

const HackingText = ({ word, speed = 100, settleTime = 500 }) => {
  const [display, setDisplay] = useState('_'.repeat(word ? word.length : 0));
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
        setDisplay(prev => {
          return prev.split('').map((char, index) => {
            if (char !== word[index]) {
              return characters[Math.floor(Math.random() * characters.length)];
            }
            return char;
          }).join('');
        });
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
