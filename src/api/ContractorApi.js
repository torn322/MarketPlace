import Api from './Api'
import {setContractorList} from '../actions/search'

import {setInfo, createContractor, updateContractor} from '../actions/contractor'

class ContractorApi extends Api {
    constructor() {
        super()
        this.apiUrl += 'admin/'
    }

    async get() {
        this.apiUrl += 'get/user'
        await super._get().then(async res => {
            if (res.ok) {
                this._dispatch(setContractorList(await res.json()))
            } else {
                // this._dispatch(setErr(await res.json()))
            }
        })
    }

    async getCurrent(id) {
        this.apiUrl += 'get/' + id
        await super._get().then(async res => {
            if (res.ok) {
                this._dispatch(setInfo(await res.json()))
            } else {
                console.log(await res.json())
            }
        })
    }

    async create(opts = {}) {
        this.apiUrl = 'https://nitinoltender.herokuapp.com/registration/'
        await super._post(opts).then(async res => {
            if (res.ok) {
                this._dispatch(createContractor(await res.json()))
            } else {
                console.log(await res.json())
            }
        })
    }

    async update(opts = {}) {
        this.apiUrl = 'https://nitinoltender.herokuapp.com/user/' + opts.id
        await super._put(opts).then(async res => {
            if (res.ok) {
                this._dispatch(updateContractor(await res.json()))
            } else {
                console.log(await res.json())
            }
        })
    }
}

export default ContractorApi

