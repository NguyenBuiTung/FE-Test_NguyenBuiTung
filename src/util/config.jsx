import axios from "axios";
import { history } from "../index.js";
//Setup hang so, 1 so ham xu ly chung
export const USER_LOGIN = "userLogin";
export const ACCESSTOKEN = "accessToken";
export const settings = {
  setStorageJson: (name, data) => {
    data = JSON.stringify(data);
    localStorage.setItem(name, data);
  },
  setStorage: (name, data) => {
    localStorage.setItem(name, data);
  },
  getStorageJson: (name) => {
    if (localStorage.getItem(name)) {
      const data = JSON.parse(localStorage.getItem(name));
      return data;
    }
    return; //undefined
  },
  getStore: (name) => {
    if (localStorage.getItem(name)) {
      const data = localStorage.getItem(name);
      return data;
    }
    return; //undefined
  },
  setCookieJson: (name, value, days) => {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    value = JSON.stringify(value);
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  },
  getCookieJson: (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0)
        return JSON.parse(c.substring(nameEQ.length, c.length));
    }
    return null;
  },
  setCookie: (name, value, days) => {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  },
  getCookie: (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  eraseCookie: (name) => {
    document.cookie =
      name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  },
};
export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMyIsIkhldEhhblN0cmluZyI6IjA4LzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MDkxMjAwMDAwMCIsIm5iZiI6MTY1Mjg5MzIwMCwiZXhwIjoxNjgxMDU5NjAwfQ.YWfEjzumDyUA3XRRvMIkDiD1cOGgRKyAAeOTP3qTT2c";
export const https = axios.create({
  baseURL: "https:shop.cyberlearn.vn", //tat ca cac ham khi chen api deu su dung domain nay
  timeout: 30000, //neu request mat 5 phut ma ko nhan duoc ket qua thi huy request
});
//cau hinh cho request:Client gui api den server
https.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      TokenCyberSoft: TOKEN_CYBERSOFT,
      Authorization:'Bearer'+ settings.getStore(ACCESSTOKEN),
    };
    return config;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);
//cau hinh cho reponse:Server se tra du kieu ve chi client
https.interceptors.response?.use(
  (response) => {
    return response;
  },
  function (err) {
    //That bai cua tat ca request  su dung https se tra vao day
    if (err.response?.status === 401) {
      //Chuyen huong trang ma ko can reload lai trang de du duoc cac state hien tai tren redux
      history.push("/login");
    }
    if (err.response?.status === 400 || err.response?.status === 400) {
      //Chuyen huong trang ma ko can reload lai trang de du duoc cac state hien tai tren redux
      history.push("/");
    }
    return Promise.reject(err);
  }
);
//Cac status code thuong gap
//200:Request gui di va nhan lai ket qua thanh cong
//201:Request gui di thanh cong va da duoc khoi tao
//400:badrequest =>request gui di thanh cong tuy nhien ko tim thay du lieu tu tham so gui di
//404:Not found:Ko tim thay api do hoac tuong tu 400
//401:Unauthorize:token ko hop le ko co quyen truy cap vao api do
//403:Forbinden token hop le tuy nhien chua du quyen de truy cap vao api do
//500:Error server (Loi xay ra tren server co kha nang la front end gui du lieu chua hople dan den backend xu ly bi loi.backend code loi tren server =>Test bang post man hoac swagger neu api ko loi =>front end code sai ,nguoc lai tail fail tren post man va swagger thi bao backend fix)
