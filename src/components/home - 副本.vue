<template>
  <Row class="layout">
    <Menu mode="horizontal" active-name="1" class="layout-top">
      <div class="layout-logo">
      </div>
      <div class="layout-nav">
          <MenuItem name="1">
              产品
          </MenuItem>
          <MenuItem name="2">
              智能硬件
          </MenuItem>
          <MenuItem name="3">
              客户案例
          </MenuItem>
          <MenuItem name="4">
              服务
          </MenuItem>
          <MenuItem name="5">
              下载智电
          </MenuItem>
          <Button type="primary" style="margin-left:30px;">企业注册</Button><Button type="ghost">企业登录</Button>
      </div>
    </Menu>
    <div class="banner">
      <Carousel v-model="value1" loop>
          <CarouselItem>
              <div class="demo-carousel">1</div>
          </CarouselItem>
          <CarouselItem>
              <div class="demo-carousel">2</div>
          </CarouselItem>
          <CarouselItem>
              <div class="demo-carousel">3</div>
          </CarouselItem>
          <CarouselItem>
              <div class="demo-carousel">4</div>
          </CarouselItem>
      </Carousel>
    </div>
    <Row class="proList">
      <Col span="8">
        <img src="" alt="">
        <h3>售电管理</h3>
        <p>实现售电分配计划于管理，实现售电公司可持续发展的利润最大化</p>
      </Col>
      <Col span="8">
        <img src="" alt="">
        <h3>售电管理</h3>
        <p>实现售电分配计划于管理，实现售电公司可持续发展的利润最大化</p>
      </Col>      
      <Col span="8">
        <img src="" alt="">
        <h3>售电管理</h3>
        <p>实现售电分配计划于管理，实现售电公司可持续发展的利润最大化</p>
      </Col>
      <Col span="8">
        <img src="" alt="">
        <h3>售电管理</h3>
        <p>实现售电分配计划于管理，实现售电公司可持续发展的利润最大化</p>
      </Col>
      <Col span="8">
        <img src="" alt="">
        <h3>售电管理</h3>
        <p>实现售电分配计划于管理，实现售电公司可持续发展的利润最大化</p>
      </Col>
      <Col span="8">
        <img src="" alt="">
        <h3>售电管理</h3>
        <p>实现售电分配计划于管理，实现售电公司可持续发展的利润最大化</p>
      </Col>      
      <Col span="8">
        <img src="" alt="">
        <h3>售电管理</h3>
        <p>实现售电分配计划于管理，实现售电公司可持续发展的利润最大化</p>
      </Col>
      <Col span="8">
        <img src="" alt="">
        <h3>售电管理</h3>
        <p>实现售电分配计划于管理，实现售电公司可持续发展的利润最大化</p>
      </Col>
      <Col span="8">
        <img src="" alt="">
        <h3>售电管理</h3>
        <p>实现售电分配计划于管理，实现售电公司可持续发展的利润最大化</p>
      </Col>
      <Col span="8">
        <img src="" alt="">
        <h3>售电管理</h3>
        <p>实现售电分配计划于管理，实现售电公司可持续发展的利润最大化</p>
      </Col>      
      <Col span="8">
        <img src="" alt="">
        <h3>售电管理</h3>
        <p>实现售电分配计划于管理，实现售电公司可持续发展的利润最大化</p>
      </Col>
      <Col span="8">
        <img src="" alt="">
        <h3>售电管理</h3>
        <p>实现售电分配计划于管理，实现售电公司可持续发展的利润最大化</p>
      </Col>
    </Row>
  </Row>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'testp',
      value1: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 版心1170 */
  .layout{
    width: 1170px;
    background: #fff;
    margin: 0 auto;
    }
    .layout-top {
      overflow: hidden;
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
      width: 634px;
      float: right;
    }
    .layout-nav button {
      width: 90px;
      height: 60px;
      border-radius: 0;
    }
    .ivu-menu::after {
      display: none;
    }
    .banner {
      height: 539px;
      line-height: 539px;
      background-color: skyblue;
      font-size: 60px
    }
    .proList div{
      height: 278px;
    }
    .proList img {
      width: 100%;
      height: 176px;
      background-color: red
    }










    .layout-assistant{
      width: 300px;
      margin: 0 auto;
      height: inherit;
    }
    .layout-breadcrumb{
      padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
</style>
