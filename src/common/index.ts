import { vue } from '@/main'

export default {
    install(Vue: any) {
        // 获取token
        Vue.prototype.$setToken = setStorage('accessToken')
        // 获取userNmae
        Vue.prototype.$setUserName = setStorage('username')
        // 获取密码
        Vue.prototype.$setPassWord = setStorage('password')
        // 通过name跳转
        Vue.prototype.$jump = (name: string, params: any = {}) => vue.$router.push({ name, params }).catch(e => e)
        // 通过path跳转
        Vue.prototype.$path = (path: string, query: any = {}) => vue.$router.push({ path, query }).catch(e => e)
        // 消息跳转
        Vue.prototype.$jumpPage = (path: string) => vue.$router.push({ path: `${path.trim()}` }).catch(e => e)
        // 返回上一级路由
        Vue.prototype.$back = () => vue.$router.go(-1)
        // 获取Storage
        Vue.prototype.$getStorage = (key: string) => localStorage.getItem(`${key}`)
        // 移除storage
        Vue.prototype.$removeStorage = (key: string) => localStorage.removeItem(`${key}`)
    }
}

// 柯里化
export const getToken = () => localStorage.getItem(`accessToken`)
const setStorage = (key: string) => (value: string) => localStorage.setItem(`${key}`, `${value}`)