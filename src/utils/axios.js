import axios from "axios";
import Cookies from 'universal-cookie'
const cookies = new Cookies();

const instance = axios.create({
  // baseURL: 'http://localhost:3003/'
  baseURL: 'http://localhost:5000/',
  headers: {
    Authorization: `${cookies.get('token')}`
  }
});

export default instance