/* 
角色管理相关的API请求函数
*/
import request from '@/utils/request'

const api_name = '/admin/roles'

export default {

  /* 
  获取角色分页列表(带搜索)
  */
  getPageList(searchObj) {
    return request({
      url: `${api_name}/list/`,
      method: 'get',
      params: searchObj // url查询字符串或表单键值对
    })
  },

  /* 
  获取某个角色
  */
  getById(id) {
    return request({
      url: `${api_name}/info/`,
      method: 'get',
      params:{
        roleId:id
      }
    })
  },

  /* 
  保存一个新角色
  */
  save(role) {
    return request({
      url: `${api_name}/add`,
      method: 'post',
      data: role
    })
  },

  /* 
  更新一个角色
  */
  updateById(role) {
    return request({
      url: `${api_name}/update`,
      method: 'put',
      data: role
    })
  },

  /* 
  删除角色
  */
  removeByIds(ids) {
    return request({
      url: `${api_name}/del`,
      method: 'delete',
      data: {ids}
    })
  }
}
