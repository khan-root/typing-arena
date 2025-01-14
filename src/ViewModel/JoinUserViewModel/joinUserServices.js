import useStore from "../../Store/Store"

const useJoinUser = ()=>{

    const joinUserList = useStore((state)=> state.joinUserList)
    const gettingJoinUser = useStore((state)=> state.gettingJoinUser)


    return {
        joinUserList,
        gettingJoinUser
    }
}


export default useJoinUser