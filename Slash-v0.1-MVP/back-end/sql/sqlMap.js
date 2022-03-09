const sqlMap = {
    user: {
      // 登陆
      login: 'select * from user where email = ? and password = ? and state != 0',
      // 新增用户
      add: 'insert IGNORE into user (name, password, email, type, phone, state) values (?, ?, ?, ?, ?, ?)',
      // 更新用户信息
      updateInfo: 'update user set name = ?, password = ?, email = ?, update_time = ? where id = ? and type != 1 and state != 0',
      // 更改用户状态
      updateState: 'update user set state = ?, where id = ? and type != 1 and state != 0',
      // 获取用户信息
      getDetail: 'select * from user where id = ? and state != 0'
    },
    project: {
      // 新增项目
      add: 'insert into project (userId, name, create_time, update_time) values (?, ?,?, ?)',
      // 删除项目
      delete: 'delete from project where id = ?',
       // 查询项目列表
      selectList: 'select project.id, userId, user.name as userName, project.create_time, project.update_time, project.state from project,user where project.userId = user.id and project.state != 0',
     
    }
  }
  module.exports = sqlMap;