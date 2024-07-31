import axios from "axios"

export const api = axios.create({
    baseURL: 'https://www.course-api.com/react-tours-project',
    timeout: 10000
})
