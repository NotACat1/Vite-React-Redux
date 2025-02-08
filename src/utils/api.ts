import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://jsonplaceholder.typicode.com';

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

// Функция получения пользователя
export const fetchUserApi = async (userId: number) => {
  const response = await api.get(`/users/${userId}`);
  return response.data;
};
