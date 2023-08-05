import axios from "axios"

const baseURL = "http://localhost:3000"

export function getAllPosts() {
    const response = axios.get(`${baseURL}/news`, {
        headers: { "Access-Control-Allow-Credentials": "*" }
    })
    return response
}
