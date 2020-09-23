import axios from 'axios'

const api = axios.create({
    baseURL: 'https://randomuser.me',
})

export const getAllEmployees = () => api.get(`/api/?results=100&nat=us`)

const apis = {
    getAllEmployees,
}

export default apis
