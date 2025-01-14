import { useState } from "react"
import useStore from "../../Store/Store"
import UsersApi from "../../Model/Users/Users"
import { showToast } from "../../Components/Toaster"
import usePrivilegesServices from "./PrivilegesServices"

const useUsersServices = ()=>{

    const {handleViewPermission,viewPermission, toggleViewPermission} = usePrivilegesServices()

    const userData = useStore((state)=> state.userData)
    const getAllUsers = useStore((state)=> state.getAllUsers)
    const addNewUser = useStore((state)=> state.addNewUser)
    const deleteUser = useStore((state)=> state.deleteUser)


    const [addUserFormValue, setAddUserFormValue] = useState({
        show:false,
        name:'',
        email:'',
        password:'',
        gender:null,
        userId:null,
        loading:false,
        updateShow:false
    })


    const [editPermission , setEditPermission] = useState({
        show:false, 
        permissions:{},
        userInfo:{},
        loading:false
    })

    const handleAddUser = ()=>{
        setAddUserFormValue((prevState)=>({
            ...prevState,
            show:true,
            updateShow:false
        }))
    }
    
    const toggleAddUser = ()=>{
        setAddUserFormValue((prevState)=>({
            ...prevState,
            show:false,
            name:'',
            email:'',
            password:'',
            gender:null,
            updateShow:false
        }))

    }

    const handleSelecUser = (select, field)=>{
        setAddUserFormValue((prevState)=>({
            ...prevState,
            [field]: select
        }))
    }


    const handleChangeUser = (e)=>{
        const {name, value} = e.target

        setAddUserFormValue((prevState)=>({
            ...prevState,
            [name]:value
        }))
    }



    const userFormValidation = ()=>{
        const {name, email, gender, password} = addUserFormValue
        if(name === ''){
            showToast('User Name is required', 'error')
            return
        }
        else if(email === ''){
            showToast('User Email is required', 'error')
            return
        }
        else if (gender === null){
            showToast('Select Gender', 'error')
            return
        }
        else if(password === ''){
            showToast('Password is required', 'error')
            return
        }
        

        return true
    }


    const handleSubmitAddUser = async(e)=>{
        
        e.preventDefault()
        const {name, email, gender, password} = addUserFormValue
        const formVlidaiton = userFormValidation()
        if(formVlidaiton){
            const apiData = {
                user_name:name,
                user_email:email,
                password:password,
                gender:gender.value,
               

            }
            try{
                setAddUserFormValue((prevState)=>({
                    ...prevState,
                    loading:true
                }))

                const response = await UsersApi.addUser(apiData)
                const responseData = response.data 
                if(response.status === 200 && responseData.STATUS === "SUCCESSFUL"){
                    const newData = responseData.DB_DATA
                    showToast("User Created Successfully", 'success')
                    addNewUser(newData)
                    toggleAddUser()
                }
                console.log('response', response)
            }catch(err){
                const error = err.response.data.ERROR_DESCRIPTION
                showToast(error, 'error')
            }finally{
                setAddUserFormValue((prevState)=>({
                    ...prevState,
                    loading:false
                }))
            }
        }
    }




    const handleUserActionList = (data, menuItem)=>{

        const caseId = menuItem.id 

        switch (caseId) {
            case 1:
                handleViewPermission(data)
                break
            case 2:
                handleUpdateUserGet(data)
                break;
        
            case 3:
                handleDelete(data)
                break
            default:
                
                break;
        }
    }


    


    const [deleteUserValue, setDeleteUserValue] = useState({
        show:false, 
        loading: false, 
        id:''
    })

    const handleDelete = (data)=>{
        setDeleteUserValue((prevState)=>({
            ...prevState,
            show: true, 
            id: data._id
        }))

    }


    const handleToggleDeleteUser = ()=>{
        setDeleteUserValue((prevState)=>({
            ...prevState,
            show:false,
            id:''
        }))
    }

    const confirmUserDelete = async()=>{
        const id = deleteUserValue.id
        setDeleteUserValue((prevState)=>({
            ...prevState,
            loading:true
        }))
        try {
            const response = await UsersApi.deleteUser(id)
            const responseData = response.data 
            if(response.status === 200 && responseData.STATUS === "SUCCESSFUL"){
                handleToggleDeleteUser()
                deleteUser(id)
                showToast('User Deleted Successfully', 'success')
            }
        } catch (error) {
            
        }finally{
            setDeleteUserValue((prevState)=>({
                ...prevState,
                loading:false
            }))
        }
    }





    const handleUpdateUserGet = async(data)=>{
        const id = data._id
        setEditPermission((prevState)=>({
            ...prevState,
            userInfo: data
        }))
        try{
            const response = await UsersApi.getUserPrivilege(id)
            console.log('response', response)
            const responseData = response.data
            if(response.status === 200 && responseData.STATUS === "SUCCESSFUL"){
                let result;
                const permissions = responseData.DB_DATA.permissions
                const module = responseData.DB_DATA.result

                result = module?.map(ele => ({
                    moudule_id: ele.module_id._id,
                    moudule_name: ele.module_id.name,
                    permission_id:ele?.permission_id._id,
                    permission_name: ele.permission_id.name
                }));
                setEditPermission((prevState)=>({
                    ...prevState,
                    permissions:{
                        permissions:permissions,
                        activePermissions: result
                    },
                    show:true
                }))
            }
        }catch(err){
            console.log(err)
        }
    }


    const toggleEditPermission = ()=>{
        setEditPermission((prevState)=>({
            ...prevState,
            show:false, 
            permissions:{},
            userInfo:{},
            loading:false
        }))
    }



    const handleChangeEditPermission = (module_id, permission_id)=>{
        setEditPermission((prevState) => ({
            ...prevState,
            permissions: {
                ...prevState.permissions, // Preserve other properties in permissions
                activePermissions: prevState.permissions?.activePermissions?.map((ele) =>
                    ele.moudule_id === module_id
                        ? { ...ele, permission_id } // Update the permission_id for the matched module
                        : ele // Keep the rest unchanged
                ),
            },
        }));
    }

    const handleUpdatePermission = async(e)=>{
        e.preventDefault()
       
        setEditPermission((prevState)=>({
            ...prevState,
            loading:true
        }))
        const apiData = editPermission?.permissions?.activePermissions?.map((permission) => ({
            user_id: editPermission.userInfo?._id, // Assuming userInfo contains the user ID
            module_id: permission.moudule_id, // Correct key based on your data
            permission_id: permission.permission_id, // Correct key based on your data
        }));
        console.log('apiData',apiData)

        try{
            const response = await UsersApi.addPermission(apiData)
            const responseData = response.data 
            if(response.status === 200 && responseData.STATUS === "SUCCESSFUL"){
                showToast('Permission Updated Successfulyy', 'success')
                toggleEditPermission()
            }
        }catch(err){
            console.log('err', err)
            const error = err.response.data.ERROR_DESCRIPTION
            showToast(error, 'error')

        }finally{
            setEditPermission((prevState)=>({
                ...prevState,
                loading:false
            }))
        }
    }




    return {userData ,getAllUsers, handleAddUser,addUserFormValue,
        toggleAddUser,handleSelecUser,handleChangeUser,handleSubmitAddUser,
        handleUserActionList,
        deleteUserValue,
        handleToggleDeleteUser,
        toggleViewPermission,
        viewPermission,
        confirmUserDelete,
        editPermission,
        toggleEditPermission,
        handleChangeEditPermission,
        handleUpdatePermission
        
     }

}


export default useUsersServices