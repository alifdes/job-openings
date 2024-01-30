import axios from 'axios';
import { apiURL } from '../utils/base-url';

export const getLocations = async () => {
  try {
    const response = await axios.get(`${apiURL}/locations`);
    return response.data;
  } catch (error) {
    console.error('Error fetching locations:', error);
    throw error;
  }
};
