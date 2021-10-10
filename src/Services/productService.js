import axios from "axios";

const APIURL= "http://localhost:8090/api/product";

export const createProductAxios = async (data)=>{
    const response = axios.post(`${APIURL}`, data);
    return response;
}
export const getProductAxios = async ()=>{
    const response = axios.get(`${APIURL}`);
    return response;

}
export const putProductAxios= async (data)=>{
    const response = axios.put(`${APIURL}`, data);
    return response;

}
export const deleteProductAxios= async (id)=>{
    const response = axios.delete(`${APIURL}/${id}`);
    return response;

}
