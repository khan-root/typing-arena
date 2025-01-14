import { useCallback, useState, useEffect } from "react";
import paragraphApi from "../Model/Paragraph/Paragraph";

const fetchWords = async (id) => {
  try {
    const response  = await paragraphApi.getParagraphContest(id)
    const responseData = response.data

    if(response.status === 200 && responseData.STATUS === "SUCCESSFUL"){
        const dbData = responseData.DB_DATA 
        return dbData
    }
  } catch (error) {
    
  }
};
const fetchWordsFree = async (data) => {

  try {
    const response  = await paragraphApi.getParagraph(data)
    const responseData = response.data
    console.log('fetch words', response)

    if(response.status === 200 && responseData.STATUS === "SUCCESSFUL"){
        const dbData = responseData.DB_DATA 
        return dbData
    }
  } catch (error) {
    
  }
};

const useWords = (id) => {
  const [words, setWords] = useState("");
  const [paraid, setParaid] = useState('');
  

  const [countdown, setcountDown] = useState(15)

    const handleTime = async(data)=>{
      setcountDown(data.name)
      const result = await fetchWordsFree(data.id)
      setWords(result[0]?.content);
      setParaid(result[0]?._id)
  }

  
  const updateWords = useCallback(async () => {
    let newWords; 
     if(id === null){
      newWords = await fetchWordsFree(1)
    }else{
      newWords = await fetchWords(id);
    }
    if(newWords){

      setWords(newWords[0]?.content);
      setParaid(newWords[0]?._id)
    }
  }, [id]);

  useEffect(() => {
    updateWords();
  }, [updateWords]);

  return { words, updateWords, paraid, countdown,handleTime};
};

export default useWords;