import { authInstance } from "../base"

const AuthApi = {

    register:function(data){
        return authInstance.request({
            method: 'POST',
            url:`/api/users`,
            data:data
        })
    },
    
    login:function(data){
        return authInstance.request({
            method: 'POST',
            url:`/api/users/login`,
            data:data
        })
    },
    
}

export default AuthApi