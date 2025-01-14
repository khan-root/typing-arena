import React from 'react'
import UserTyping from './UserTyping';
import Results from './Results';
import { calculateAccuracyPercentage } from '../../Utils/helper';

const Para = (props) => {
    const { words,paraid, typed,  errors, state, restart, totalTyped,calculateWPM,COUNTDOWN_SECONDS } = props
  return (
    <>
    {state !== "finish" &&
   
      <div className='relative text-3xl leading-relaxed'>
        <GeneratedWords 
          words = {words}
          key = {words}
        />
        <UserTyping 
          className="absolute inset-0"
          userInput={typed}
          words={words}
        />
      </div>
       }
      <Results
        className="mt-10"
        state={state}
        paraid={paraid}
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
        calculateWPM={calculateWPM}
        COUNTDOWN_SECONDS={COUNTDOWN_SECONDS}
        restart={restart}
        words={words}
      />
    </>
  )
}

const GeneratedWords = ({words})=>{
  return(
    <di className='text-paraColor'>
      {words}
    </di>
  )
}

export default Para