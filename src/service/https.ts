import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';

// 超时重新请求配置
const axiosConfig: AxiosRequestConfig = {
    baseURL: process.env.NODE_ENV === 'development' ? '/api' : '/',
    timeout: 60 * 1000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
    },
};

// 修改axios配置信息
const service: any = axios.create(axiosConfig);

// http request 拦截器
service.interceptors.request.use(
    (config: any) => {
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    },
);

// http response 拦截器
service.interceptors.response.use(
    (response: any) => {
        return response;
    },
    (err: any) => {
        if ( err && err.response) {
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
                    console.log(`连接错误${err.response.status}`);
            }
        } else {
            console.log("Server connection failed...");
        }
        return Promise.resolve(err.response);
    },
);

export function get(url: string, data: any = null) {
    return new Promise((resolve: any, reject: any) => {
        service.get( url, { params: data }).then((response: any) => {
            resolve(response.data);
        }).catch((error: any) => {
            reject(error);
        });
    });
}

export function post(url: string, data: any = null) {
    return new Promise((resolve: any, reject: any) => {
        service.post(url, qs.stringify(data)).then((response: any) => {
            resolve(response.data);
        }, (error: any) => {
            reject(error);
        });
    });
}














