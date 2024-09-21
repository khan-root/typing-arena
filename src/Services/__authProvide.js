const authProvide = (set, get)=>({

    login:false, 


    settingAuthState:(state)=>{
        set({login:state})
    }
})

export default authProvide