import { Button } from "@material-tailwind/react";
import { formatPercentage } from "../../Utils/helper";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Results = ({ state, errors, accuracyPercentage, paraid , calculateWPM, COUNTDOWN_SECONDS, restart, words}) => {
  
  useEffect(() => {
    if (state === "finish") {
      hittingApi();
    }
  }, [state]);

  const params = useParams()


  //  "": "66b746ad353631538a864c3a",
  // "": "66b746ad353631538a864c3a",
  // "": "66b746ad353631538a864c3a",
  // "": 250,
  // "": 98.5,
  // "": 300,
  // "": 1500,
  // "": 0.95,
  // "time": 120,
  // "demography": "Sample Demographic Data"



  const hittingApi = async() => {

    const user_id = JSON.parse(localStorage.getItem('_id'))
    const apiData = {
      user_id: user_id,
      contest_id: params.id,
      paragraph_id: paraid,
      wpm: calculateWPM().toFixed(2),
      accuracy: accuracyPercentage,
      raw: errors,
      characters: words.length,
      // time: 





    }
    console.log("Hitting Api", errors, calculateWPM().toFixed(2), accuracyPercentage, COUNTDOWN_SECONDS, paraid, words.length, apiData);
  };

  // Render nothing if state is not "finish"
  if (state !== "finish") {
    return null; // Return null instead of undefined to avoid errors
  }

  
  return (
    <div className="flex items-center justify-center h-full">
      <div className="space-y-5">
        <div className="text-center uppercase">
          <span className="text-[25px] text-mainColor">Your Typing test results</span>
        </div>
        <div className="text-center">
          <span className="text-[20px] text-paraColor">Whoa! You completed the typing speed test</span>
        </div>
        <div className="text-center">
          <span className="text-[25px] text-mainColor">
            Your Results
          </span>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <div className="bg-fullbg flex items-center justify-center w-[200px] h-[100px] rounded-lg">
            <div className="flex flex-col  items-center">

              <span className="text-paraColor text-[18px]">Speed</span>
              <span className="text-mainColor text-[25px]"> {calculateWPM().toFixed(2)} WPM</span>
            </div>
          </div>
          <div className="bg-fullbg flex items-center justify-center w-[200px] h-[100px] rounded-lg">
            <div className="flex flex-col  items-center">

              <span className="text-paraColor text-[18px]">Accuracy</span>
              <span className="text-mainColor text-[25px]"> {formatPercentage(accuracyPercentage)}</span>
            </div>
          </div>
          <div className="bg-fullbg flex items-center justify-center w-[200px] h-[100px] rounded-lg">
            <div className="flex flex-col  items-center">

              <span className="text-paraColor text-[18px]">Errors</span>
              <span className="text-mainColor text-[25px]"> {errors} Errors</span>
            </div>
          </div>
          <div className="bg-fullbg flex items-center justify-center w-[200px] h-[100px] rounded-lg">
            <div className="flex flex-col  items-center">

              <span className="text-paraColor text-[18px]">Time</span>
              <span className="text-mainColor text-[25px]"> 
                
                {COUNTDOWN_SECONDS <= 30 
                ? `${COUNTDOWN_SECONDS} Seconds` 
                : `${COUNTDOWN_SECONDS / 60} Minutes`}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-2">
            <Button className='w-full px-4 py-2 text-paraColor text-[16px] flex items-center justify-center capitalize bg-fullbg border border-mainColor font-semibold rounded-lg'
              onClick={restart}
              >Close</Button>
            <Button className='w-full px-4 py-2 text-inputBg text-[16px] flex items-center justify-center capitalize bg-mainColor font-semibold rounded-lg'
              onClick={restart}
              
            >Restart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
