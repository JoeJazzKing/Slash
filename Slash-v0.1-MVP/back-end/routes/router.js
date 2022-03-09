// 接口地址管理
let express = require('express');
let user = require('../controls/user');
let project = require('../controls/project');
let api = require('../config/api');
 
let router = express.Router();
 
// console.log(user.login);
// user-用户管理 
router.post(api.userLogin, user.login);
// router.post(api.userLogout, user.logout);
// router.post(api.userAdd, user.add);
// router.post(api.userUpdateInfo, user.updateInfo);
// router.post(api.userDetail, user.detail);
 
// project-项目管理
// router.post(api.projectAdd, project.add);
// router.post(api.projectDelete, project.delete);
// router.post(api.projectDetail, project.detail);
// router.post(api.projectList, project.list);
 
module.exports = router;