import axios from 'axios';


const baseURL ="https://orange-evolution-squad23.herokuapp.com/";

export const Api = axios.create({ baseURL })