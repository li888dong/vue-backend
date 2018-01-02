<template>
    <div>
        <div class="top-Lv1">
            <span class="tittle-lv1">添加成员</span>
        </div>
        <div class="mainContent">
            <div class="mainNav">
                <!--<Button type="primary" class="adds" size="small" @click="toAdd();handleSubmit">保存并继续添加</Button>-->
                <Button type="primary" size="small" @click="handleSubmit">保存</Button>
                <Button type="ghost" size="small" @click="$router.go(-1)">取消</Button>
            </div>
            <div class="froms">
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                    <Row class="rows">
                        <Col span="12">
                        <!-- <Avatar icon="person" size="large" class="photos" /> -->
                        <FormItem label="姓名 :" prop="fullname">
                            <Input size="small" width="60" v-model="formValidate.fullname" placeholder="请填写名字"></Input>
                        </FormItem>
                        <!-- <FormItem label="" prop="enName">
							<Input size="small" v-model="formValidate.enName" placeholder="英文名"></Input>
						</FormItem>
						<FormItem label="账号 :" prop="uNum">
							<Input size="small" v-model="formValidate.uNum" placeholder="成员唯一标识，设定以后不支持修改"></Input>
						</FormItem> -->
                        <FormItem label="性别 :" prop="sex">
                            <RadioGroup v-model="formValidate.sex">
                                <Radio label="1">男</Radio>
                                <Radio label="2">女</Radio>
                            </RadioGroup>
                        </FormItem>

                        <FormItem label="密码 :" prop="password">
                            <Input size="small" type="password" v-model="formValidate.password" placeholder=""></Input>
                        </FormItem>
                        <FormItem label="确认密码 :" prop="password2">
                            <Input size="small" type="password" v-model="formValidate.password2"
                                   placeholder=""></Input>
                        </FormItem>
                        <FormItem label="手机 :" prop="mobile">
                            <Input size="small" v-model="formValidate.mobile" placeholder="成员通过验证该手机后可加入企业"></Input>
                        </FormItem>
                        <!-- <FormItem label="">
							<CheckboxGroup v-model="formValidate.checkbox">
								<Checkbox label="首次登陆修改初始密码"></Checkbox>
							</CheckboxGroup>
						</FormItem> -->
                        </Col>
                    </Row>
                    <Row class="rows">
                        <Col span="12">

                        <FormItem label="座机 :" prop="tel">
                            <Input size="small" v-model="formValidate.tel" placeholder=""></Input>
                        </FormItem>
                        <FormItem label="邮箱 :" prop="email">
                            <Input size="small" v-model="formValidate.email" placeholder=""></Input>
                        </FormItem>
                        </Col>
                    </Row>

                    <Row class="rows">
                        <Col span="12">
                        <FormItem label="部门 :" prop="department">
                            <Input size="small" v-model="formValidate.department" placeholder="请输入部门"></Input>
                        </FormItem>
                        <FormItem label="职务 :" prop="duty">
                            <Input size="small" v-model="formValidate.duty" placeholder=""></Input>
                        </FormItem>
                        </Col>
                    </Row>
                    <!-- <CheckboxGroup v-model="formValidate.checkbox" style="margin:20px 80px;">
                        <Checkbox label="通过邮件或短信添加企业邀请"></Checkbox>
                    </CheckboxGroup> -->
                </Form>
            </div>
            <div class="mainNav">
                <!--<Button type="primary" class="adds" size="small" @click="handleSubmit;toAdd()">保存并继续添加</Button>-->
                <Button type="primary" size="small" @click="handleSubmit">保存</Button>
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
        name: 'memberAdd',
        data() {
            return {
                value1: '',
                modal1: false,
                formValidate: {
                    fullname: '',
                    password: '',
                    password2: '',
                    sex: '',
                    mobile: '',
                    tel: '',
                    email: '',
                    department: '',
                    duty: ''
                },
                ruleValidate: {
                    uNum: [
                        {required: true, message: '账号不能为空', trigger: 'blur'}
                    ],
                    email: [
                        {required: true, message: '邮箱不能为空', trigger: 'blur'},
                        {type: 'email', message: '不符合邮箱格式', trigger: 'blur'}
                    ],
                    sex: [
                        {required: true, message: '请选择性别', trigger: 'change'}
                    ],
                    department: [
                        {required: true, message: '请输入部门', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '密码格式不正确', trigger: 'blur'}
                    ],
                    password2: [
                        {required: true, message: '密码不一致', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            toAdd() {
                this.$router.push('memberAdd')
            },
            handleSubmit() {
                console.log(this.formValidate)
                this.$http.post(this.$api.ADD_USER, {
                    com_id:this.$store.getters.userInfo.com_id,
                    fullname: this.formValidate.fullname,
                    password: this.formValidate.password,
                    password2: this.formValidate.password2,
                    sex: this.formValidate.sex,
                    mobile: this.formValidate.mobile,
                    tel: this.formValidate.tel,
                    email: this.formValidate.email,
                    department: this.formValidate.department,
                    duty: this.formValidate.duty,
                }).then(res => {
                    console.log('添加会员', res);
                    if (res.data.status === '1') {
                        this.$Message.info(res.data.msg);
                    }
                    this.$router.go(-1)
                }, err => {
                    this.$Message.error('网络错误');
                    this.$router.go(-1)
                });

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
        margin-left: 100px;
        padding: 8px 13px;
    }

    .photos {
        position: absolute;
        top: 6px;
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
