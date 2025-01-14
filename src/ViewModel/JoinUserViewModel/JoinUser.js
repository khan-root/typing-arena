import { showToast } from "../../Components/Toaster"
import ContestApi from "../../Model/Contest/Contest"

const joinUserServices = (set, get)=>({

    joinUserList:[],
    gettingJoinUser: async(id)=>{
        try {
            const response = await ContestApi.getJoinUser(id)
            const responseData = response.data 
            if(response.status === 200 && responseData.STATUS === "SUCCESSFUL"){
                const dbData = responseData.DB_DATA 
                set({joinUserList: dbData})
            }
        } catch (error) {
            set({joinUserList: []})
            const error_description = error.response.data.ERROR_DESCRIPTION 
            showToast(error_description, 'error')
        }
    }
})

export default joinUserServices