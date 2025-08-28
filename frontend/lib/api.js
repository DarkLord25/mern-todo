import axios from "axios";

const API = "https://mern-todo-ghso.onrender.com";

export const getTasks = () => axios.get(API);
export const createTask = (task) => axios.post(API, task);
export const updateTask = (id, task) => axios.put(`${API}/${id}`, task);
export const deleteTask = (id) => axios.delete(`${API}/${id}`);
