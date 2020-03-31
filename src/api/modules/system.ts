import { http } from '@/axios'

export default {
    // 获取天气预报 - axios 的 get 请求参数需要写在对象中的params键上
    getTianQi: (data?: any) => http.get(``, { params: data })
}