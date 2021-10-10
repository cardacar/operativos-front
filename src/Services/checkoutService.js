import axios from 'axios'

const APIURL= "http://localhost:8090/api/billing"

export const createBilling= async (data)=>{
    const response = axios.post(`${APIURL}`, data);
    return response;
}