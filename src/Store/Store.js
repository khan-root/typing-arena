import {create} from 'zustand'
import themeServices from '../Theme/ThemeServices'
import authProvide from '../Services/__authProvide'


const useStore = create((set, get)=>({
    ...themeServices(set,get),
    ...authProvide(set,get),
}))

export default useStore