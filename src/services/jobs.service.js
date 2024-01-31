import axios from 'axios';
import { apiURL } from '../utils/base-url';

export const getJobs = async (filterData) => {
  const paramsData={
    q:filterData.searchString,
    loc:filterData.location?.value,
    dept:filterData.department?.value,
    div:filterData.division?.value,
    fun:filterData.function?.value,
  }
  try {
    const response = await axios.get(`${apiURL}/jobs`, { params: paramsData });
    return response.data;
  } catch (error) {
    console.error('Error fetching Jobs:', error);
    throw error;
  }
};


export const getJob= async (ID) => {
  console.log("ID",ID)
  try {
    const response = await axios.get(`${apiURL}/jobs/${ID}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Job :',ID, error);
    throw error;
  } 
};