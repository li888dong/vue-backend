<template>
  <div class="layout">
    <div class="layout-top">
      <Menu mode="horizontal" active-name="1" class="layout-content">
        <div class="layout-logo">
        </div>
        <div class="layout-nav">
            <MenuItem name="1">
                首页
            </MenuItem>
            <MenuItem name="2">
                企业成员
            </MenuItem>
            <MenuItem name="3">
                成员权限
            </MenuItem>
            <MenuItem name="4">
                我的企业
            </MenuItem>
        </div>
        <Button type="ghost" class="loginOut">退出登录</Button>
      </Menu>
    </div>
    <Row class="mianBox">
      <div class="layout-content">
          <member></member>
      </div>
    </Row>
  </div>
</template>

<script>


export default {
  name: 'home',
  data () {
    return {
      msg: 'testp',
      value1: 0
    }
  },
  components : {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 主页步奏条样式重置 */
.homeRight .ivu-steps .ivu-steps-title {
    display: block;
    padding-left: 16px;
}
.homeRight .ivu-steps .ivu-steps-head-inner {
  margin-left: 36px;
  margin-right: 36px;
  margin-bottom: 36px;
  width: 52px;
  height: 52px;
  line-height: 52px;
  font-size: 30px;
}
.homeRight .ivu-steps .ivu-steps-tail {
  top: 26px;
}
.ivu-steps .ivu-steps-head-inner>.ivu-steps-icon.ivu-icon{
  font-size: 52px;
}
/* 样式重置 */
html,body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,form,img {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,ol {
  list-style: none
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.tittle-lv1 {
    font-size: 16px;
}
/* 内容盒子 */
.content {
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #E4E6E9;
}

/* 版心1170 */
.layout{
  height: 1000px;
  background: #F9F9F9;
}
.layout-content {
  width: 1170px;
  margin: 0 auto;
}
.layout-top {
  background: #fff;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
}
.ivu-menu-horizontal.ivu-menu-light:after {
  display: none;
}
.layout-logo{
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav{
  width: 420px;
  margin: 0 auto;
}
.ivu-menu::after {
  display: none;
}
.loginOut {
  float: right;
  margin-top: 14px;
  margin-right: 20px;
  border-color: #2d8cf0;
  color: #2d8cf0;
}


.mianBox {

}

</style>
