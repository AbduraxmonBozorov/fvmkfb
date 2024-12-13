import axios from "axios";

const instance = axios.create({
    baseUrl: "http://localhost:4000/api-docs"
})

export default instance;