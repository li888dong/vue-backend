import Vue from 'vue'
const vue = new Vue();

// 获取token
export const TOKEN = '/oauth/token';
// 登陆
export const LOGIN = '/api/login/web';

// 注册
export const SIGNIN = '/api/companies';
// 短信接口
export const GET_MSG = '/api/login/sendcode';
// // 短信验证
export const CONFIRM_MSG = '/api/login/verifycode';
// 企业详情
export const COM_INFO = '/api/companies';

// 企业信息修改
export const COM_UPDATE = '/api/companies/update';

// 发票修改
export const COM_INVOICE = '/api/invoice';
// 会员列表
export const USER_INDEX = '/api/users/index';
// 添加会员
export const ADD_USER = '/api/users';
//编辑会员
export const UPDATE_USER = '/api/users/update';
// 删除会员
export const DEL_USER = '/api/users/del/';
// 禁用会员
export const DISABLE_USER = '/api/users/setstatus';
// 获取所有权限
export  const GET_AUTH = '/api/permission';
// 转让联系人
export const TRANSFER = '/api/users/transfer';
//修改权限
export const UPDATE_AUTH = '/api/permission/update';
// 上传图片
export const UPLOAD_IMG = '/api/file/uploadimg';
export const errcallback = function (err) {
    vue.$Modal.error({
        content: '请求出错'
    });
    console.error("请求出错"+err)
}
