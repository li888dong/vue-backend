<template>
    <div class="layout">
        <div class="layout-top">
            <mainTop></mainTop>
        </div>
        <Row class="mianBox">
            <div class="layout-content">
                <router-view></router-view>
            </div>
        </Row>
    </div>
</template>

<script>
    import mainTop from '@/components/mainPage/mainTop'

    export default {
        name: 'mains',
        data() {
            return {
                msg: 'testp',
                value1: 0
            }
        },
        watch: {
            "$route": function () {
                if (!sessionStorage.getItem('access_token')) {
                    this.$router.push('login')
                }
            }
        },
        components: {
            mainTop
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    /* 内容盒子 */
    .content {
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid #E4E6E9;
    }

    /*顶部盒子样式*/
    .top-Lv1 {
        margin-bottom: 10px;
    }

    /*右侧带背景Nav*/
    .mainNav {
        padding: 6px 10px;
        background-color: #DFE9F5;
    }

    .mainNav button {
        margin-right: 10px;
        background-color: #fff;
    }

    /* 版心1170 */
    .layout {
        height: 949px;
        background: #F9F9F9;
    }

    .layout-content {
        width: 1080px;
        margin: 0 auto;
    }

    .layout .layout-top {
        background: #fff;
        margin-bottom: 20px;
        border-bottom: 1px solid #ccc;
    }

    .mianBox {

    }

</style>
