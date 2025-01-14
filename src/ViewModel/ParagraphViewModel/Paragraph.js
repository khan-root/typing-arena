import { showToast } from "../../Components/Toaster"
import paragraphApi from "../../Model/Paragraph/Paragraph"

const paragraphService = (set, get)=>({
    paragraphList:[],


    gettingParagraphList: async()=>{
        try{
            const response = await paragraphApi.getAllParagraph()
            const responseData = response.data
            if(response.status === 200 && responseData.STATUS === "SUCCESSFUL"){
                set({
                    paragraphList: responseData.DB_DATA
                })
            }
            console.log(response)

        }catch(error){
             console.log(error)
            const errorData = error.response.data.ERROR_DESCRIPTION
            showToast(errorData, 'error')
            set({
                paragraphList: []
            })
        }
    },
    gettingContestParagraphList: async(id)=>{
        try{
            const response = await paragraphApi.getParagraphContest(id)
            const responseData = response.data
            if(response.status === 200 && responseData.STATUS === "SUCCESSFUL"){
                set({
                    paragraphList: responseData.DB_DATA
                })
            }
            
        }catch(error){
            console.log(error)
            const errorData = error.response.data.ERROR_DESCRIPTION
            showToast(errorData, 'error')
            set({
                paragraphList: []
            })

        }
    },

    
    newParagraph:(data)=>{
        set({
            paragraphList: [...new Set([...get().paragraphList, data])],
        })
    },

    deletePara:(id)=>{
        set({paragraphList: get().paragraphList.filter((ele)=> ele._id !== id)})
    },
    updateParagraph:(data)=>{
        set({paragraphList: get().paragraphList.map((ele)=> ele._id == data._id ? data: ele)})
    }
})


export default paragraphService