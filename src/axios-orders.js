import axios from "axios";

const instance = axios.create({
    baseURL : 'https://react-burger-58aa3-default-rtdb.firebaseio.com/'
});

export default instance;