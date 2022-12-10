import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://tinder-backend-mu.vercel.app',
})

export default  instance;