import axios from "axios";

const api = axios.create({
  baseURL: "https://activity-862a1-default-rtdb.firebaseio.com/todos/-MZ05wI4Zc8p9J-F07A9.json",
});

export default api;