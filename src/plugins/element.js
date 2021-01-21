import Vue from 'vue'
import {
  Card,
  Form,
  Container,
  Header,
  Aside,
  Main,
  FormItem,
  Button,
  Input,
  Checkbox,
  Link,
  MessageBox,
  Message,
  Dialog,
  Upload,
  Menu,
  MenuItem,
  Select,
  Option,
  Table,
  TableColumn,
  Pagination,
  Row,
  Col,
  DatePicker,
  Cascader,
  Radio,
  RadioGroup
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Card)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Link)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Dialog)
Vue.use(Upload)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Row)
Vue.use(Col)
Vue.use(DatePicker)
Vue.use(Cascader)
Vue.use(Radio)
Vue.use(RadioGroup)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
