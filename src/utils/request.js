import axios from 'axios'

const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 3 * 1000
})

service.interceptors.request.use(config => {
    config.data = JSON.stringify(config.data);
    config.headers = {
        'Content-Type': 'application/json'
    }
    return config
}, error => {
    Promise.reject(error)
})

service.interceptors.response.use(response => {
    return response.data;
}, error => {
    return Promise.resolve(error.response)
})

export default service