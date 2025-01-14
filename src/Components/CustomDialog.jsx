import { Dialog, DialogBody, DialogHeader } from '@material-tailwind/react'
import React from 'react'
import { IoClose } from "react-icons/io5";

const CustomDialog = (props) => {
  const { openDialog , handleOpen, title, compo,  size, outsidePress=true} = props
  return (
    <Dialog open={openDialog} handler={handleOpen} size={size} dismiss={{ outsidePress: outsidePress }}
        className='bg-container'
    >
        <DialogHeader className='flex justify-between border-b border-b-white'>
          <div className='text-mainColor'>
          {title}
          </div>
          <div className=''>
            <span className='w-4 h-4 flex items-center justify-center rounded-full bg-white'>
                <IoClose onClick={handleOpen} className='cursor-pointer'/>
            </span>
          </div>
          </DialogHeader>
        <DialogBody className={`customScroll overflow-y-auto ${compo ? 'max-h-[calc(100vh-200px)]' : 'min-h-[auto]'}`}>
          {compo}
        </DialogBody>
    </Dialog>
  )
}

export default CustomDialog