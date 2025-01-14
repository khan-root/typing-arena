import { BiLogOut } from "react-icons/bi";
import { FaKeyboard, FaCrown, FaInfo, FaUser } from "react-icons/fa";
import { FaBell, FaTrophy } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";

export const NavbarLeftSideData = [
    {id:1, icon:<FaKeyboard />, link:'' },
    
    {id:3, icon:<FaInfo />, link:'' },
    {id:5, icon:<FaTrophy />, link:'/leaderboard' },
]
export const NavbarRightSideData = [
    {id:1, icon:<FaBell />, content:'Notifications' },
    {id:3, icon:<FaCrown />, link:'/leaderboard', content:'Leader Board' },
    {id:4, icon:<IoSettings />, requiresLogin: true, link:'', content:'Settings' },
    {id:5, icon:<BiLogOut />, requiresLogin: true, content:'' },
    {id:2, icon:<FaUser />, content:'Profile'},
]