import axios from "axios";

const URI = process.env.REACT_APP_API_URL;
// console.log('NODE_ENV ============>', process.env.NODE_ENV)

const AxiosBase = axios.create({
  baseURL: URI
});

export default AxiosBase;
