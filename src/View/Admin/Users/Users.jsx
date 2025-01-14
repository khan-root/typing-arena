import { Button, MenuItem, Typography } from '@material-tailwind/react';
import React, { useEffect } from 'react'
import useDropdownService from '../../../Services/__dropdownServices';
import { userActionData } from '../../../Utils/__actionData';
import { FaChevronDown } from 'react-icons/fa';
import {motion} from 'framer-motion'
import useUsersServices from '../../../ViewModel/UserViewMode/UserServices';
import { DMY } from '../../../Services/__time_date';
import CustomDialog from '../../../Components/CustomDialog';
import AddEditUser from './AddEditUser';
import usePrivilegesServices from '../../../ViewModel/UserViewMode/PrivilegesServices';
import AddPermission from './AddPermission';
import DeleteConfirmation from '../../../Components/DeleteConfirmation';
import ViewPermission from './ViewPermission';
import EditPermissions from './EditPermissions';
const TABLE_HEAD = ["Name", "Email", "Gender", "Registeration Date", "Action"];

const Users = () => {
  const {getDropdownPosition , triggerRefs,openMenuValue, toggleMenuValue} = useDropdownService()
  const {userData, getAllUsers,
    handleAddUser,addUserFormValue,toggleAddUser,
    handleChangeUser,handleSelecUser,handleSubmitAddUser,
    handleUserActionList,
    deleteUserValue,
    handleToggleDeleteUser,
    viewPermission, toggleViewPermission,confirmUserDelete,
    editPermission,toggleEditPermission,
    handleChangeEditPermission,handleUpdatePermission

  } = useUsersServices()


  const { privilegesValue, handlePrivileges, togglePrivileges,privileges, handlePermission,handleSelectPermission,
    handleAddPermission

  }  = usePrivilegesServices()

  useEffect(()=>{
    getAllUsers()
  },[])
  return (
    <>
    <div className='space-y-4'>
      <div className='flex justify-between'>
        <span className='text-text text-[25px] font-semibold'>Manage User</span>
        <div className='space-x-3'>
            <button className='bg-mainColor px-5 py-2 text-[17px] rounded-lg'
              onClick={handlePrivileges}
            >Assign Permission</button>     
            <button className='bg-mainColor px-5 py-2 text-[17px] rounded-lg'
              onClick={handleAddUser}
            >Add User</button>     
        </div>
      </div>
        <div className='h-[2px] bg-white'></div>
      <div>
        <table className="w-full min-w-max table-auto text-left rounded-tl-lg rounded-tr-lg">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="bg-mainColor p-4"
                >
                  <Typography
                    variant="small"
                    className="font-semibold text-container"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
           <tbody>
            {
              userData?.map((ele, i)=>(
                <tr key={ele?.i}>
                 
                  <td className="bg-container p-4 border border-paraColor">
                    <Typography
                      variant="small"
                      className="font-semibold text-text text-[16px]"
                    >
                      {ele?.user_name}
                    </Typography>
                  </td>
                  <td className="bg-container p-4 border border-paraColor">
                    <Typography
                      variant="small"
                      className="font-semibold text-text text-[16px]"
                    >
                      {ele?.user_email}
                    </Typography>
                  </td>
                  <td className="bg-container p-4 border border-paraColor">
                    <Typography
                      variant="small"
                      className="font-semibold text-paraColor text-[16px]"
                    >
                      {ele?.gender}
                    </Typography>
                  </td>
                  <td className="bg-container p-4 border border-paraColor">
                    <Typography
                      variant="small"
                      className="font-semibold text-paraColor text-[16px]"
                    >
                      {DMY(ele?.created_at)}
                    </Typography>
                  </td>
                  <td className="bg-container p-4 border border-paraColor">
                    <div 
                      ref={(el) => (triggerRefs.current[i] = el)}
                      onMouseEnter={() => toggleMenuValue(i, true)} onMouseLeave={() => toggleMenuValue(i, false)} 
                      className='relative'
                    >
                        <Button 
        
                            className='flex items-center gap-2 capitalize font-normal text-[13px] border border-mainColor text-mainColor px-[10px] py-[5px]'
                            variant="outlined"
                        >
                            Action
                            <FaChevronDown
                            strokeWidth={2.5}
                            className={`transition-transform transform ${openMenuValue[i] ? "rotate-180" : ""}`}
                            />
                        </Button>
                        {openMenuValue[i] && (

                            <div
                            className={`border border-mainColor absolute z-50 w-[200px] left-[-120px] shadow-md ${
                                getDropdownPosition(i) === 'top' ? 'bottom-full' : 'top-full'
                            }`}
                            >
                            <motion.div
                                initial={{ opacity: 0, y: getDropdownPosition(i) === 'top' ? -50 : 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: getDropdownPosition(i) === 'top' ? -50 : 50 }}
                                transition={{ duration: 0.2 }}
                            >
                                
                                <ul className="flex w-full flex-col gap-1 bg-fullbg">
                                {userActionData.map(menuItem => (
                                        <MenuItem className='flex items-center justify-between' key={menuItem.id}
                                          onClick={(e) => {
                                            e.stopPropagation(); // Prevent the event from bubbling up
                                            handleUserActionList(ele, menuItem);
                                            // return null
                                          }}
                                        >
                                        <Typography variant="small" className='text-white'>{menuItem.title}</Typography>
                                          <span style={{color:menuItem.color}}>{menuItem.icon}</span>
                                        </MenuItem>
                                    ))}
                                </ul>
                            </motion.div>
                            </div>
                        )}
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
          </table>
        </div>
    </div>
    {(addUserFormValue?.show || privilegesValue.show || viewPermission.show || editPermission.show) && 
      <CustomDialog 
        openDialog = {
          addUserFormValue.show ?
          addUserFormValue.show :
          privilegesValue.show ? 
          privilegesValue.show :
          viewPermission.show?
          viewPermission.show :
          editPermission.show?
          editPermission.show :
          null
        }
        handleOpen ={addUserFormValue?.show ? toggleAddUser : privilegesValue?.show ? togglePrivileges : viewPermission?.show ? toggleViewPermission : editPermission.show ? toggleEditPermission:  null}
        title={ addUserFormValue?.show ? 'Add New User' :
          privilegesValue?.show ? 'Assign Permission' : 
          viewPermission?.show ? 'View Permission' : 
          editPermission?.show ? 'Edit Permission' : 
          null

        }
        outsidePress={false}
        compo = {
          addUserFormValue.show ?
          <AddEditUser 
            addUserFormValue = {addUserFormValue}
            handleSelecUser= {handleSelecUser}
            handleChangeUser= {handleChangeUser}
            handleSubmitAddUser= {handleSubmitAddUser}
          />
          :
          privilegesValue.show ?
            <AddPermission 
              privileges = {privileges}
              handlePermission = {handlePermission}
              privilegesValue = { privilegesValue }
              handleSelectPermission= {handleSelectPermission}
              handleAddPermission= {handleAddPermission}
            />
          :
          viewPermission.show ?
            <ViewPermission 
              viewPermission={viewPermission}
            />
          :
          
          editPermission.show ?
            <EditPermissions 
            editPermission={editPermission}
            handleChangeEditPermission={handleChangeEditPermission}
            handleUpdatePermission={handleUpdatePermission}
            />
          :
          null
        }
      
      />
    }

    {deleteUserValue?.show && 
      <DeleteConfirmation 
        openDialog={deleteUserValue?.show}
        handleOpen={handleToggleDeleteUser}
        title="Delete Confirmation"
        description="Are you sure you want to delete user"
        confirmation={confirmUserDelete}
        loading= {deleteUserValue.loading}
      />
    }
    </>
  )
}

export default Users