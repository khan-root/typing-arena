import { FaCode, FaCodeBranch, FaDiscord, FaDonate, FaEnvelope, FaFileContract, FaLock, FaPalette, FaShieldAlt, FaTwitter } from "react-icons/fa"
import useStore from "../Store/Store"

const useFooterUtils = ()=>{


    const theme = useStore((state)=> state.theme)
    const setTheme = useStore((state)=> state.setTheme)
    const getThemeFromLocal = useStore((state)=> state.getThemeFromLocal)
    
    const LeftSideFooter=[
        {id:1, title: 'Contact', icon:<FaEnvelope />},
        {id:2, title: 'Support', icon:<FaDonate />},
        {id:3, title: 'Github', icon:<FaCode />},
        {id:4, title: 'Discord', icon:<FaDiscord />},
        {id:5, title: 'Twitter', icon:<FaTwitter />},
        {id:6, title: 'Terms', icon:<FaFileContract />},
        {id:7, title: 'Security', icon:<FaShieldAlt />},
        {id:8, title: 'Privacy', icon:<FaLock />},
    ]


    const RightSideFooter=[
        {id:1, title: theme, icon:<FaPalette />},
    ]



    const customThemeData = [
        {id:1, title:'default'},
        {id:2, title:'blue'},
        {id:3, title:'yellow'},
        {id:4, title:'pink'},
    ]


    const handleChnageTheme =(data)=>{
        setTheme(data.title)
        localStorage.setItem('theme', data.title);
    }


    return { LeftSideFooter, RightSideFooter, theme, customThemeData, handleChnageTheme,getThemeFromLocal}
}


export default useFooterUtils