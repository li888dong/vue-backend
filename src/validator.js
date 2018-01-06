const mobileRule = (rule, val, callback) => {
    if (!/^1\d{10}$/.test(val)) {
        return callback(new Error("输入的手机号格式不对"));
    } else {
        callback();
    }
};
const nameRule = (rule, val, callback) => {
    if (!/^[\w\u4e00-\u9fa5]{4,18}$/.test(val)) {
        return callback(new Error("输入的公司名称不合法"))
    } else {
        callback()
    }
};
const fullnameRule = (rule, val, callback) => {
    if (!/^[\u4e00-\u9fa5]{2,4}$/.test(val)) {
        return callback(new Error("输入的姓名称不合法"))
    } else {
        callback()
    }
};
const authRule = (rule, val, callback) => {
    if (!/^\d{6}$/.test(val)) {
        return callback(new Error("输入的姓名称不合法"))
    } else {
        callback()
    }
};
let psw1 = '';
const pswRule = (rule, val, callback) => {
    if (rule.field === 'password') {
        psw1 = val
    }
    if (!/^\w{6,12}$/.test(val)) {
        return callback(new Error("输入的密码不合法"))
    } else {
        callback()
    }
};
const pswRule2 = (rule, val, callback) => {
    if (psw1 !== val) {
        return callback(new Error("输入的密码不合法"))
    } else {
        callback()
    }
};
export default {
    name: [{required: true, message: '公司名不能为空', trigger: 'blur'},
        {validator: nameRule, message: '公司名4-18位', trigger: 'blur'},
    ],
    fullname: [{required: true, message: '姓名不能为空', trigger: 'blur'},
        {validator: fullnameRule, message: '姓名2-4位中文', trigger: 'blur'},],
    mobile: [
        {required: true, message: '手机号码不能为空', trigger: 'blur'},
        {validator: mobileRule, message: '输入的手机号格式错误', trigger: 'blur'},
    ],
    code: [
        {required: true, message: '验证码不能为空', trigger: 'blur'},
        {validator: authRule, message: '请输入6位数字验证码', trigger: 'blur'},
    ],
    tel: [{required: true, message: '座机号不能为空', trigger: 'blur'}],
    sex: [{required: true, message: '性别不能为空', trigger: 'blur'}],
    email: [
        {required: true, message: '邮箱不能为空', trigger: 'blur'},
        {required: true, type: 'email', message: '不符合邮箱格式', trigger: 'blur'}
    ],
    password: [
        {required: true, message: '密码不能为空', trigger: 'blur'},
        {validator: pswRule, message: '请输入6-12位密码，可包含字母、数字或下划线', trigger: 'blur'},
    ],
    password2: [
        {required: true, message: '密码不能为空', trigger: 'blur'},
        {validator: pswRule, message: '请输入6-12位密码，可包含字母、数字或下划线', trigger: 'blur'},
        {validator: pswRule2, message: '两次密码输入不一致', trigger: 'blur'},
    ]
}
