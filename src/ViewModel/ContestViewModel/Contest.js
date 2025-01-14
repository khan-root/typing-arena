import ContestApi from "../../Model/Contest/Contest"

const contestServices = (set, get)=>({

    allContest:[],
    contestPara:'',
    contestLeaderBoard:[],
    notificationData:[],



    getttingAllContest: async()=>{
        try {
            const response = await ContestApi.getAllContest()
            const responseData = response.data 
            if(response.status === 200 && responseData.STATUS === "SUCCESSFUL"){
                const dbData = responseData.DB_DATA 
                set({allContest: dbData})
            } 
        } catch (error) {
            console.log(error)
        }
    },
    gettingLeaderBoardData: async(id)=>{
        try {
            const response = await ContestApi.getLeaderBoardData(id)
            const responseData = response.data 
            if(response.status === 200 && responseData.STATUS === "SUCCESSFUL"){
                const dbData = responseData.DB_DATA 
                set({contestLeaderBoard: dbData})
            }
        } catch (error) {
            console.log(error)
        }
    },

    addNewContest : (data)=>{
        set({allContest: [...new Set([data, ...get().allContest])]})
    },
    deleteContest: (id)=>{
        set({allContest: get().allContest.filter((ele)=> ele._id !== id)})
    },


    gettingNotifications: async(id)=>{
        
        try {
            const response = await ContestApi.getNotification(id)
            const responseData = response.data 
            if(response.status === 200 && responseData.STATUS === "SUCCESSFUL"){
                const dbData = responseData.DB_DATA 
                set({notificationData: dbData})

            }
        } catch (error) {
            
        }
        
    }

    
    
})

export default contestServices