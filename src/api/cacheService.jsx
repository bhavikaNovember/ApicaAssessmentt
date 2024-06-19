import axios from 'axios';

const API_URL = 'http://apiendpoint'; 

export const getCacheValue = async (key) => {
  try {
    const response = await axios.get(API_URL);
    return response.data
  } catch (error) {
    console.error('Error:', error)
    throw error;
  }
};

export const setCacheValue = async (key, value, expiration) => {
  try {
    const response = await axios.post(API_URL, {
      key,
      value,
      expiration
    })
    return response.data
  } catch (error) {
    console.error('Error:', error)
    throw error;
  }
};
