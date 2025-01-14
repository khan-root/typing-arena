import { axiosInstance } from "../base"

const paragraphApi = {
    addParagraph : function(data){
        return axiosInstance.request({
            method:"POST", 
            url:'/api/contest/paragraph',
            data:data
        })
    },


    editPara : function(id, data){
        return axiosInstance.request({
            method:"PATCH", 
            url:`/api/contest/paragraph/paragraph_id/${id}`,
            data:data
        })
    },

    getParagraph : function(time){
        return axiosInstance.request({
            method:"GET", 
            url:`/api/contest/paragraph/sample/duration/${time}`
        })
    },
    getAllParagraph : function(){
        return axiosInstance.request({
            method:"GET", 
            url:`/api/contest/paragraph/sample/list`
        })
    },
    getParagraphContest : function(id){
        return axiosInstance.request({
            method:"GET", 
            url:`/api/contest/paragraph/contest_id/${id}`,
        })
    },
    deleteParagraph : function(id){
        return axiosInstance.request({
            method:"DELETE", 
            url:`/api/contest/paragraph/paragraph_id/${id}`
        })
    },
}


export default paragraphApi