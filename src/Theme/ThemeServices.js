


const themeServices = (set, get)=>({
    
    theme: 'main', // default theme
    setTheme: (newTheme) => set({ theme: newTheme }),
    
})

export default themeServices