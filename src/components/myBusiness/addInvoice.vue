<template>
    <div class="layout">
        <div class="layout-content">
            <div class="tittle-lv1 top">
                <Button type="ghost" size='small' class="fl" style="margin-top:8px;background-color: #fff;" @click="$router.go(-1)">
                    <Icon type="ios-arrow-back"></Icon>
                    <Icon type="ios-arrow-back"></Icon>
                    返回
                </Button>
                添加发票抬头
            </div>
            <div class="addInvoiceMain">
                <Form :model="formTop" label-position="top" class="froms" @keyup.enter="updateInvoice">
                    <FormItem label="单位名称">
                        <Input v-model="formTop.com_name" style="width: 350px" readonly></Input>
                    </FormItem>
                    <FormItem label="税号">
                        <Input v-model="formTop.tfn" style="width: 350px"></Input>
                    </FormItem>
                    <FormItem label="注册地址">
                        <Input v-model="formTop.reg_address" style="width: 350px"></Input>
                    </FormItem>
                    <FormItem label="电话号码">
                        <Input v-model="formTop.mobile" style="width: 350px"></Input>
                    </FormItem>
                    <FormItem label="开户银行">
                        <Input v-model="formTop.bank_name" style="width: 350px"></Input>
                    </FormItem>
                    <FormItem label="银行账户">
                        <Input v-model="formTop.bank_account" style="width: 350px"></Input>
                    </FormItem>
                    <!--<p>使用成员</p>-->
                    <!--<a>选择部门、成员或标签</a>-->
                    <!--<p>系统将通过团队发送发票抬头给使用成员</p>-->
                    <Button type="primary" style="width:100%;margin-top: 30px;" @click="updateInvoice">保存</Button>
                </Form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'addInvoice',
        data() {
            return {
                formTop: {
                    id: '',
                    com_id: '',
                    com_name: '',
                    tfn: '',
                    reg_address: '',
                    mobile: '',
                    bank_name: '',
                    bank_account: ''
                }
            }
        },
        mounted() {
            this.formTop.com_id = this.$store.getters.comInfo.id;
            this.formTop.com_name = this.$store.getters.comInfo.com_name;
        },
        methods: {
            updateInvoice() {
                console.log(this.formTop);
                this.$http.post(this.$api.COM_INVOICE, this.formTop).then(res => {
                    console.log('发票修改', res);
                    this.$router.go(-1);
                    this.getComInfo();
                }, err => {
                    this.$api.errcallback(err)
                });
            }
        }
    }
</script>

<style scoped>

    .layout-content {
        background-color: #fff;
        border-radius: 5px;
    }

    .top {
        padding: 0 18px;
        text-align: center;
        height: 40px;
        background-color: #F5F5F5;
        line-height: 40px;
        border-bottom: 1px solid #DCE1E6;
    }

    .froms {
        width: 350px;
        margin: 30px auto;
        padding-bottom: 40px;
    }

    .froms input {
        width: 350px;
    }
</style>
