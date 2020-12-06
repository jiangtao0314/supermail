import axios from 'axios';

export function request(config) {
    const instance = axios.create({
            baseURL: 接口地址请添加老师微信coderwhy获取,
            timeout: '5000',
        })
        //请求拦截器
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err);
    })


    //响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    })
    return instance(config)
}