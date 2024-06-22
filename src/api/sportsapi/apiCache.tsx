export const getCachedData = (key:string ) => {
    const cachedEntry = localStorage.getItem(key);
    if (!cachedEntry) {
        return null;
    }   
    return JSON.parse(cachedEntry);
}

export const setCachedData = (key:string, data:any): void => {
    
    localStorage.setItem(key, JSON.stringify(data) );
}