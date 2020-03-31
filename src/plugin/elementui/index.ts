import {
    Button,
    Input,
    MessageBox,
    Message,
    Container,
    Header,
    Aside,
    Main,
    Menu,
    Submenu,
    MenuItem,
    Form,
    Select,
    FormItem,
    Option,
    Table,
    TableColumn,
    Pagination,
    PageHeader
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

export default {
    install(Vue: any) {
        Vue.prototype.$confirm = MessageBox.confirm
        Vue.prototype.$message = Message
        Vue.use(Button)
            .use(Input)
            .use(Container)
            .use(Header)
            .use(Aside)
            .use(Main)
            .use(Menu)
            .use(MenuItem)
            .use(Submenu)
            .use(Form)
            .use(FormItem)
            .use(Select)
            .use(Option)
            .use(Table)
            .use(TableColumn)
            .use(Pagination)
            .use(PageHeader)
    }
}
