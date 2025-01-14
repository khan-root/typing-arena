import { useState } from "react"
import useStore from "../../Store/Store"
import UsersApi from "../../Model/Users/Users"
import { showToast } from "../../Components/Toaster"

const usePrivilegesServices = ()=>{

    const getAlPrivileges = useStore((state)=> state.getAlPrivileges)
    const privileges = useStore((state)=> state.privileges)
    const userData = useStore((state)=> state.userData)


    const [viewPermission , setViewPermission] = useState({
        show:false, 
        permissions:{},
        userInfo:{}
    })





    const toggleViewPermission = ()=>{
        setViewPermission((prevState)=>({
            ...prevState,
            show:false
        }))
    }


    const [privilegesValue, setPrivilegesValue] = useState({
        show: false,
        userData:userData,
        userId: null,
        loading:false,
        permissions:{}
    })

    const handlePrivileges = ()=>{
        getAlPrivileges()
        setPrivilegesValue((prevState)=>({
            ...prevState,
            show: true
        }))
    }

    const togglePrivileges = ()=>{
        setPrivilegesValue((prevState)=>({
            ...prevState,
            show: false,
            userId:null,
            permissions:[]
        }))
    }

    const handlePermission = (id, permissionID)=>{
        setPrivilegesValue((prevState)=>({
            ...prevState,
                permissions: {
                ...prevState.permissions,
                [id]: permissionID,
            },
        }))
    }


    const handleSelectPermission = (selected, field)=>{
        setPrivilegesValue((prevState)=>({
            ...prevState,
            [field]:selected 
        }))
    }


    const handleViewPermission = async(data)=>{
        const id = data._id
        setViewPermission((prevState)=>({
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
                setViewPermission((prevState)=>({
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

    const handleAddPermission = async(e)=>{
        e.preventDefault()
        if(privilegesValue?.userId === null){
            showToast('Select User', 'error')
            return
        }
        setPrivilegesValue((prevState)=>({
            ...prevState,
            loading:true
        }))
        const apiData = Object.entries(privilegesValue?.permissions).map(([module_id, permission_id]) => ({
            user_id: privilegesValue?.userId?.value,
            module_id,
            permission_id
        }));

        try{
            const response = await UsersApi.addPermission(apiData)
            const responseData = response.data 
            if(response.status === 200 && responseData.STATUS === "SUCCESSFUL"){
                showToast('Permission Assign Successfulyy', 'success')
                togglePrivileges()
            }
        }catch(err){
            console.log('err', err)
            const error = err.response.data.ERROR_DESCRIPTION
            showToast(error, 'error')

        }finally{
            setPrivilegesValue((prevState)=>({
                ...prevState,
                loading:false
            }))
        }
    }


    


    return { privilegesValue, handlePrivileges, togglePrivileges,privileges,handlePermission , 
        handleViewPermission,toggleViewPermission,
        viewPermission,
        handleSelectPermission,
        handleAddPermission

    }

}


export default usePrivilegesServices