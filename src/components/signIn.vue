<template>
    <div>
        <div class="layout-top">
            <div class="layout-content">
                <span class="layout-logo fl"></span>
                <Button type="primary" class="loginIn fr" @click="toLogin()">企业登录</Button>
            </div>
        </div>
        <div class="mains">
            <div class="content">
                <div class="tittle-lv1">注册智电客户端</div>
                <Form :model="formRight" :label-width="100" :rules="ruleValidate" @keyup.enter="signin">
                    <div class="mTop">
                        <p>基本信息</p>
                        <!-- <FormItem label="主体类型" prop="tipes">
                            <Select v-model="formRight.types" placeholder="">
                                <Option value="qiye">企业</Option>
                                <Option value="jigou">机构</Option>
                                <Option value="zuzhi">组织</Option>
                            </Select>
                            <i>包括企业及其分支机构</i>
                        </FormItem> -->
                        <FormItem label="企业名称" prop="name">
                            <Input v-model="formRight.name" placeholder="由4~18个中文、英文、数字及下划线组成"></Input>
                        </FormItem>

                    </div>
                    <div class="mTop">
                        <p>管理员信息</p>
                        <FormItem label="姓名" prop="fullname">
                            <Input v-model="formRight.fullname" placeholder="请填写智电客户端管理员的姓名"></Input>
                        </FormItem>
                        <FormItem label="手机" prop="mobile">
                            <Input v-model="formRight.mobile" placeholder="请填写管理员手机号，此号将作为平台登录账号"></Input>
                        </FormItem>
                        <FormItem label="验证码" prop="code">
                            <Input v-model="formRight.code" style="width: 200px" placeholder="请输入手机短信收到的6位验证码"
                                   :maxlength="6" v-on:on-blur="checkMsg"></Input>
                            <a v-if="countdown" style="margin-left:10px;">{{countdown}}</a>
                            <a v-else style="margin-left:10px;" @click="getAuthCode">获取验证码</a><br>
                        </FormItem>
                        <FormItem label="设置密码" class="lines" prop="password">
                            <Input type="password" v-model="formRight.password" placeholder="请填写6-12位字母、数字或下划线组成的密码"></Input>
                        </FormItem>
                        <FormItem label="确认密码" class="lines" prop="password2">
                            <Input type="password" v-model="formRight.password2" placeholder="请填写6-12位字母、数字或下划线组成的密码"></Input>
                        </FormItem>
                        <FormItem label="邮箱" class="lines" prop="email">
                            <Input v-model="formRight.email" placeholder="请填写管理员邮箱"></Input>
                        </FormItem>
                    </div>
                    <div style="text-align:center;color:#ccc;margin-top: 20px;">
                        <CheckboxGroup>
                            <Checkbox v-model="agree" label="我同意并遵守《智电客户端服务协议》"></Checkbox>
                            <Button type="primary" :disabled="!agree||!msgCheck" style="vertical-align: middle"
                                    @click="signin">注册
                            </Button>
                        </CheckboxGroup>
                    </div>
                </Form>
            </div>
        </div>
        <div class="footer">
            &copy;易采
            <!--<div class="layout-content footer-content">-->
            <!--<dl>-->
            <!--<dt>关于我们</dt>-->
            <!--<dd>公司介绍</dd>-->
            <!--<dd>客户案例</dd>-->
            <!--<dd>上午合作</dd>-->
            <!--<dd>联系我们</dd>-->
            <!--</dl>-->
            <!--<dl>-->
            <!--<dt>产品资料</dt>-->
            <!--<dd>产品介绍</dd>-->
            <!--<dd>基础实用手册</dd>-->
            <!--<dd>管理员手册</dd>-->
            <!--<dd>官方指南</dd>-->
            <!--</dl>-->
            <!--<dl>-->
            <!--<dt>服务规则</dt>-->
            <!--<dd>服务条款</dd>-->
            <!--<dd>技术支持</dd>-->
            <!--</dl>-->
            <!--<dl>-->
            <!--<dt>下载智电</dt>-->
            <!--<dd>下载客户端</dd>-->
            <!--<dd>企业注册智电</dd>-->
            <!--</dl>-->
            <!--</div>-->
        </div>
    </div>
</template>

<script>
    import ruleValidate from '../validator'
    export default {
        name: 'login',
        data() {
            return {
                formRight: {
                    name: '',
                    fullname: '',
                    mobile: '',
                    password: '',
                    password2: '',
                    email: '',
                    code: ''
                },
                countdown: 0,
                msgCheck: false,
                agree: false
            }
        },
        computed:{
            ruleValidate:function () {
                return ruleValidate
            }
        },
        methods: {
            getAuthCode() {
                if (this.formRight.mobile.length !== 11) {
                    return false
                }
                this.countdown = 60;
                let _this = this;
                let timer = setInterval(function () {
                    _this.countdown--;
                    _this.countdown < 1 ? clearInterval(timer) : ''
                }, 1000);
                this.$http.get(this.$api.GET_MSG + '?mobile=' + this.formRight.mobile).then(res => {
                    console.log('短信', res);
                }, err => {
                    this.$Message.error('网络错误');
                });
            },
            checkMsg() {
                if (this.formRight.code.length === 6) {
                    this.$http.get(this.$api.CONFIRM_MSG + '?mobile=' + this.formRight.mobile + '&code=' + this.formRight.code).then(res => {
                        console.log('信息验证', res);
                        if (res.data.status) {
                            this.msgCheck = true
                        }
                    }, err => {
                        this.$api.errcallback(err)
                    });
                }
            },
            signin() {
                console.log(this.formRight);
                if (!this.agree) {
                    return false
                }
                this.$Loading.start();
                this.$http.post(this.$api.SIGNIN, {
                    name: this.formRight.name,
                    code: this.formRight.code,
                    fullname: this.formRight.fullname,
                    mobile: this.formRight.mobile,
                    password: this.formRight.password,
                    password2: this.formRight.password2,
                    email: this.formRight.email,
                }).then(res => {
                    console.log('注册成功', res);
                    if (res.data.status === '1') {
                        this.$http.post(this.$api.LOGIN, {
                            mobile: this.formRight.mobile,
                            password: this.formRight.password
                        }).then(res1 => {
                            console.log('登陆', res1);
                            if (res1.data.status === '1') {
                                this.$store.dispatch('setUserInfo', res1.data.userinfo);
                                sessionStorage.setItem('auto', this.auto);
                                //TODO 密码加密
                                if (this.auto === true) {
                                    sessionStorage.setItem('mobile', this.formValidate.name);
                                    sessionStorage.setItem('password', this.formValidate.possw)
                                }
                                this.$Loading.finish();
                                this.$router.push('/myBusiness');
                            } else {
                                this.$Message.error(res.msg);
                                this.$Loading.error();
                                this.$router.push('/login');
                            }
                        }, err => {
                            this.$Message.error('请尝试重新登陆');
                            this.$router.push('/login');
                        });

                    } else {
                        this.$Message.error(res.data.msg);
                    }

                }, err => {
                    this.$Message.error('网络错误');
                    this.$router.push('signIn')
                });
            },
            toLogin() {
                this.$router.push('login')
            },

            getComInfo() {
                this.$http.get(this.$api.COM_INFO + '\/' + this.$store.getters.userInfo.com_id).then(res => {
                    console.log('公司信息', res);
                    let data = res.data.data;
                    this.name = data.com_name;
                    this.business_scope = data.business_scope;
                    this.logoUrl = data.logo;
                    this.members = data.members;
                    this.$store.dispatch('setComInfo', res.data.data)
                }, err => {
                    this.$api.errcallback(err)
                });
            }
        }
    }
</script>

<style scoped>
    .layout-content {
        width: 1080px;
        margin: 0 auto;
    }

    .layout-top {
        width: 100%;
        height: 60px;
        background: #fff;
        border-bottom: 1px solid #ccc;
        margin-bottom: 0;
    }

    .layout-logo {
        width: 100px;
        height: 30px;
        background-image: url('../assets/logo.png');
        background-repeat: no-repeat;
        background-size: contain;
        /*background-color: #5b6270;*/
        border-radius: 3px;
        position: relative;
        top: 15px;
        left: 0px;
    }

    .loginIn {
        margin-top: 14px;
        margin-right: 20px;
    }

    .mains {
        background-color: #F9F9F9;
        padding-top: 20px;
        overflow: hidden;
    }

    .content {
        width: 680px;
        height: 676px;
        margin: 0 auto;
        background-color: #fff;
        border-radius: 4px;
        padding: 40px;
        margin-bottom: 30px;
    }

    .content:hover {
        box-shadow: 1px 0px 2px #ccc;
    }

    .tittle-lv1 {
        text-align: center;
        font-weight: 600;
    }

    .content i {
        position: absolute;
        top: 28px;
        left: 10px;
        font-style: normal;
        color: #ccc;
    }

    .content p {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 20px;
    }

    .footer {
        width: 100%;
        height: 188px;
        background-color: #303036;
        overflow: hidden;
        color: #ccc;
        font-size: 14px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;

    }

    .footer .footer-content {
        width: 30%;
        margin: 20px auto;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
    }

    .mTop {
        padding: 26px 74px;
        padding-bottom: 0;
        border-bottom: 1px solid #DCE1E6;
    }

    .layout-content dl {
        display: inline-block;
        width: 15%;
        vertical-align: top;
        line-height: 2;
    }

    .layout-content dt {
        color: #fff;
        font-size: 14px;
    }

    .layout-content dd {
        color: #aaa;
    }
</style>
