import axios from "axios";

const client = axios.create();

client.defaults.baseURL =
  "http://ec2-15-165-96-185.ap-northeast-2.compute.amazonaws.com";

export default client;
