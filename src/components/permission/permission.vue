<template>
    <div>

        <Col span="4" class="conLeftTwo">
        <!--<div class="top">-->
        <!--<ButtonGroup size="small">-->
        <!--<Button type="primary">个人权限</Button>-->
        <!--<Button type="ghost">组权限</Button>-->
        <!--</ButtonGroup>-->
        <!--</div>-->
        <div class="main">
            <ul>
                <li v-for="item in memberList" :class="{selected:item.id === curMember}" @click="changeMember(item.id)">
                    <Icon type="person"></Icon>
                    {{item.fullname}}
                </li>
            </ul>
        </div>
        </Col>
        <Col span="16" class="conRight">
        <p class="tittle-lv1" style="margin-bottom:10px;">管理员详情</p>
        <div class="mainNav">
            <Button type="ghost" size="small" @click="transfer">转让创建人</Button>
        </div>
        <div class="mainContent">
            <!--<p class="topName">{{$store.getters.comInfo.contact}} <span>超级管理员</span></p>-->
            <Form :model="formItem">
                <FormItem>
                    <h3>权限列表</h3>
                        <CheckboxGroup v-for="item in itemList" v-model="formItem.checkbox" style="width: 33%;display: inline-block">
                            <Checkbox :label="item.name">{{item.alias}}</Checkbox>
                        </CheckboxGroup>
                </FormItem>
                <!--<FormItem>-->
                <!--<h3>概况</h3>-->
                <!--<CheckboxGroup v-model="formItem.checkbox">-->
                <!--<Checkbox label="计划进度提醒"></Checkbox>-->
                <!--</CheckboxGroup>-->
                <!--</FormItem>-->
                <!--<FormItem class="kehuGuanli">-->
                <!--<h3>客户管理</h3>-->
                <!--<Row>-->
                <!--<Col span="12">-->
                <!--<CheckboxGroup v-model="formItem.checkbox">-->
                <!--<Checkbox label="新增客户"></Checkbox>-->
                <!--<Checkbox label="配置终端"></Checkbox>-->
                <!--<Checkbox label="下载采集记录"></Checkbox>-->
                <!--<Checkbox label="客户用户"></Checkbox>-->
                <!--</CheckboxGroup>-->
                <!--</Col>-->
                <!--<Col span="12">-->
                <!--<FormItem label="合同管理">-->
                <!--<CheckboxGroup v-model="formItem.checkbox">-->
                <!--<Checkbox label="增"></Checkbox>-->
                <!--<Checkbox label="改"></Checkbox>-->
                <!--<Checkbox label="删"></Checkbox>-->
                <!--<Checkbox label="查"></Checkbox>-->
                <!--</CheckboxGroup>-->
                <!--</FormItem>-->
                <!--</Col>-->
                <!--</Row>-->

                <!--</FormItem>-->
                <!--<FormItem class="yuce">-->
                <!--<h3>预测分析</h3>-->
                <!--<FormItem>-->
                <!--<CheckboxGroup v-model="formItem.checkbox">-->
                <!--<Checkbox label="用户预测审核"></Checkbox>-->
                <!--<Checkbox label="用户预测查看"></Checkbox>-->
                <!--<Checkbox label="用户预测删除"></Checkbox>-->
                <!--</CheckboxGroup>-->
                <!--</FormItem>-->
                <!--<FormItem>-->
                <!--<CheckboxGroup v-model="formItem.checkbox">-->
                <!--<Checkbox label="年度预测审核"></Checkbox>-->
                <!--<Checkbox label="年度预测查看"></Checkbox>-->
                <!--<Checkbox label="年度预测删除"></Checkbox>-->
                <!--<Checkbox label="年度预测导入"></Checkbox>-->
                <!--</CheckboxGroup>-->
                <!--</FormItem>-->
                <!--<FormItem>-->
                <!--<CheckboxGroup v-model="formItem.checkbox">-->
                <!--<Checkbox label="月度预测审核"></Checkbox>-->
                <!--<Checkbox label="月度预测查看"></Checkbox>-->
                <!--<Checkbox label="月度预测删除"></Checkbox>-->
                <!--<Checkbox label="月度预测导入"></Checkbox>-->
                <!--</CheckboxGroup>-->
                <!--</FormItem>-->
                <!--</FormItem>-->
                <!--<FormItem>-->
                <!--<h3>交易管理</h3>-->
                <!--<CheckboxGroup v-model="formItem.checkbox">-->
                <!--<Checkbox label="长协合同管理"></Checkbox>-->
                <!--</CheckboxGroup>-->
                <!--</FormItem>-->
                <!--<FormItem>-->
                <!--<h3>设备管理</h3>-->
                <!--<CheckboxGroup v-model="formItem.checkbox">-->
                <!--<Checkbox label="申请设备入库"></Checkbox>-->
                <!--</CheckboxGroup>-->
                <!--</FormItem>-->
            </Form>
            <Button @click="confirmUpdate" type="primary">确认修改</Button>
        </div>
        </Col>

    </div>
</template>

<script>
    import myBusinessNav from '@/components/myBusiness/myBusinessNav'

    export default {
        name: 'permission',
        data() {
            return {
                theme1: 'light',
                formItem: {
                    checkbox: []
                },
                itemList : [],
                memberList: [],
                page:1,
                curMember:''
            }
        },
        methods: {
            confirmUpdate() {
                let arr = [];
                this.formItem.checkbox.map(i=>{
                    arr.push(i)
                });
                console.log(arr);
                this.$http.post(this.$api.UPDATE_AUTH, {
                    uid: this.curMember,
                    data: arr
                }).then(res => {
                    console.log('更改权限', res);

                }, err => {
                    this.$Message.error('网络错误');
                });
            },
            getAuth() {
                this.$http.get(this.$api.GET_AUTH).then(res => {
                    console.log('权限列表', res);
                    this.itemList = res.data.data;
                }, err => {
                    this.$Message.error('网络错误');
                });
            },
            getMemberList(){
                this.$http.post(this.$api.USER_INDEX ,{
                    com_id:this.$store.getters.userInfo.com_id,
                    limit:10,
                    page:this.page
                }).then(res => {
                    console.log('会员列表', res);
                    this.memberList = res.data.data.data;
                    this.curMember = this.memberList[0].id
                }, err => {
                    this.$api.errcallback(err)
                });
            },
            changeMember(id){
                this.curMember = id;
                this.getAuth();
            },
            transfer(){
                this.$http.post(this.$api.TRANSFER ,{
                    fromuid:this.$store.getters.userInfo.id,
                    uid:this.curMember
                }).then(res => {
                    this.$Message.info(res.data.msg);
                    this.$router.push('login');
                    console.log('转让管理员', res);
                }, err => {
                    this.$api.errcallback(err)
                });
            }
        },
        beforeMount() {
            this.getMemberList();
            this.getAuth();
        },
        components: {
            myBusinessNav
        }
    }
</script>

<style scoped>
    /* 权限选项字体修改 */
    .ivu-checkbox-wrapper {
        font-size: 13px;
    }

    .conLeftTwo {
        height: 654px;
        position: relative;
        overflow: hidden;
        border-right: 1px dotted #DCE1E6;
    }

    .top {
        padding: 12px 10px;
        border-bottom: 1px solid #DCE1E6;
    }

    .ivu-btn-group {
        width: 100%;
    }

    .ivu-btn-group button {
        width: 50%;
        height: 26px;
        padding: 0;
        border: 1px solid #2d8cf0;
    }

    .main {
        padding: 12px 6px;
    }

    .main li {
        padding: 5px 10px;
        font-size: 13px;
        height: 28px;
        cursor: pointer;
    }
    .main li.selected{
        background: #2d8cf0;
        color: #fff;
    }
    .main li i {
        margin-left: 2px;
        margin-right: 8px;
        font-size: 14px;
        line-height: 21px;
        vertical-align: middle;
    }

    .conRight {
        padding: 10px 26px;
    }

    .mainNav {
        border-bottom: 1px solid #ccc;
    }

    .mainContent h3 {
        height: 26px;
        font-weight: 400;
    }

    .topName {
        font-size: 14px;
        padding: 10px 0;
        border-bottom: 1px solid #DCE1E6;
        margin-bottom: 10px;
    }

    .topName span {
        font-size: 12px;
        color: #ccc;
        margin-left: 10px;
    }

    .ivu-form-item {
        margin-bottom: 10px;
    }

    .yuce .ivu-form-item {
        margin-bottom: 0;
    }

    .kehuGuanli .ivu-form-item {
        height: 33px;
        margin-bottom: 0;
    }
</style>
