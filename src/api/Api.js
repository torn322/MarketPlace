import {store} from '../store/configStore'




class Api {
    constructor() {
        this.apiUrl = 'https://nitinoltender.herokuapp.com/'
        this.headers = {
            Authorization: 'Basic YWRtaW46YWRtaW4='
        }
    }

    _dispatch(action) {
        store.dispatch(action)
    }

    _getUrlParams(params) {
        let paramsStr = '?'

        for (let key in params) {
            if (paramsStr != '?') {
                paramsStr += "&";
            }
            paramsStr += key + "=" + encodeURIComponent(params[key]);
        }

        return paramsStr
    }

    async _get(opts = {}) {
        opts.headers = this.headers
        let apiUrl = this.apiUrl
        if (opts.params) 
            apiUrl += this._getUrlParams(opts.params)

        return await fetch(apiUrl, opts)
    }

    async _put(opts = {}) {
        this.headers['content-type'] = 'application/json'
        
        const body = JSON.stringify(opts.body)

        const params = {
            method: 'PUT',
            headers: this.headers,
            body: body
        }

        return await fetch(this.apiUrl, params)
    }

    async _post(opts = {}) {
        this.headers['content-type'] = 'application/json'

        const body = JSON.stringify(opts.body)

        const params = {
            method: 'POST',
            headers: this.headers,
            body: body
        }

        return await fetch(this.apiUrl, params)
    }

    async _delete(opts = {}) {
        const params = {
            method: 'DELETE',
            headers: this.headers,
        }

        return await fetch(this.apiUrl, params)
    }


}

export default Api