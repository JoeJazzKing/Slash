let path = '/SLASH-V0.1-MVP/back-end/api';
 
module.exports = {
    // user-用户管理
    userLogin: path + '/user/login', // 用户登录
    userLogout: path + '/user/logout', // 用户登出
    userAdd: path + '/user/add', // 新增用户
    userUpdateInfo: path + '/user/updateInfo', // 更新用户信息
    // userUpdateState: path + '/user/updateState', // 更新用户状态
    userDetail: path + '/user/detail', // 获取用户详情
 
    // project-项目管理
    projectAdd: path + '/project/add', // 新增项目
    projectDelete: path + '/project/delete', // 删除项目
    projectList: path + '/project/list' // 获取项目列表
};