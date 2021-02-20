import request from './request'

const http = {

    get(url, params) {
        const config = {
            method: 'get',
            url: url
        }
        if (params) config.params = params
<<<<<<< HEAD
        console.log("hello test")
=======
        console.log("hello studylog")
>>>>>>> 5696d6a9564e5b25b17ba4e0c85f37d02599b34f
        return request(config)
    },
    post(url, params) {
        const config = {
            method: 'post',
            url: url
        }
        if (params) config.data = params
        return request(config)
    },
    put(url, params) {
        const config = {
            method: 'put',
            url: url
        }
        if (params) config.data = params
        return request(config)
    },
    patch(url, params) {
        const config = {
            method: 'patch',
            url: url
        }
        if (params) config.data = params
        return request(config)
    },
    delete(url, params) {
        const config = {
            method: 'delete',
            url: url
        }
        if (params) config.data = params
        return request(config)
    }
}

export default http