import axios from 'axios';
import { apiURL } from '../utils/base-url';

export const getFunctions = async () => {
  try {
    const response = await axios.get(`${apiURL}/functions`);
    return response.data;
  } catch (error) {
    console.error('Error fetching functions:', error);
    throw error;
  }
};
