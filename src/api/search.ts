import axios from 'axios';

const BASE_URL = 'http://localhost:7070/api/search';

export const searchApi = async (query: string) => {
    try {
        const response = await axios.get(BASE_URL, {
        params: { q: query },
        });
        return response.data;
    } catch (err) {
        throw new Error('Something went wrong');
    }
};