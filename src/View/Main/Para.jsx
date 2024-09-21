import React, { useState, useRef, useEffect } from 'react';
import useStore from '../../Store/Store';
import themes from '../../Theme/Theme';
import { BiWorld } from 'react-icons/bi';

const Para = () => {
    const [userInput, setUserInput] = useState('');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const paragraph = 'all this happen let say i have a div in which one word will be one div like this';
    const words = paragraph.split(' ');
    const inputRef = useRef(null);
    const theme = useStore((state) => state.theme);
    const currentTheme = themes[theme];

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === ' ') {
            e.preventDefault(); // Prevent space from being added to input
            if (userInput.trim() === words[currentWordIndex]) {
                setCurrentWordIndex((prevIndex) => Math.min(prevIndex + 1, words.length - 1));
                setUserInput('');
            }
        }
    };

    const getLetterStyle = (letter, wordIndex, letterIndex) => {
        const currentLetterGlobalIndex = words.slice(0, wordIndex).join(' ').length + letterIndex + wordIndex;

        if (currentLetterGlobalIndex < userInput.length) {
            if (userInput[currentLetterGlobalIndex] === letter) {
                return { color: currentTheme.correctTextColor };
            } else {
                return { color: currentTheme.inCorrectTextColor };
            }
        }
        return { color: currentTheme.unTypedTextColor };
    };

    const getIndicatorStyle = (wordIndex, letterIndex) => {
        const currentLetterGlobalIndex = words.slice(0, wordIndex).join(' ').length + letterIndex + wordIndex;

        if (currentLetterGlobalIndex === userInput.length) {
            return { color: currentTheme.indicatorColor };
        }

        return { display: 'none' };
    };

    return (
        <div className='flex flex-col gap-10'>
            <div className='flex items-center justify-center gap-2'>
                <span className={`text-[17px] cursor-pointer ${currentTheme.text} hover:${currentTheme.mainText}`}><BiWorld /></span>
                <span className={`text-[17px] cursor-pointer ${currentTheme.text} hover:${currentTheme.mainText}`}>English</span>
            </div>
            <div onClick={() => inputRef.current.focus()} style={{ cursor: 'text', padding: '10px',position: 'relative' }}>
                <input
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    ref={inputRef}
                    style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
                />
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', fontSize: '40px' }}>
                    {words.map((word, wordIndex) => (
                        <div key={wordIndex} style={{ display: 'flex', marginRight: '10px' }}>
                            {word.split('').map((letter, letterIndex) => (
                                <div key={letterIndex} style={{ display: 'inline-flex', alignItems: 'center' }}>
                                    <letter style={getLetterStyle(letter, wordIndex, letterIndex)}>
                                        {letter}
                                    </letter>
                                    <span style={getIndicatorStyle(wordIndex, letterIndex)}>|</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        
        </div>
    );
};

export default Para;
