import { useCallback, useEffect, useState } from "react";
import useCountdown from "./useCountdown";
import useWords from "./useWords";
import useTypings from "./useTypings";
import { calculateAccuracyPercentage, countErrors, debug } from "../Utils/helper";


const useEngine = (contestID) => {
  const [state, setState] = useState("start");
  const { words, updateWords , paraid, countdown, handleTime} = useWords(contestID);
  const { timeLeft, startCountdown, resetCountdown} = useCountdown(countdown);
  const { cursor, typed, clearTyped, totalTyped, resetTotalTyped,calculateWPM } = useTypings(state !== "finish");
  const [errors, setErrors] = useState(0);

  const isStarting = state === "start" && cursor > 0;
  const areWordsFinished = cursor === words.length;

  const restart = useCallback(() => {
    debug("restarting...");
    resetCountdown();
    // resetTotalTyped();
    setState("start");
    setErrors(0);
    updateWords();
    clearTyped();
  }, [clearTyped, updateWords, resetCountdown, resetTotalTyped]);

  const sumErrors = useCallback(() => {
    debug(`cursor: ${cursor} - words.length: ${words.length}`);
    const wordsReached = words.substring(0, Math.min(cursor, words.length));
    setErrors((prevErrors) => prevErrors + countErrors(typed, wordsReached));
  }, [typed, words, cursor]);

  // as soon the user starts typing the first letter, we start
  useEffect(() => {
    if (isStarting) {
      setState("run");
      startCountdown();
    }
  }, [isStarting, startCountdown]);

  // when the time is up, we've finished
  useEffect(() => {
    if (!timeLeft && state === "run") {
      debug("time is up...");
      setState("finish");
      sumErrors();

     
    }
  }, [timeLeft, state, sumErrors]);

  // when the current words are all filled up, we generate and show another set of words
  useEffect(() => {
    if (areWordsFinished) {
      debug("words are finished...");
      sumErrors();
      updateWords();
      clearTyped();
      
    }
  }, [clearTyped, areWordsFinished, updateWords, sumErrors]);



 

  

  return { state, words, paraid, typed, errors, restart, timeLeft, totalTyped,calculateWPM ,countdown,handleTime};
};

export default useEngine;
