import { useCallback, useEffect, useRef, useState } from "react";
import { isKeyboardCodeAllowed } from "../Utils/helper";

const useTypings = (enabled) => {
  const [cursor, setCursor] = useState(0);
  const [typed, setTyped] = useState("");
  const [startTime, setStartTime] = useState(null);
  const totalTyped = useRef(0);

  const keydownHandler = useCallback(
    ({ key, code }) => {
      if (!enabled || !isKeyboardCodeAllowed(code)) {
        return;
      }

      // Start the timer when typing begins
      if (startTime === null) {
        setStartTime(new Date());
      }

      switch (key) {
        case "Backspace":
          setTyped((prev) => prev.slice(0, -1));
          setCursor((cursor) => cursor - 1);
          totalTyped.current -= 1;
          break;
        default:
          setTyped((prev) => prev.concat(key));
          setCursor((cursor) => cursor + 1);
          totalTyped.current += 1;
      }
    },
    [enabled, startTime]
  );

  const clearTyped = useCallback(() => {
    setTyped("");
    setCursor(0);
    setStartTime(null);
    totalTyped.current = 0;
  }, []);

  const calculateWPM = useCallback(() => {
    if (!startTime) return 0;

    const currentTime = new Date();
    const timeElapsed = (currentTime - startTime) / 1000 / 60; // Time in minutes
    const wordsTyped = totalTyped.current / 5; // Average word length is 5 characters
    return wordsTyped / timeElapsed; // WPM
  }, [startTime]);

  useEffect(() => {
    window.addEventListener("keydown", keydownHandler);
    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  }, [keydownHandler]);

  return {
    typed,
    cursor,
    clearTyped,
    totalTyped: totalTyped.current,
    calculateWPM,
  };
};

export default useTypings;
