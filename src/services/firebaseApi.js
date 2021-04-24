import axios from "axios";

const api = axios.create({
  baseURL: "https://activity-862a1-default-rtdb.firebaseio.com/todos.json",
});

export default api;