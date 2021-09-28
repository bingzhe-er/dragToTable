// 删除布局模板
function deleteHisTemplate(params) {
    return axios({
        url: '/api',
        method: 'GET',
        params,
    })
}
// 点击布局模板后获取树形结构数据
function getTemplateList(params){
    return axios({
        url: '/api',
        method: 'GET',
        params,
    })
}
// 请求布局模板列表
function getHistoryList(params){
    return axios({
        url: '/api',
        method: 'GET',
        params,
    })
}
// 获取表格数据
function getTableData(data){
    return axios({
        url: '/api',
        method: 'POST',
        data,
    })
}
// 另存为
function submitSaveAs(params){
    return axios({
        url: '/api',
        method: 'POST',
        params,
    })
}
// 编辑后提交
function submitEdit(params){
    return axios({
        url: '/api',
        method: 'POST',
        params,
    })
}
// 保存
function submitSave(data){
    return axios({
        url: '/api',
        method: 'POST',
        data,
    })
}