import request from '@/utils/request'

const api_name = '/admin/user'

/*
登陆
*/
//对外暴露登录接口函数
export function login(data) {
  return request({
    url: `${api_name}/login`,
    method: 'post',
    data
  })
}
//对外暴露获取用户信息的函数
export function getInfo(token) {
  return request({
    url: `${api_name}/info`,
    method: 'get',
    params: { token }
  })
}
//对外暴露退出登录函数
export function logout() {
  return request({
    url: `${api_name}/logout`,
    method: 'post'
  })
}







/* 
获取当前用户的菜单权限列表
*/
export function getMenu() {
  return request('/admin/acl/index/menu')
}


/* 
获取后台用户分页列表(带搜索)
*/
export function getPageList(page, limit, searchObj) {
  return request({
    url: `${api_name}/list/${page}/${limit}`,
    method: 'get',
    params: searchObj
  })
}

/* 
根据ID获取某个后台用户
*/
export function getById(id) {
  return request({
    url: `${api_name}/get/${id}`,
    method: 'get'
  })
}

/* 
保存一个新的后台用户
*/
export function add(user) {
  return request({
    url: `${api_name}/add`,
    method: 'post',
    data: user
  })
}

/* 
更新一个后台用户
*/
export function update(user) {
  return request({
    url: `${api_name}/update`,
    method: 'put',
    data: user
  })
}

/* 
获取某个用户的所有角色
*/
export function getRoles(userId) {
  return request({
    url: `${api_name}/toAssign/${userId}`,
    method: 'get'
  })
}

/* 
给某个用户分配角色
roleId的结构: 字符串, 'rId1,rId2,rId3'
*/
export function assignRoles(userId, roleId) {
  return request({
    url: `${api_name}/doAssign`,
    method: 'post',
    data: {
      userId,
      roleId
    }
  })
}

/* 
删除某个用户

/* 
批量删除多个用户
ids的结构: ids是包含n个id的数组
*/
export function removeUsers(ids) {
  return request({
    url: `${api_name}/del`,
    method: 'delete',
    data: ids
  })
}
