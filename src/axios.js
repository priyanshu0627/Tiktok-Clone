import axios from "axios";

const instance = axios.create({
    baseURL: "https://tik-tok--clone.herokuapp.com/"
});

export default instance;