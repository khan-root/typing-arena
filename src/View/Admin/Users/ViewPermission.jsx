import { Radio, Typography } from '@material-tailwind/react'
import React from 'react'

const ViewPermission = (props) => {
    const {viewPermission} = props
    console.log('viewPermission', viewPermission)
  return (
    <div className='space-y-3 py-2 px-4'>
        <div className='text-[20px] text-paraColor'>
            <span>{viewPermission?.userInfo?.user_name}</span>
        </div>
        {viewPermission?.permissions?.activePermissions.length > 0 ? 
            viewPermission?.permissions?.activePermissions?.map((ele, i) => (
                <div className="space-y-2" key={i}>
                    <label className="text-paraColor text-[14px]">{ele?.moudule_name}</label>
                    <div>
                        {viewPermission?.permissions?.permissions?.map((permission) => (
                            <Radio
                                className="text-mainColor checked:text-mainColor checked:before:bg-mainColor bg-white"
                                key={permission._id}
                                label={
                                    <Typography className="text-paraColor">
                                        {permission?.name}
                                    </Typography>
                                }
                                defaultChecked={ele.permission_id === permission._id}
                            />
                        ))}
                    </div>
                </div>
            ))
        :
        <div className='text-[20px] text-paraColor text-center'>
            <span>No Permission Found</span>
        </div>
    }
    </div>
  )
}

export default ViewPermission