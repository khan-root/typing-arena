import React from 'react'
import ParaSelection from './ParaSelection'
import Para from './Para'
import useEngine from '../../hooks/useEngine';
import { useParams } from 'react-router-dom';

const Main = () => {
  const params = useParams()
  const { words, paraid, typed, timeLeft, errors, state, restart, totalTyped, calculateWPM,COUNTDOWN_SECONDS,countdown,handleTime } =
    useEngine(params?.id ? params.id : null);

    // console.log('params', params)

  return (
    <div className='flex flex-col gap-4 p-10 bg-container rounded-2xl h-full'>
      {state !== "finish" &&
      <>
        <ParaSelection 
          countdown={countdown}
          handleTime={handleTime}
          
        />
      <div>
        <span className='text-[20px] text-paraColor'>{timeLeft}</span>
      </div>
      </>
      }

        <Para 
          words = {words}
          paraid = {paraid}
          typed = {typed}
          timeLeft = {timeLeft}
          errors = {errors}
          state = {state}
          restart = {restart}
          totalTyped = {totalTyped}
          calculateWPM = {calculateWPM}
          COUNTDOWN_SECONDS = {COUNTDOWN_SECONDS}
        />
    </div>
  )
}

export default Main