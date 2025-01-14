import { axiosInstance } from "../base"

const UsersApi = {
    getUsers:function(){
        return axiosInstance.request({
            method:"GET",
            url:'/api/users/arena'
        })
    },
    
    addUser:function(data){
        return axiosInstance.request({
            method:"POST",
            url:'/api/users/arena',
            data: data
        })
    },
    getPrivileges:function(){
        return axiosInstance.request({
            method:"GET",
            url:'/api/permission/user_module_permission',
            
        })
    },
    getUserPrivilege:function(id){
        return axiosInstance.request({
            method:"GET",
            url:`/api/permission/user_permission/user_id/${id}`,
            
        })
    },
    deleteUser:function(id){
        return axiosInstance.request({
            method:"DELETE",
            url:`/api/users/arena/user_id/${id}`,
            
        })
    },
    addPermission:function(data){
        return axiosInstance.request({
            method:"POST",
            url:`/api/permission/assign_permission`,
            data:data
        })
    },
    
    
    
    
}



export default UsersApi