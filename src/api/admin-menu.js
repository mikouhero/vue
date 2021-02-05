import request from '@/utils/request'

// 查询列表
export function fetchMenuList(query) {
    return request({
        url: '/admin/menus',
        method: 'get',
        params: query
    })
}


export function deleteMenu(data) {
    return request({
        url: '/admin/menu/delete',
        method: 'post',
        data
    })
}

export function addMenu(data) {
    return request({
        url: '/admin/menu/add',
        method: 'post',
        data
    })
}

export function updateMenu(data) {
    return request({
        url: '/admin/menu/update',
        method: 'post',
        data
    })
}

