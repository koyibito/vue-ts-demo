import axios from 'axios';
import qs from 'qs';

// 创建axios实例
let service: any = {};
if (process.env.NODE_ENV === "development") {
    service = axios.create({
        baseURL: "/api", // api的base_url
        timeout: 60 * 1000, // 请求超时时间
        withCredentials: true
    });
} else {
    // 生产环境下
    service = axios.create({
        baseURL: "", // api的base_url
        timeout: 60 * 1000, // 请求超时时间
        withCredentials: true
    });
}

//http request 拦截器
service.interceptors.request.use(
    (config: any) => {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded',
        config.headers['Accept'] = 'application/json'
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

//http response 拦截器
service.interceptors.response.use(
    (response: any) => {
        return response;
    },
    (err: any) => {
        if(err && err.response){
            switch (err.response.status) {
                case 404:
                    console.log('请求错误,未找到该资源');
                    break;
                case 500:
                    console.log('服务器端出错');
                    break;
                case 502:
                    console.log('网络错误');
                    break;
                case 504:
                    console.log('网络超时');
                    break;
                default:
                    console.log(`连接错误${err.response.status}`)
            }
        } else {
            console.log("Server connection failed...");
        }
        return Promise.resolve(err.response);
    }
);

/**
 * get request
 * @param url
 * @param params
 * return {promise}
 * */
export function get(url: string, params: any = {}, data: any = null) {
    return new Promise((resolve: any, reject: any) => {
        if(data){
            url += '?'+qs.stringify(data);
        }
        axios.get(url,{
            params:params
        }).then((response: any) => {
            resolve(response.data);
        }).catch((error: any) => {
            reject(error);
        })
    })
}

/**
 * post request
 * @param url
 * @param data
 * return {promise}
 * */
export function post(url: string, data: any = null) {
    return new Promise((resolve: any, reject: any) => {
        axios.post(url,qs.stringify(data)).then((response: any) => {
            resolve(response.data);
        },(error: any) => {
            reject(error);
        })
    })
}














