import request from '@/utils/request'

// 查询列表
export function fetchRoleList(query) {
  return request({
    url: '/admin/roles',
    method: 'get',
    params: query
  })
}

export function deleteRole(data) {
  return request({
    url: '/admin/role/delete',
    method: 'post',
    data
  })
}

export function addRole(data) {
  return request({
    url: '/admin/role/add',
    method: 'post',
    data
  })
}

export function updateRole(data) {
  return request({
    url: '/admin/role/update',
    method: 'post',
    data
  })
}

export function getRoleAuth(data) {
  return request({
    url: '/admin/role/roleAuth',
    method: 'get',
    params: data
  })
}
