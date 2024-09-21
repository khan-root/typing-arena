export const getParsedLocalStorageItem = (key) => {
    const itemString = localStorage.getItem(key);
    if (itemString) {
        try {
            return JSON.parse(itemString);
        } catch (error) {
            console.error(`Error parsing localStorage item with key "${key}":`, error);
            return null; // Return null if parsing fails
        }
    }
    return null; // Return null if the item doesn't exist
};