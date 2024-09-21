export const getLocalStorage = () => {
   const localStorageItem = localStorage.getItem('authToken')

   return localStorageItem
    
};

export const settingLocalStorage = (key, value) => {
  if (key && value !== undefined) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error saving to local storage (key: ${key}):`, error);
    }
  }

  
};