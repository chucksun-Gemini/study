import http from '@/utils/http'

let version = "/api/1.0"
let id = null
export default {
    // restful路由：获得stu表中全部数据
    getAuthAPI(params) {
        return http.get(`${version}/studetail/`, params)
    },
    // restful路由：stu表末尾新增一条记录，promise语法.then会返回这条记录
    postStudetailAPI(params) {
        return http.post(`${version}/studetail/`, params)
    },
    deleteStudetailAPI(params) {
        // put方法后端不需要ID，路由需要
        id = params
        return http.delete(`${version}/studetail/${id}/`)
    }
}