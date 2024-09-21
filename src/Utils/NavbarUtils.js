import { BiLogOut } from "react-icons/bi";
import { FaKeyboard, FaCrown, FaInfo, FaUser } from "react-icons/fa";
import { FaBell, FaTrophy } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";

export const NavbarLeftSideData = [
    {id:1, icon:<FaKeyboard />, link:'' },
    {id:2, icon:<FaCrown />, link:'' },
    {id:3, icon:<FaInfo />, link:'' },
    {id:4, icon:<IoSettings />, link:'' },
    {id:5, icon:<FaTrophy />, link:'/leaderboard' },
]
export const NavbarRightSideData = [
    {id:1, icon:<FaBell /> },
    {id:2, icon:<FaUser />},
    {id:3, icon:<BiLogOut />, requiresLogin: true }
]