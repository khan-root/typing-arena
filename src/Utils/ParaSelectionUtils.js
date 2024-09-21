import { BsClockFill } from "react-icons/bs"
import { FaMountain, FaQuoteLeft, FaTools, FaWrench } from "react-icons/fa"
import { TbLetterA } from "react-icons/tb"

export const paraLeftSelection = [
    {id: 1, name:'punctuation', title: '@'},
    {id: 2, name:'numbers', title: '#'},
]
export const paraCenterSelection = [
    {id: 1, name:'time', icon:<BsClockFill />},
    {id: 2, name:'words', icon:<TbLetterA />},
    {id: 3, name:'quote', icon:<FaQuoteLeft />},
    {id: 4, name:'zen', icon:<FaMountain />},
    {id: 5, name:'custom', icon:<FaWrench />},
]
export const paraRightSelection = [
    {id: 1, name:'15'},
    {id: 2, name:'30'},
    {id: 3, name:'60'},
    {id: 4, name:'120'},
    {id: 5, name:<FaTools />},
]