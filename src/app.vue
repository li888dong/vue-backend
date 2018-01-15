<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app',
        mounted() {
            this.$router.push('login');
            if (sessionStorage.getItem('mobile') && sessionStorage.getItem('password')) {
                this.$http.post(this.$api.LOGIN, {
                    mobile: sessionStorage.getItem('mobile'),
                    password: sessionStorage.getItem('password')
                }).then(res => {
                    console.log('登陆', res);
                    if (res.data.status === '1') {
                        let userinfo = res.data.userinfo;
                        this.$store.dispatch('setUserInfo', userinfo);
                        this.$router.push('mains');
                    } else {
                        this.$router.push('login');
                    }
                }, err => {
                    this.$router.push('login');
                })
            }

        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    table {
        width: 100%;
    }
</style>
