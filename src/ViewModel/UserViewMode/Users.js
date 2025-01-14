import UsersApi from "../../Model/Users/Users"

const userViewModel = (set, get)=>({

    userData:[],
    privileges:[],


    getAllUsers:async()=>{
        try{
            const response = await UsersApi.getUsers()
            const responseData = response.data 
            if(response.status === 200 && responseData.STATUS === "SUCCESSFUL"){
                const dbData = responseData.DB_DATA
                set({userData:dbData})
            }
            // console.log('response', response)

        }catch(err){
            console.log()
        }
    },
    getAlPrivileges:async()=>{
        try{
            const response = await UsersApi.getPrivileges()
            const responseData = response.data 
            if(response.status === 200 && responseData.STATUS === "SUCCESSFUL"){
                const dbData = responseData.DB_DATA
                set({privileges:dbData})
            }

        }catch(err){
            console.log()
        }
    },

    addNewUser:(data)=>{
        set({userData: [...new Set([...get().userData, data])]})
    },
    deleteUser:(id)=>{
        set({userData:get().userData?.filter((ele)=> ele._id !== id)})
    }


})


export default userViewModel