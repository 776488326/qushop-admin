import request from '@/utils/request'

/* 
权限管理相关的API请求函数
*/
const api_name = '/admin/auth'

export default {
  
  /* 
  获取菜单列表
  */
  getPermissionList() {
    return request({
      url: `${api_name}/list`,
      method: 'get'
    })
  },
  
  /* 
  删除一个权限项
  */
  removePermission(permission) {
    return request({
      url: `${api_name}/del`,
      method: "delete",
      data:{permission}
    })
  },
  
  /* 
  添加一个权限项
  */
  addPermission(permission) {
    return request({
      url: `${api_name}/add`,
      method: "post",
      data: permission
    })
  },

  /* 
  更新一个权限项
  */
  updatePermission(permission) {
    return request({
      url: `${api_name}/update`,
      method: "put",
      data: permission
    })
  },

}
