import { axiosInstance } from "../base"

const profileApi = {
    getProfile : function(id){
        return axiosInstance.request({
            method:"GET",
            url:`/api/contest/user_contest/user_id/${id}`
        })
    }
}


export default profileApi