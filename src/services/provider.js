import axios from "axios"

export const api = axios.create({
    baseURL: 'https://www.course-api.com/react-tours-project',
    //baseURL: 'https://66a7bc6053c13f22a3d0e3f5.mockapi.io/api/v1/cart',
    timeout: 10000
})
