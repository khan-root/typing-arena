import { FaPencilAlt, FaTrash, FaEye } from "react-icons/fa";
import { SiWebauthn } from 'react-icons/si'
export const userActionData = [
    {id:1, title:'View', icon: <FaEye className="text-yellow-500"/>},
    {id:2, title:'Edit', icon: <FaPencilAlt className="text-green-500"/>},
    {id:3, title:'Delete', icon: <FaTrash className="text-red-500" />},
    // {id:4, title:'Delete', icon: <SiWebauthn className="text-red-500" />},
]



export const genderData = [
    {id:1, title:'Male', value:'Male'},
    {id:2, title:'Female', value:'Female'},
]



export const privilegesData = [
    {id:1, title:'Read Only', value:'Read Only'},
    {id:2, title:'Full Access', value:'Full Access'},
    {id:3, title:'No Access', value:'No Access'},
]




export const contestActionData =[
    {id:1, title:'Join User'},
    {id:2, title: 'Manage Paragraph'},
    {id:3, title:'Leaderboard'},
    {id:4, title:'Edit'},
    {id:5, title:'Delete'}
] 