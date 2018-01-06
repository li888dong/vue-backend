<template>
    <div class="content">
        <Row>
            <Col span="5" class="mainLeft">
            <div class="logo" :style="{backgroundImage:'url(http://www.cx8o92.cn/'+logoUrl+')'}">

            </div>
            <h3 class="comName">{{name}}</h3>
            <div class="types">
                <p>企业成员: <span> {{members}}人</span></p>
            </div>
            <div class="types">
                主体类型：<span>{{business_scope}} 企业</span>
            </div>
            <a href="javascript:void(0)" class="change" @click="toMyBusinessInfo()">查看企业详情</a>
            <Button type="primary" class="downs"><a :href="versionUrl" style="color: #ffffff!important;">下载智电客户端</a></Button>
            </Col>
            <Col span="19" class="mainRight">
            <h3>管理员，下午好！欢迎开始使用智电售电管理系统</h3>
            <div class="buzou">
                <Steps :current="1">
                    <Step title="下载智电客户端"></Step>
                    <Step title="设置企业成员与权限"></Step>
                    <Step title="使用智电客户端"></Step>
                </Steps>
                <p class="down">
                    <a :href="versionUrl">立即下载 &gt;</a>
                    <a @click="changePage('4')">立即设置 &gt;</a>
                    <a>立即使用 &gt;</a>
                </p>
            </div>
            <p class="newsTip">您有2条消息</p>
            <ul class="messageList">
                <li>一分钟快速了解智电客户端 </li>
                <li>欢迎下载使用智电售电管理系统</li>
            </ul>
            <div class="seavers">
                <p class="useTip">常用入口</p>
                <span class="addUser" @click="toAdds()"> <Icon type="person-add"></Icon><a>添加成员</a> </span>
            </div>
            </Col>
        </Row>

    </div>
</template>

<script>
    export default {
        name: 'MainInfo',
        data() {
            return {
                name: '',
                business_scope: '',
                logoUrl: '',
                members: 0,
                versionUrl:''
            }
        },
        methods: {
            toAdds() {
                this.$router.push('memberAdd')
            },
            toMyBusinessInfo() {
                this.$router.push('myBusiness')
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
            },
            changePage(page) {
                this.$store.dispatch('setPage', page);
                this.$router.push('member');
            }
        },
        mounted() {
            this.getComInfo();
            this.versionUrl = 'http://www.cx8o92.cn/download/windows/smartpower-win-1.0.6.exe'
        }
    }
</script>

<style scoped>
    .mainLeft {
        height: 654px;
        padding: 30px 26px;
        position: relative;
        background-color: #F9FAFC;
    }

    .mainLeft h3 {
        text-align: center;
        font-size: 14px;
        margin-bottom: 12px;
    }

    .mainRight {
        height: 654px;
        padding-top: 30px;
        padding-left: 42px;
        padding-bottom: 50px;
        padding-right: 42px;
        border-left: 1px dotted #E4E6E9;
    }

    .logo {
        width: 100%;
        height: 60px;
        background-color: #D8D8D8;
        margin-top: 20px;
        background-repeat: no-repeat;
        background-size: contain;
        border: 1px solid #E4E6E9;
    }

    .comName {
        line-height: 3;
        border-bottom: 1px solid #E4E6E9;

    }

    .chengyaun {
        color: #787878;
        height: 32px;
        font-size: 13px;
        border-bottom: 1px solid #E4E6E9;
    }

    .chengyaun p {
        line-height: 20px;
        margin-bottom: 12px;
    }

    .chengyaun span {
        color: black;

    }

    .types {
        border-bottom: 1px solid #E4E6E9;
        margin-bottom: 20px;
        line-height: 2;
        color: #787878;
        padding: 12px 0;
    }

    .types span {
        color: black;
        float: right;
    }

    .change {
        float: right;
        margin-right: 10px;
    }

    .downs {
        position: absolute;
        bottom: 50px;
        left: 50%;
        margin-left: -42px;
    }

    .mainRight h3 {
        font-size: 16px;
        margin-bottom: 12px;
    }

    .down a {
        display: inline-block;
        width: 33%;
        padding-left: 5%;
    }

    .buzou {
        margin: 37px;
    }

    .newsTip {
        line-height: 30px;
        color: #787878;
        border-bottom: 1px solid #E4E6E9;
    }

    .messageList li {
        height: 43px;
        line-height: 43px;
        border-bottom: 1px solid #E4E6E9;
    }

    .useTip {
        line-height: 30px;
        color: #787878;
        margin-bottom: 10px;
    }

    .seavers {
        margin-top: 26px;
    }

    .addUser {
        float: left;
        border: 1px solid #CCD0D6;
        border-radius: 4px;
        margin-left: 24px;
        margin-bottom: 24px;
        width: 202px;
        height: 64px;
        font-size: 14px;
        line-height: 64px;
        text-align: center;
        cursor: pointer;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        vertical-align: middle;
    }

    .addUser i {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background-color: #f78181;
        color: #fff;
        font-size: 22px;
        line-height: 38px;
        text-align: center;
        margin-right: 10px;
    }
</style>
