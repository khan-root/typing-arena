import { useNavigate } from "react-router-dom"
import useStore from "../Store/Store"

const useSideMenuServices = ()=>{

    const navigation = useNavigate()

    const sideMenuData = [
        {id:1, title:'Contest', link:'/admin/contest'},
        // {id:2, title:'Join User', link:'/admin/join-user'},
        {id:3, title:'Paragraph List', link:'/admin/paragraph-list'},
        // {id:4, title:'Position Leaderboard', link:'/admin/postion-leaderboard'},
        {id:5, title:'Users', link:'/admin/users'},
        // {id:6, title:'Privileges', link:'/admin/privileges'},
    ]



    const getAllUsers = useStore((state)=> state.getAllUsers)



    const handleAdminNavigation = (data)=>{
        navigation(data.link)
        const caseID = data.id
        switch (caseID) {
            case 5:
                getAllUsers()
                break;
        
            default:
                break;
        }
    }

    return {
        sideMenuData,
        handleAdminNavigation
    }

}

export default useSideMenuServices