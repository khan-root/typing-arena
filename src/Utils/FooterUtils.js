import { FaCode, FaCodeBranch, FaDiscord, FaDonate, FaEnvelope, FaFileContract, FaLock, FaPalette, FaShieldAlt, FaTwitter } from "react-icons/fa"
import useStore from "../Store/Store"

const useFooterUtils = ()=>{


    const theme = useStore((state)=> state.theme)
    
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
        {id:2, title: 'version', icon:<FaCodeBranch />},
    ]


    return { LeftSideFooter, RightSideFooter, theme }
}


export default useFooterUtils