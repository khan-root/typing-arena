import React, { useEffect } from 'react'
import ParaList from './ParaList'
import useParagraphServices from '../../../ViewModel/ParagraphViewModel/ParagraphService'
import CustomDialog from '../../../Components/CustomDialog'
import AddEditParagraph from './AddEditParagraph'
import { useParams } from 'react-router-dom'


const ParagraphList = () => {

  const params = useParams()
  
  const {addParaValue, toggleAddPara, handleAddPara,
    customLevelData,handleChangeAddParagraph,handleSelectAddParagraph,
    handleAddParagrah,paragraphList,
    gettingParagraphList,gettingContestParagraphList,


  } = useParagraphServices(params.id ? params.id : null)





  useEffect(()=>{

    if(params.id){ 
      gettingContestParagraphList(params.id)
    }else{

      gettingParagraphList('1')
    }
  },[])


  return (
    <>
    <div className='space-y-4 h-full'>
      <div className='flex justify-between'>
        <span className='text-text text-[25px] font-semibold'>Paragraph List</span>
        <button className='bg-mainColor px-5 py-2 text-[17px] rounded-lg' onClick={handleAddPara}>Add</button>     
  
      </div>
      <div className='h-[2px] bg-white'></div>
      <div className='space-y-4 overflow-y-scroll h-[calc(100vh-150px)]'>
        {paragraphList?.map((ele, i)=>(
          <ParaList  
            key={i}
            paraList = {ele}
          />
        ))}
      </div>
    </div>

    {addParaValue.show && 
      <CustomDialog 
        openDialog={addParaValue.show}
        handleOpen = {toggleAddPara}
        title = 'Add Paragraph'
        compo = {<AddEditParagraph 
          customLevelData = {customLevelData}
          handleChangeAddParagraph = {handleChangeAddParagraph}
          handleSelectAddParagraph = {handleSelectAddParagraph}
          addParaValue = {addParaValue}
          handleAddParagrah = {handleAddParagrah}
        
        />}
        size = "sm"

      
      />
    
    }
    </>
  )
}

export default ParagraphList