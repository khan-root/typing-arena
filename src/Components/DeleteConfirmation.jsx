import { Button, Dialog, DialogBody, DialogHeader } from '@material-tailwind/react'
import React from 'react'
import { IoClose } from 'react-icons/io5'

const DeleteConfirmation = (props) => {
    const { openDialog , handleOpen, title,  size="xs", description, confirmation, loading, type="button" } = props

  return (
    <Dialog open={openDialog} handler={handleOpen} size={size} 
        className='bg-container'
    >
        <DialogHeader className='flex justify-between border-b border-b-white'>
          <div className='text-mainColor text-center'>
          {title}
          </div>
          <div className=''>
            <span className='w-4 h-4 flex items-center justify-center rounded-full bg-white'>
                <IoClose onClick={handleOpen} className='cursor-pointer'/>
            </span>
          </div>
          </DialogHeader>
        <DialogBody className='space-y-5'>
            <div className='text-center'>
                <span className='text-paraColor text-[18px]'>
                    {description}
                </span>
            </div>
            <div className='flex justify-center'>
                <div className='flex items-center justify-between gap-4'>
                    <Button className='px-2 py-2 text-inputBg text-[13px] flex items-center justify-center capitalize bg-mainColor font-semibold rounded-lg w-[130px]'
                        loading = {loading}
                        onClick={confirmation}
                        type={type}
                        
                    >Yes</Button>
                    <Button className='px-2 py-2 text-inputBg text-[13px] flex items-center justify-center capitalize bg-mainColor font-semibold rounded-lg w-[130px]'
                        onClick={handleOpen}
                    >No</Button>
                </div>
            </div>
        </DialogBody>
    </Dialog>
  )
}

export default DeleteConfirmation