import { axiosInstance } from "../base"


const ContestApi = {
    getAllContest:function(){
        return axiosInstance.request({
            method: 'GET',
            url:'/api/contest',
        })
    },
    addContest: function(data){
        return axiosInstance.request({
            method:"POST",
            url:'/api/contest',
            data:data
        })
    },
    deleteContest: function(id){
        return axiosInstance.request({
            method:"DELETE",
            url:`/api/contest/contest_id/${id}`
        })
    },
    joinContest: function(data){
        return axiosInstance.request({
            method:"POST",
            url:`/api/contest/contest_participant`,
            data:data
        })
    },

    getJoinUser: function(id){
        return axiosInstance.request({
            method:"GET",
            url:`/api/contest/contest_participant/contest_id/${id}`,

        })
    },
    getLeaderBoardData: function(id){
        return axiosInstance.request({
            method:"GET",
            url:`/api/contest/leaderboard/contest_id/${id}`
        })
    },
    getNotification: function(id){
        return axiosInstance.request({
            method:"GET",
            url:`/api/contest/notification_data/user_id/${id}`
        })
    },

}


export default ContestApi


