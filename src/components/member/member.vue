<template>
    <div class="content">
        <Row>
            <!--<Col span="5" class="memberLeft">-->
                <!--<div class="top">-->
                    <!--<Input v-model="value1" icon="search" placeholder="搜索成员、部门"></Input>-->
                    <!--<Icon type="plus" class="add"></Icon>-->
                <!--</div>-->
                <!--<div class="comList">-->
                    <!--<ul>-->
                        <!--<li>-->
                            <!--<i class="iconfont icon-fenjifenyu"></i>-->
                            <!--<span @click="toUserList()">河南众企联合有限公司</span>-->

                            <!--<Poptip v-model="visible" placement="right" class="fr rightChange">-->
                                <!--&lt;!&ndash; <Button>右上</Button> &ndash;&gt;-->
                                <!--<Icon type="android-more-vertical"></Icon>-->
                                <!--<div slot="content">-->
                                    <!--<span>添加子部门</span>-->
                                    <!--<span>修改名称</span>-->
                                    <!--<span>删除</span>-->
                                <!--</div>-->
                            <!--</Poptip><br><br>-->
                        <!--</li>-->
                    <!--</ul>-->
                <!--</div>-->
            <!--</Col>-->
            <Col span="24" class="memberRight">
                <router-view></router-view>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: 'member',
        data(){
            return {
                value1: '',
                visible: false
            }
        },
        methods: {
            userInfo(index){
                console.log(index)
            },
            toUserList(){
                this.$router.push('member')
            }
        }
    }
</script>

<style scoped>

.memberLeft {
    height: 654px;
    position: relative;
    background-color: #F9FAFC;
}

.memberRight {
    height: 654px;
    padding: 16px;
    border-left: 1px dotted #E4E6E9;
}
.top {
    padding: 10px;
    padding-right: 40px;
    position: relative;
    border-bottom: 1px solid #E4E6E9;
    margin-bottom: 15px;
}
.top .add {
    position: absolute;
    top: 16px;
    right: 10px;
    font-size: 18px;
    cursor: pointer;
    width: 20px;
    height: 20px;
    text-align: center;
}
.top .add:hover{
    background-color: #ccc;
}
.comList li {
    font-size: 14px;
    padding-left: 30px;
    padding-right: 10px;
    background-color: #2d8cf0;
    color: #fff;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
}
.comList li i{
    font-size: 18px;
    line-height: 28px;
    vertical-align: top;
}
.rightChange {
    padding: 2px 0;
}
.rightChange span{
    display: block;
    width: 98px;
    height: 26px;
    padding: 4px 9px;
    color: #000;
}
.rightChange span:hover{
    background-color: #2d8cf0;
    color: #fff;
}
</style>
