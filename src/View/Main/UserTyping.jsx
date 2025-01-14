import React from 'react'
import Caret from './Caret'

const UserTyping = ({userInput, className, words}) => {
    const typedCharacters = userInput.split("")
  return (
    <div className = {className}>
            {typedCharacters.map((char, index)=>(
                <Character key={`${char}_${index}`} 
                    actual={char}
                    expected={words[index]}
                />
            ))}
            <Caret />
    </div>
  )
}


const Character = ({ actual, expected }) => {
  const isCorrect = actual === expected;
  const isWhiteSpace = expected === " ";

  const className = `
    ${!isCorrect && !isWhiteSpace ? "text-red-500" : ""}
    ${isCorrect && !isWhiteSpace ? "text-yellow-400" : ""}
    ${!isCorrect && isWhiteSpace ? "bg-red-500/50" : ""}
  `;

  return <span className={className.trim()}>{expected}</span>;
};


export default UserTyping