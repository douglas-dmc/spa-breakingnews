import axios from "axios"
import Cookies from "js-cookie"

const baseURL = "http://localhost:3001"

export function signup(data) {
    delete data.confirmPassword
    const body = {
        ...data,
        username: generateUserName(data.name),
        avatar: "https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_1280.png",
        background:
            "https://th.bing.com/th/id/R.1e758aff399af67ddc076515faaa50e7?rik=uDTJCDp9PTdZfA&riu=http%3a%2f%2f2.bp.blogspot.com%2f--Ooq3Pj_sVM%2fT4cvMGXy-nI%2fAAAAAAAAFco%2fozEPo0z3Rz4%2fs1600%2fpraia-paradisiaca-imagens-imagem-de-fundo-wallpaper-para-pc-computador-tela-gratis-ambiente-de-trabalho.jpg&ehk=j3TPSf4Z%2b%2bAPfIBeQcC9%2fUrehi0fIvDkDmWjrkXYJDo%3d&risl=&pid=ImgRaw&r=0",
    }
    const response = axios.post(`${baseURL}/user/create`, body)
    return response
}

export function signin(data) {
    const response = axios.post(`${baseURL}/auth/login`, data);
    return response;
  }

export function userLogged() {
    const response = axios.get(`${baseURL}/user/findById`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
        },
    })
    return response
}

function generateUserName(name) {
    const nameLowerCaseWithoutSpaces = name.replace(/\s/g, "").toLowerCase()
    const randomNumber = Math.floor(Math.random() * 1000)
    return `${nameLowerCaseWithoutSpaces}-${randomNumber}`
}
