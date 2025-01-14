


const themeServices = (set, get)=>({
    
    theme: 'main', // default theme

    getThemeFromLocal:()=>{
        const theme = localStorage.getItem('theme')
        set({theme: theme})
    },
    setTheme: (newTheme) => set({ theme: newTheme }),
    
})

export default themeServices