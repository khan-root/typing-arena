import { Button, Radio, Typography } from '@material-tailwind/react'
import React from 'react'

const EditPermissions = (props) => {
    const {editPermission,handleChangeEditPermission,handleUpdatePermission} = props
    console.log('editPermission', editPermission.permissions)
  return (
     <form className='space-y-3 py-2 px-4' onSubmit={handleUpdatePermission}>
        <div className='text-[20px] text-paraColor'>
            <span>{editPermission?.userInfo?.user_name}</span>
        </div>
        {editPermission?.permissions?.activePermissions?.map((ele, i) => (
            <div className="space-y-2" key={i}>
                <label className="text-paraColor text-[14px]">{ele?.moudule_name}</label>
                <div>
                    {editPermission?.permissions?.permissions?.map((permission) => (
                        <Radio
                            className="text-mainColor checked:text-mainColor checked:before:bg-mainColor bg-white"
                            key={permission._id}
                            label={
                                <Typography className="text-paraColor">
                                    {permission?.name}
                                </Typography>
                            }
                            checked={ele.permission_id === permission._id}
                            onChange={()=>handleChangeEditPermission(ele?.moudule_id, permission._id)}
                        />
                    ))}
                </div>
            </div>
        ))}
        <div className='flex'>
            <Button type='submit' className='w-full px-2 py-2 text-inputBg text-[16px] flex items-center justify-center capitalize bg-mainColor font-semibold rounded-lg'
                loading = {editPermission.loading}
            >Update Permission</Button>
        </div>
    </form>
  )
}

export default EditPermissions