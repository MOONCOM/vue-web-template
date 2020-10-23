import {
  Pagination, Dialog, Dropdown, DropdownMenu, DropdownItem, Menu, Submenu, MenuItem, Input,
  InputNumber, Radio, RadioGroup, RadioButton, Checkbox, CheckboxButton, CheckboxGroup, Switch,
  Select, Option, Button, ButtonGroup, Table, TableColumn, DatePicker, TimePicker, Popover, Tooltip,
  Breadcrumb, BreadcrumbItem, Form, FormItem, Tabs, TabPane, Row, Col, Container, Header, Aside, Main,
  Footer, Image, Backtop, PageHeader, MessageBox, Message, Carousel, CarouselItem,
} from 'element-ui';

export default function (vue) {
  const Vue = vue;
  [Pagination, Dialog, Dropdown, DropdownMenu, DropdownItem, Menu, Submenu, MenuItem, Input,
    InputNumber, Radio, RadioGroup, RadioButton, Checkbox, CheckboxButton, CheckboxGroup, Switch,
    Select, Option, Button, ButtonGroup, Table, TableColumn, DatePicker, TimePicker, Popover, Tooltip,
    Breadcrumb, BreadcrumbItem, Form, FormItem, Tabs, TabPane, Row, Col, Container, Header, Aside, Main,
    Footer, Image, Backtop, PageHeader, Carousel, CarouselItem].forEach((item) => {
    Vue.component(item.name, item);
  });
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$message = Message;
}
