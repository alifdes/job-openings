import axios from 'axios';
import { apiURL } from '../utils/base-url';

export const getDepartments = async () => {
  try {
    const response = await axios.get(`${apiURL}/departments`);
    return response.data;
  } catch (error) {
    console.error('Error fetching departments:', error);
    throw error;
  }
};
