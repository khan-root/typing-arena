import React from 'react'
import { CiEdit } from 'react-icons/ci'
import { FaTrash } from 'react-icons/fa6'
import useParagraphServices from '../../../ViewModel/ParagraphViewModel/ParagraphService'
import DeleteConfirmation from '../../../Components/DeleteConfirmation'
import AddEditParagraph from './AddEditParagraph'
import CustomDialog from '../../../Components/CustomDialog'

const actionData = [
    {id:1, icon:<CiEdit />},
    {id:2, icon:<FaTrash />},
]

const ParaList = (props) => {
    const { paraList } = props
    const { handleParaAction,deleteParaValue,toggleDeletePara, handleConfirmDeletePara,
        addParaValue, toggleAddPara,customLevelData,
        handleChangeAddParagraph,handleSelectAddParagraph,
        handleEditParagraph

    } = useParagraphServices()
  return (
    <>
        <div className='bg-container flex items-center justify-between p-3 rounded-lg'>
            <div className='grid grid-cols-12 w-full'>
                <div className='col-span-10 flex flex-col gap-2'>
                    <span className='text-paraColor text-[15px]'>{paraList.content}</span>
                </div>
                <div className='col-span-2 flex items-center gap-2 text-text justify-end'>
                    {actionData.map((ele)=>(
                        <span key={ele.id} className='cursor-pointer'
                            onClick={()=> handleParaAction(ele, paraList)}
                        >{ele.icon}</span>
                    ))}
                </div>
            </div>
        </div>
        {deleteParaValue?.show && 
            <DeleteConfirmation 
                openDialog={deleteParaValue?.show}
                handleOpen={toggleDeletePara}
                title="Delete Paragraph"
                description="Are you sure you want to delete paragraph"
                loading={deleteParaValue?.loading}
                confirmation={handleConfirmDeletePara}
            />
        
        }


        {addParaValue.show && 
            <CustomDialog 
                openDialog={addParaValue.show}
                handleOpen = {toggleAddPara}
                title = 'Edit Paragraph'
                compo = {<AddEditParagraph 
                customLevelData = {customLevelData}
                handleChangeAddParagraph = {handleChangeAddParagraph}
                handleSelectAddParagraph = {handleSelectAddParagraph}
                addParaValue = {addParaValue}
                handleEditParagraph = {handleEditParagraph}
                
                />}
                size = "sm"

      
        />
    
    }
    </>

  )
}

export default ParaList