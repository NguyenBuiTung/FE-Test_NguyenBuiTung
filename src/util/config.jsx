import axios from 'axios';
import { history } from '../index';
export const USER_LOGIN = 'userLogin';
export const ACCESSTOKEN = 'accessToken';
export const REFESHTOKEN='refeshToken'
export const settings = {
    setStorageJson: (name, data) => {
        data = JSON.stringify(data);
        localStorage.setItem(name, data);
    },
    setStorage: (name, data) => {
        localStorage.setItem(name, data)
    },
    getStorageJson: (name) => {
        if (localStorage.getItem(name)) {
            const data = JSON.parse(localStorage.getItem(name));
            return data
        }
        return; //undefined
    },
    getStore: (name) => {
        if (localStorage.getItem(name)) {
            const data = localStorage.getItem(name);
            return data
        }
        return; //undefined
    },
    setCookieJson: (name, value, days) => {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        value = JSON.stringify(value);
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
    getCookieJson: (name) => {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return JSON.parse(c.substring(nameEQ.length, c.length));
        }
        return null;
    },
    setCookie: (name, value, days) => {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
    getCookie: (name) => {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    eraseCookie: (name) => {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}
//Setup h???ng s???, 1 s??? h??m x??? l?? chung, ...

export const http = axios.create({
    baseURL: 'https://test-react.agiletech.vn', //t???t c??? c??c h??m khi g???i api ?????u s??? d???ng domain n??y
    timeout: 6000 //n???u request m???t 5 ph??t m?? kh??ng nh???n ???????c k???t qu??? th?? hu??? request
});
//C???u h??nh cho request: Client g???i api ?????n server
http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        
        Authorization: 'Bearer ' + settings.getStore(ACCESSTOKEN),
        Refeshtoken:'Bearer ' + settings.getStore(REFESHTOKEN)
    }

    return config;

}, err => {
    console.log(err);
    return Promise.reject(err);
})
//c???u h??nh cho response: Server s??? tr??? d??? li???u v??? cho client
http.interceptors.response.use((response) => {
    return response;
},  (error) => {

    //Th???t b???i c???a t???t c??? request s??? d???ng http s??? tr??? v??o ????y
    console.log(error);
    if(error.response?.status === 401) {
        // window.location.href = '/login';
        //Chuy???n h?????ng trang m?? kh??ng c???n reload l???i trang ????? gi??? ???????c c??c state hi???n t???i tr??n redux
        history.push('/login');
    }
    if(error.response?.status === 400 || error.response?.status === 400) {
      
        // history.push('/');
    }
    return Promise.reject(error);
})


/* C??c status code th?????ng g???p
    200: Request g???i ??i v?? nh???n v??? k???t qu??? th??nh
    201: request g???i ??i th??nh c??ng v?? ???? ???????c kh???i t???o 
    400: bad request => request g???i ??i th??nh c??ng tuy nhi??n kh??ng t??m th???y d??? li???u t??? tham s??? g???i ??i
    404: Not found (Kh??ng t??m th???y api ????), ho???c t????ng t??? 400
    401: Unauthorize token kh??ng h???p l??? kh??ng c?? quy???n truy c???p v??o api ????
    403: Forbinden token h???p l??? tuy nhi??n ch??a ????? quy???n ????? truy c???p v??o api ????
    500: Error server (L???i x???y ra tr??n server c?? kh??? n??ng l?? frontend g???i d??? li???u ch??a h???p l??? d???n ?????n backend x??? l?? b??? l???i). Backend code l???i tr??n server ! => Test b???ng post man ho???c swagger n???u api kh??ng l???i => front code sai, ng?????c l???i tail fail tr??n post man v?? swagger th?? b??o backend fix.

*/