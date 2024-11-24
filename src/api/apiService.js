import axios from "axios";

const api = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
})

export const getData = async (method, params={}) => {
    try {
        const response = await api.get(method, {
            params
        })
        const data = response.data

        return data
    } catch (error) {
        throw Error(error)
    }
}
