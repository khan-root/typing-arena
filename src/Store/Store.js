import {create} from 'zustand'
import themeServices from '../Theme/ThemeServices'
import authProvide from '../Services/__authProvide'
import contestServices from '../ViewModel/ContestViewModel/Contest'
import paragraphService from '../ViewModel/ParagraphViewModel/Paragraph'
import userViewModel from '../ViewModel/UserViewMode/Users'
import joinUserServices from '../ViewModel/JoinUserViewModel/JoinUser'


const useStore = create((set, get)=>({
    ...themeServices(set,get),
    ...authProvide(set,get),
    ...contestServices(set,get),
    ...paragraphService(set,get),
    ...userViewModel(set,get),
    ...joinUserServices(set,get),
}))

export default useStore