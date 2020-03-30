import { Button, Input, MessageBox, Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

export default {
    install(Vue: any) {
        Vue.prototype.$confirm = MessageBox
        Vue.prototype.$message = Message
        Vue.use(Button)
            .use(Input)
    }
}
