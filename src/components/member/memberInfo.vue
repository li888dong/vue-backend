<template>
    <div>
        <div class="top-Lv1">
            <span class="tittle-lv1">{{com_name}}(<span>{{members}}</span>人)</span>
            <!--<div class="fr" style="margin-top:6px;">-->
            <!--<a href="javascript:void(0)">修改名称</a> | -->
            <!--<a href="javascript:void(0)">添加子部门</a>-->
            <!--</div>-->
        </div>
        <div class="mainContent">
            <div class="mainNav">
                <Button type="ghost" size="small" @click="toAdd()">添加成员</Button>
                <!--<Button type="ghost" size="small">设置所在部门</Button>-->
                <Button type="ghost" size="small" @click="del">删除</Button>
            </div>
            <Table size='small'
                   :columns="columns1"
                   :data="data2"
                   @on-selection-change="selectItem"></Table>
            <div class="mainNav">
                <Button type="ghost" size="small" @click="toAdd()">添加成员</Button>
                <!--<Button type="ghost" size="small">设置所在部门</Button>-->
                <Button type="ghost" size="small" @click="del">删除</Button>
            </div>
        </div>
        <Page
            :total="total"
            :current="page"
            :page-size="limit"
            show-total
            show-elevator
            v-on:on-change="pageChange"
        ></Page>
        <Modal
            v-model="delModal"
            @on-ok="confirmDel">
            <p>确认删除？</p>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'memberInfo',
        data() {
            return {
                value1: '',
                columns1: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '姓名',
                        key: 'fullname',
                        render: (h, params) => {
                            return h('div', [
                                h('span', {
                                    style: {
                                        color: '#4fa8f9',
                                        cursor: 'pointer'
                                    },
                                    on: {
                                        click: () => {
                                            console.log(params)
                                            this.toMenberDetail(params.row)
                                        }
                                    }
                                }, params.row.fullname)
                            ])
                        }
                    },
                    {
                        title: '职务',
                        key: 'duty'
                    },
                    {
                        title: '部门',
                        key: 'department'
                    },
                    {
                        title: '手机',
                        key: 'mobile',
                        width: 130,
                    },
                    {
                        title: '邮箱',
                        key: 'email',
                        width: '160'
                    },
                    {
                        title: '权限',
                        key: 'n5',
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px',
                                        color: ' #2d8cf0',
                                    },
                                    on: {
                                        click: () => {
                                            this.$store.dispatch('setPage', '3');
                                            this.$router.push({path:'/permission',query:{curinfo: params.row}})
                                        }
                                    }
                                }, '修改')
                            ]);
                        }
                    },
                    {
                        title: '操作',
                        key: 'n6',
                        width: '160',
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px',
                                        color: ' #2d8cf0',
                                    },
                                    on: {
                                        click: () => {
                                            this.del(params.row.id)
                                        }
                                    }
                                }, '删除'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small',
                                    },
                                    style: {
                                        color: ' #2d8cf0',
                                    },
                                    on: {
                                        click: () => {
                                            this.$router.push({path: 'memberChange', query: {curinfo: params.row}})
                                        }
                                    }
                                }, '编辑')
                            ]);
                        }
                    }
                ],
                data2: [],
                page: 1,
                limit: 9,
                total: 1,
                delModal: false,
                delId: ''
            }
        },
        computed: {
            com_name: function () {
                return this.$store.getters.comInfo.com_name
            },
            members: function () {
                return this.$store.getters.comInfo.members
            }
        },
        mounted() {
            this.getMemberList();
        },
        methods: {
            del(id) {
                this.delModal = true;
                if (!isNaN(id)) {
                    this.delId = id;
                }
            },
            confirmDel() {
                console.log(this.delId);
                this.$http.post(this.$api.DEL_USER + this.delId).then(res => {
                    console.log('删除会员', res);
                    this.delId = '';
                    this.getMemberList()
                }, err => {
                    console.log('删除会员', err);
                    this.delId = '';
                    this.getMemberList()
                });
            },
            getMemberList() {
                this.$http.post(this.$api.USER_INDEX, {
                    com_id: this.$store.getters.userInfo.com_id,
                    limit: this.limit,
                    page: this.page
                }).then(res => {
                    console.log('会员列表', res);
                    let data = res.data.data;
                    this.data2 = data.data;
                    console.log(this.data2);
                    this.page = data.current_page;
                    this.total = data.total;
                }, err => {
                    this.$api.errcallback(err)
                });
            },
            pageChange(page) {
                this.page = page;
                this.$http.post(this.$api.USER_INDEX, {
                    com_id: this.$store.getters.userInfo.com_id,
                    limit: this.limit,
                    page: this.page
                }).then(res => {
                    console.log('会员列表', res);
                    let data = res.data.data;
                    this.data2 = data.data;
                    console.log(this.data2);
                    this.page = data.current_page;
                    this.total = data.total;
                }, err => {
                    this.$api.errcallback(err)
                });
            },
            toAdd() {
                this.$router.push('memberAdd')
            },
            toMenberDetail(curinfo) {
                this.$router.push({path: 'memberDetails', query: {curinfo: curinfo}})
            },
            selectItem(val) {
                console.log(val)
                let ids = '';
                val.map(i => {
                    ids += i.id + ','
                });
                this.delId = ids
            }
            // tolog(){
            //     console.log(location.hash)
            // }
            // userInfo() {
            //     this.$router.push('memberDetails')
            // }
        }
    }
</script>

<style scoped>
    .mainNav button {
        background-color: #fff;
    }

    .ivu-table-small td button {
        border: 1px;
    }
</style>
