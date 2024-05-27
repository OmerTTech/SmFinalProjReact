import axios from 'axios';

const API_URL = 'https://reqres.in/';

export const api = axios.create({
  baseURL: API_URL,
});

export const getUsers = (page) => api.get(`/api/users?page=${page}`);
export const createUser = (user) => api.post('/api/users', user);
export const updateUser = (id, user) => api.put(`/api/users/${id}`, user);
export const deleteUser = (id) => api.delete(`/api/users/${id}`);
