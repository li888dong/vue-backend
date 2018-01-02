<template>
    <div>
        <div class="top-Lv1">
            <span class="tittle-lv1">成员详情</span>
        </div>
        <div class="mainContent">
            <div class="mainNav">
                <!-- @click="toAdd()" -->
                <Button size="small" @click="$router.go(-1)">&lt; 返回</Button>
                |
                <Button size="small" @click="toMemberChange()">编辑</Button>
                |
                <Button type="ghost" size="small" @click="setDisable">禁用</Button>
                <Button type="ghost" size="small">删除</Button>
            </div>
            <div class="froms">
                <Form ref="formValidate" :label-width="80">
                    <Row class="rows">
                        <Col span="12">
                        <Avatar icon="person" size="large" class="photos"/>
                        <p style="font-size:16px;margin-left:80px;">{{curinfo.fullname}}  <i class="iconfont icon-nanren"></i></p>
                        <!--<FormItem label="账号 :" style="margin-left:44px;" prop="uNum">-->
                            <!--Guozhongjie-->
                        <!--</FormItem>-->
                        </Col>
                        <Col span="12">
                        <div class="a"></div>
                        </Col>
                    </Row>
                    <Row class="rows">
                        <Col span="12">
                        <FormItem label="手机 :" prop="phone">
                            <span>{{curinfo.mobile}}</span>
                        </FormItem>
                        <FormItem label="座机 :" prop="tells">
                            <span>{{curinfo.tel}}</span>
                        </FormItem>
                        <FormItem label="邮箱 :" prop="mail">
                            <span>{{curinfo.email}}</span>
                        </FormItem>
                        </Col>
                    </Row>

                    <Row class="rows">
                        <Col span="12">
                        <FormItem label="部门 :">
                            <span>{{curinfo.department}}</span>
                        </FormItem>
                        <FormItem label="职务 :" prop="duty">
                            <span>{{curinfo.duty}}</span>
                        </FormItem>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'memberDetails',
        data() {
            return {
                value1: '',
                modal1: false,
//                formValidate: {
//                    name: '',
//                    mail: '',
//                    gender: 'male',
//                    department: '河南众企联合售电有限公司',
//                    password: '',
//                    passwordTwo: '',
//                }
            }
        },
        computed:{
            curinfo:function () {
                return this.$route.query.curinfo
            }
        },
        methods: {
            toAdd() {
                this.$router.push('memberAdd')
            },
            toMemberChange() {
                this.$router.push({path:'/memberChange',query:{curinfo:this.curinfo}})
            },
            setDisable(){
                this.$http.post(this.$api.DISABLE_USER, {
                    id:this.curinfo.id,
                    Status:0
                }).then(res => {
                    console.log('禁用会员', res);

                }, err => {
                    this.$Message.error('网络错误');
                });
            },
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        },

    }
</script>

<style scoped>
    .mainNav button {
        background-color: #fff;
    }

    .mainNav .adds:hover {
        opacity: 0.8;
    }

    .froms {
        padding: 8px 13px;
    }

    .photos {
        position: absolute;
        top: -6px;
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
