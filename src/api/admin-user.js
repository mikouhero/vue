import request from '@/utils/request'

// 查询列表
export function fetchList(query) {
  return request({
    url: '/admin/users',
    method: 'get',
    params: query
  })
}

// 更新用户状态
export function updateStatus(data) {
  return request({
    url: '/admin/user/status',
    method: 'post',
    data
  })
}

export function deleteUser(data) {
  return request({
    url: '/admin/user/delete',
    method: 'post',
    data
  })
}

export function fetchUser(id) {
  return request({
    url: '/admin/user',
    method: 'get',
    params: { id }
  })
}

export function createUser(data) {
  return request({
    url: '/admin/user/add',
    method: 'post',
    data
  })
}

export function updateUser(data) {
  return request({
    url: '/admin/user/update',
    method: 'post',
    data
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: { pv }
  })
}
