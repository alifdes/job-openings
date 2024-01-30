import axios from 'axios';
import { apiURL } from '../utils/base-url';

export const getDivisions = async () => {
  try {
    const response = await axios.get(`${apiURL}/divisions`);
    return response.data;
  } catch (error) {
    console.error('Error fetching divisions:', error);
    throw error;
  }
};
