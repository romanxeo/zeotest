import axios from "axios";

const instance = axios.create({
    baseURL: " https://jsonplaceholder.typicode.com/",
})

export const testAPI = {
    getResponse() {
        return instance.get('users')
    }
}

