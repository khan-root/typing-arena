import React from 'react'
import CustomSelect from '../../../Components/CustomSelect'
import { Button } from '@material-tailwind/react'

const AddEditParagraph = (props) => {
    const { customLevelData,handleChangeAddParagraph,handleSelectAddParagraph, addParaValue,handleAddParagrah,handleEditParagraph } = props
  return (
    <form className='space-y-3 py-2 px-4' onSubmit={addParaValue?.update ? handleEditParagraph : handleAddParagrah}>
         <div className='flex-1 flex flex-col space-y-1'>
            <label className='text-paraColor text-[14px]'>Paragraph</label>
            <textarea 
                rows="3" 
                className='text-paraColor bg-inputBg text-[14px] rounded-lg   py-[10px] px-[17px] outline-none resize-none'
                placeholder='Paragraph Here'
                onChange={handleChangeAddParagraph}
                name='content'
                value={addParaValue?.content}
            >
            </textarea>
        </div>
        <div className='space-y-2'>
            <label className='text-paraColor text-[14px]'>Duration</label>  
            <input 
                className='w-full text-paraColor text-[14px] rounded-lg py-[10px] px-[17px] bg-inputBg outline-none'
                type='number' 
                placeholder='Duration'
                name='duration'
                onChange={handleChangeAddParagraph}
                value={addParaValue.duration}
            />
        </div>
        <div className='space-y-2'>
            <label className='text-paraColor text-[14px]'>Level</label>
            <CustomSelect 
                placeHolderTitle = 'Level'
                options={customLevelData?.map((level) => ({ value: level.value, label:level.title}))} 

                value = {customLevelData?.find(option => option.value ===  addParaValue.level) 
                    ? { value: customLevelData?.find(option => option.value ==   addParaValue.level).value, 
                        label: customLevelData?.find(option => option.value ==  addParaValue.level).title

                    }
                    :
                    addParaValue.level
                }
                onChangeHandler={(selectedOption) => handleSelectAddParagraph(selectedOption, 'level')}
                customStyles={false}
                
            />
        </div>
        <div className='flex items-center justify-center py-2'>
            <Button className='px-2 py-2 text-inputBg text-[13px] flex items-center justify-center capitalize bg-mainColor font-semibold rounded-lg w-[130px]'
                loading={addParaValue.loading}
                type="submit"
            >{addParaValue?.update ? 'Update' : 'Submit'}</Button>
        </div>
       
    </form>
  )
}

export default AddEditParagraph