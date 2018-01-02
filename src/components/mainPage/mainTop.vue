<template>
    <Menu mode="horizontal" :active-name="curPage" class="layout-content">
        <div class="layout-logo">
        </div>
        <div class="layout-nav">
            <MenuItem name="1" @click.native="changePage('1')">
                首页
            </MenuItem>
            <MenuItem name="4" @click.native="changePage('4')">
                企业成员
            </MenuItem>
            <MenuItem name="3" @click.native="changePage('3')">
                成员权限
            </MenuItem>
            <!-- <MenuItem name="4" @click.native="$router.push('myBusiness')">
                我的企业
            </MenuItem> -->
        </div>
        <Button type="ghost" class="loginOut" @click="toLoginOut()">退出登录</Button>
    </Menu>
</template>

<script>
    export default {
        name: 'mainTop',
        data() {
            return {

            }
        },
        computed:{
            curPage:function () {
                return this.$store.getters.curPage
            }
        },
        mounted() {

        },
        methods: {
            toLoginOut() {
                this.$router.push('/login')
            },
            changePage(page){
                this.$store.dispatch('setPage',page);
                if (page === '1'){
                    this.$router.push('mains')
                } else if(page==='4'){
                    this.$router.push('member')
                }else if (page === '3'){
                    this.$router.push('permission')
                }
            }

        }
    }
</script>

<style scoped>
    .ivu-menu-horizontal.ivu-menu-light:after {
        display: none;
    }

    .layout-logo {
        width: 100px;
        height: 30px;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 0px;
        background-image: url('../../assets/logo.png');
        background-repeat: no-repeat;
        background-size: contain;
    }

    .layout-nav {
        width: 420px;
        margin: 0 auto;
    }

    .ivu-menu::after {
        display: none;
    }

    .layout-content {
        width: 1080px;
        margin: 0 auto;
    }

    .loginOut {
        float: right;
        margin-top: 14px;
        margin-right: 0px;
        border-color: #2d8cf0;
        color: #2d8cf0;
    }

</style>
