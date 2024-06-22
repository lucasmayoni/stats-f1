import axios from "axios";
import { getCachedData, setCachedData } from "./apiCache";

const circuitsAPIClient = axios.create({
    baseURL: 'https://v1.formula-1.api-sports.io',
    headers: {
        'Content-Type':'application/json',
        'x-rapidapi-host':'v1.formula-1.api-sports.io',
        'x-rapidapi-key':process.env.REACT_APP_API_SPORTS_KEY
    }
});

export const getCircuits = async (params: string | undefined) => {

    const cacheKey = `circuit-${params}`;
    const cachedData = getCachedData(cacheKey);
    if (cachedData){
        return cachedData;
    }

    try {
        const response = await circuitsAPIClient.get('/circuits?search='+ params);
        setCachedData(cacheKey, response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching circuit', error);
        throw error;
    }
};