<template>
    <div class="content">
        <Row>
            <Col span="4" class="conLeft">
            <!-- 菜单 -->
                <myBusinessNav></myBusinessNav>
            </Col>
            <Col span="20">
                <router-view></router-view>
            </Col>            
        </Row>
    </div>
</template>

<script>
    import myBusinessNav from '@/components/myBusiness/myBusinessNav'
    
    export default {
        name: 'myBusiness',
        data() {
            return {
            }
        },
        components: {
            'myBusinessNav': myBusinessNav
        }
    }
</script>

<style scoped>
.conLeft {
    padding-top: 12px;
    height: 654px;
    position: relative;
    background-color: #F9FAFC;
    overflow: hidden;
    border-right: 1px dotted #DCE1E6;
}

.tittle-lv1 {
    border-bottom: 1px solid #DCE1E6;
    padding-bottom: 10px;
    margin-bottom: 12px;
}

</style>