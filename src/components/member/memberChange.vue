<template>
    <div>
        <div class="top-Lv1">
            <span class="tittle-lv1">编辑成员信息</span>
        </div>
        <div class="mainContent">
            <div class="mainNav">
                <!-- @click="toAdd()" -->
                <Button type="primary" size="small" @click="handleSubmit('formValidate');$router.go(-1)">保存</Button>
                <Button type="ghost" size="small" @click="$router.go(-1)">取消</Button>
            </div>
            <div class="froms">
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                    <Row class="rows">
                        <Col span="12">
                        <!--<Avatar icon="person" size="large" class="photos" />-->
                        <FormItem label="姓名 :" prop="name">
                            <Input size="small" width="60" v-model="formValidate.name" placeholder="请填写名字"></Input>
                        </FormItem>
                        <!--<FormItem label="账号 :" prop="uNum">-->
                        <!--<Input size="small" v-model="formValidate.uNum" placeholder="成员唯一标识，设定以后不支持修改"></Input>-->
                        <!--</FormItem>-->
                        <FormItem label="性别 :" prop="gender">
                            <RadioGroup v-model="formValidate.gender">
                                <Radio label="1">男</Radio>
                                <Radio label="2">女</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="12">
                        <div class="a"></div>
                        </Col>
                    </Row>
                    <Row class="rows">
                        <Col span="12">
                        <FormItem label="座机 :" prop="tel">
                            <Input size="small" v-model="formValidate.tel" placeholder=""></Input>
                        </FormItem>
                        <FormItem label="邮箱 :" prop="mail">
                            <Input size="small" v-model="formValidate.mail" placeholder=""></Input>
                        </FormItem>
                        </Col>
                    </Row>

                    <Row class="rows">
                        <Col span="12">
                        <FormItem label="部门 :" prop="department">
                            <!--<span class="menberType">-->
                            <!--<i class="iconfont icon-fenjifenyu"></i>-->
                            <!--{{formValidate.department}}-->
                            <!--<Icon type="close" style="margin-left:20px;"></Icon>-->
                            <!--</span>-->
                            <!--<a href="javascript:void(0)" @click="modal1 = true">修改</a>-->
                            <Input size="small" v-model="formValidate.department" placeholder="请输入部门"></Input>

                        </FormItem>
                        <FormItem label="职务 :" prop="duty">
                            <Input size="small" v-model="formValidate.duty" placeholder=""></Input>
                        </FormItem>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div class="mainNav">
                <!-- @click="toAdd()" -->
                <Button type="primary" size="small" @click="handleSubmit('formValidate');$router.go(-1)">保存</Button>
                <Button type="ghost" size="small" @click="$router.go(-1)">取消</Button>
            </div>
        </div>
        <!--<Modal-->
            <!--title="选择成员所在部门"-->
            <!--v-model="modal1"-->
            <!--width='600'-->
            <!--:mask-closable=false-->
            <!--:styles="{top: '40px'}">-->
            <!--<Row class="modelBox">-->
                <!--<Col span="12">-->
                <!--<Input v-model="value1" icon="search" size="small" placeholder="搜索部门"></Input>-->
                <!--<div class="memberList">-->
                    <!--<ul>-->
                        <!--<li>-->
                            <!--<i class="iconfont icon-fenjifenyu"></i>-->
                            <!--河南众企联合售电有限公司-->
                            <!--<Icon type="checkmark"></Icon>-->
                        <!--</li>-->
                    <!--</ul>-->
                <!--</div>-->
                <!--</Col>-->
                <!--<Col span="12">-->
                <!--<div class="xuanZe">-->
                    <!--<span>已选择的部门</span>-->
                    <!--<div class="menberType">-->
                        <!--<i class="iconfont icon-fenjifenyu"></i>-->
                        <!--河南众企联合售电有限公司-->
                        <!--<Icon type="close"></Icon>-->
                    <!--</div>-->
                <!--</div>-->
                <!--</Col>-->
            <!--</Row>-->
        <!--</Modal>-->
    </div>
</template>

<script>
    export default {
        name: 'memberChange',
        data() {
            return {
                value1: '',
                modal1: false,
                formValidate: {
                    name: '',
                    uNum: '',
                    mail: '',
                    gender: '1',
                    department: '',
                    mobile: '13838510803',
                    tel: '',
                    duty: ''
                },
                ruleValidate: {
                    uNum: [
                        {required: true, message: '账号不能为空', trigger: 'blur'}
                    ],
                    name: [{required: true, message: '姓名不能为空', trigger: 'blur'}],
                    tel: [{required: true, message: '座机号不能为空', trigger: 'blur'}],
                    mail: [
                        {required: true, message: '邮箱不能为空', trigger: 'blur'},
                        {required: true, type: 'email', message: '不符合邮箱格式', trigger: 'blur'}
                    ],
                    gender: [
                        {required: true, message: '请选择性别', trigger: 'change'}
                    ],
                    department: [
                        {required: true, message: '部门不能为空', trigger: 'blur'}
                    ]
                },
                id: ''
            }
        },
        mounted() {
            this.id = this.$route.query.curinfo.id;
            this.formValidate.name = this.$route.query.curinfo.fullname;
            this.formValidate.mail = this.$route.query.curinfo.email;
            this.formValidate.mobile = this.$route.query.curinfo.mobile;
            this.formValidate.tel = this.$route.query.curinfo.tel;
            this.formValidate.duty = this.$route.query.curinfo.duty;
            this.formValidate.department = this.$route.query.curinfo.department;
            this.formValidate.gender = this.$route.query.curinfo.sex;
        },
        methods: {
            toAdd() {
                this.$router.push('memberAdd')
            },
            handleSubmit(name) {
                let reqData = {
                    id: this.id,
                    fullname: this.formValidate.name,
                    sex: this.formValidate.gender,
                    tel: this.formValidate.tel,
                    email: this.formValidate.mail,
                    department: this.formValidate.department,
                    duty: this.formValidate.duty,
                };
                console.log(reqData)
                this.$refs[name].validate((valid) => {
                    this.$http.post(this.$api.UPDATE_USER, reqData).then(res => {
                        console.log('修改会员', res);
                        if (res.data.status === '1') {
                            this.$Message.info(res.data.msg);
                        }
                    }, err => {
                        this.$Message.error('网络错误');
                    });
//                    if (valid) {
//                        this.$Message.success('Success!');
//                    } else {
//                        this.$Message.error('Fail!');
//                    }
                })
            }
        },

    }
</script>

<style scoped>
    .mainNav button {
        background-color: #fff;
    }

    .mainNav button:first-child {
        background-color: #2d8cf0;
    }

    .mainNav .adds:hover {
        opacity: 0.8;
    }

    .froms {
        padding: 8px 13px;
    }

    .photos {
        position: absolute;
        top: -22px;
        left: 0;
        width: 60px;
        height: 60px;
        line-height: 60px;
        border-radius: 30px;
        font-size: 40px;
    }

    .rows {
        padding: 20px 0;
        border-bottom: 1px solid #E4E6E9;
    }

    .ivu-form-item {
        margin-bottom: 2px;
    }

    .modelBox {
        padding: 4px 14px;
    }

    .memberList {
        height: 367px;
        margin-top: 20px;
    }

    .memberList li {
        height: 28px;
        padding-left: 28px;
        line-height: 28px;
    }

    .memberList li i {
        font-size: 16px;
        line-height: 27px;
        vertical-align: top;
    }

    .memberList li i:first-child {
        margin-right: 3px;
        color: #2d8cf0;
    }

    .memberList li i:last-of-type {
        margin-left: 10px;
        color: #ccc;
        font-size: 12px;
    }

    .xuanZe {
        margin-left: 20px;
        padding-left: 20px;
        border-left: 1px solid #E4E6E9;
        height: 407px;
    }

    .xuanZe span {
        display: block;
        font-size: 14px;
        color: #787878;
        margin-bottom: 10px;
    }

    .menberType {
        border: 1px solid #E4E6E9;
        display: inline-block;
        height: 26px;
        line-height: 26px;
        padding: 0 10px;
    }

    .menberType i:first-child {
        margin-right: 3px;
        color: #2d8cf0;
    }

    .menberType i:last-child {
        margin-left: 20px;
        color: #ccc;
    }
</style>
