import axios from "axios";

const client = axios.create();

client.defaults.baseURL = "http://localhost:3001";

export default client;
