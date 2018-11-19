import axios from 'axios';
import qs from 'qs';
import { message } from 'antd';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';           //配置请求头
axios.defaults.headers.post['dataType']= "json";
axios.defaults.baseURL = '/';   //配置接口地址
//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
    //在发送请求之前做某件事
    if(config.method==='get'){
        var random = Math.random();
        if (config.params) {
            config.params.r = random;
        } else {
            config.params = {
                r: random
            };
        }
    }
    if(config.method  === 'post'){
        config.data.dataCenter=window.$dataCenter;
        if (!config.data.needJson) {
            config.data = qs.stringify(config.data);
        }else{
            delete config.data.needJson;
        }
    }
    return config;
},(error) =>{
    message.error('错误的传参');
    return Promise.reject(error);
});
//返回状态()判断(添加响应拦截器)
axios.interceptors.response.use((res) =>{
    //对响应数据做些事
    if(res.data.code!='200'){
        message.error(res.data.messages);
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    message.error("网络异常");
    return Promise.reject(error);
});
export  default  axios;
// export default function ajax(ajaxObj) {
//     return new Promise((resolve, reject) => {
//         let data=[],params='';
//         if(!ajaxObj.type||ajaxObj.type==='post'){
//             data=ajaxObj.params;
//         }else if(ajaxObj.type==='get'){
//             params=ajaxObj.params;
//         }
//         axios({
//             method:ajaxObj.type?ajaxObj.type:'post',
//             url:ajaxObj.url,
//             data:data,
//             params:params
//         })
//             .then(response => {
//                 resolve(response)
//             })
//             .catch((error) => {
//                 reject(error)
//             });
//     })
// }


// WEBPACK FOOTER //
// ./src/ajax/axios.js