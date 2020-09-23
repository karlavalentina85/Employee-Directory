import axios from 'axios'

const api = axios.create({
    baseURL: '/api',
})

export const insertEmployee = payload => api.post(`/employee`, payload)
export const getAllEmployees = () => api.get(`/employees`)
export const updateEmployeeById = (id, payload) => api.put(`/employee/${id}`, payload)
export const deleteEmployeeById = id => api.delete(`/employee/${id}`)
export const getEmployeeById = id => api.get(`/employee/${id}`)

const apis = {
    insertEmployee,
    getAllEmployees,
    updateEmployeeById,
    deleteEmployeeById,
    getEmployeeById,
}

export default apis
