import axios from "axios";
import { getCachedData, setCachedData } from "./apiCache";

const teamsAPIClient = axios.create({
    baseURL: 'https://v1.formula-1.api-sports.io',
    headers: {
        'Content-Type':'application/json',
        'x-rapidapi-host':'v1.formula-1.api-sports.io',
        'x-rapidapi-key':process.env.REACT_APP_API_SPORTS_KEY
    }
});

export const getTeams = async (params: string) => {

    const cacheKey = `team-${params}`;
    const cachedData = getCachedData(cacheKey);
    if (cachedData){
        return cachedData;
    }

    try {
        const response = await teamsAPIClient.get('/teams?search='+ params);
        setCachedData(cacheKey, response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching teams', error);
        throw error;
    }
};