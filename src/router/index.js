import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/mains',
            name: 'mains',
            component: require('@/components/mains').default,
            children: [
                {
                    path: '/mains',
                    name: 'mainInfo',
                    component: require('@/components/mainPage/mainInfo').default
                },
                {
                    path: '/member',
                    name: 'member',
                    component: require('@/components/member/member').default,
                    children: [
                        {
                            path: '/member',
                            name: 'memberInfo',
                            component: require('@/components/member/memberInfo').default
                        },
                        {
                            path: '/memberDetails',
                            name: 'memberDetails',
                            component: require('@/components/member/memberDetails').default
                        },
                        {
                            path: '/memberAdd',
                            name: 'memberAdd',
                            component: require('@/components/member/memberAdd').default
                        },
                        {
                            path: '/memberChange',
                            name: 'memberChange',
                            component: require('@/components/member/memberChange').default
                        },
                        {
                            path: '/memberManage',
                            name: 'memberManage',
                            component: require('@/components/member/memberManage').default
                        },
                    ]
                },
                {
                    path: '/myBusiness',
                    name: 'myBusiness',
                    component: require('@/components/myBusiness/myBusiness').default,
                    children: [
                        {
                            path: '/myBusiness',
                            name: 'myBusinessInfo',
                            component: require('@/components/myBusiness/myBusinessInfo').default
                        },
                        {
                            path: '/permission',
                            name: 'permission',
                            component: require('@/components/permission/permission').default
                        },

                    ]
                },
                {
                    path: '/addInvoice',
                    name: 'addInvoice',
                    component: require('@/components/myBusiness/addInvoice').default,
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: require('@/components/login').default,
        },
        {
            path: '/signIn',
            name: 'signIn',
            component: require('@/components/signIn').default,
        },
        {
            path: '*',
            redirect: '/login'
        }
    ]
})
