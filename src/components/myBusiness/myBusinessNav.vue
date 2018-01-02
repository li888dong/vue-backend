<template>
    <Menu theme='light' :active-name="curPage">
        <MenuItem name='2' @click.native="changePage('2')">
            <i class="iconfont icon-qiye"></i>
            企业信息
        </MenuItem>
        <MenuItem name='3' @click.native="changePage('3')">
            <i class="iconfont icon-iconfontjinzhi"></i>
            权限管理
        </MenuItem>
    </Menu>
</template>

<script>
    export default {
        name: 'myBusinessNav',
        data() {
            return {

            }
        },
        computed:{
            curPage:function () {
                return this.$store.getters.curPage
            }
        },
        methods: {
            changePage(page){
                this.$store.dispatch('setPage',page);
                if(page==='2'){
                    this.$router.push('myBusiness')
                }else if (page === '3'){
                    this.$router.push('permission')
                }
            }
        }
    }
</script>

<style scoped>
/* 重置导航样式 */
.ivu-menu-light {
    background: inherit;
}
.ivu-menu-vertical .ivu-menu-item, .ivu-menu-vertical .ivu-menu-submenu-title {
    padding: 10px 32px;
    padding-right: 0;
}
.ivu-menu-item-selected {
    background: #2d8cf0;
    color: #FFF;
}
.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
    color: #FFF;
}
.ivu-menu-vertical .ivu-menu-item:hover, .ivu-menu-vertical .ivu-menu-submenu-title:hover {
    background: #2d8cf0;
}
</style>
