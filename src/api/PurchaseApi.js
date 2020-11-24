import {setPurchaseList, setErr, } from '../actions/search'
import {setInfo, updatePurchase, createPurchase, deletePurchase} from '../actions/purchase'
import Api from './Api'





class PurchaseApi extends Api {
    constructor() {
        super()
        this.apiUrl += 'purchase/'
    }     

    async get(params) {
        await super._get({params}).then(async res => {
            if (res.ok) {
                this._dispatch(setPurchaseList(await res.json()))
            } else {
                this._dispatch(setErr(await res.json()))
            }
        })
    }

    async getCurrent(id) {
        this.apiUrl += id
        await super._get().then(async res => {
            if (res.ok) {
                this._dispatch(setInfo(await res.json()))
            } else {
                console.log(await res.json())
            }
        })
    }

    async update(opts = {}) {
        this.apiUrl += opts.id
        await super._put(opts).then(async res => {
            if (res.ok) {
                this._dispatch(updatePurchase(await res.json()))
            } else {
                console.error(await res.json())
            }
        })
    }

    async create(opts = {}) {
        this.apiUrl += '0fe52e56-6dc1-473b-b719-bbdf099cfa55'
        await super._post(opts).then(async res => {
            if (res.ok) {
                this._dispatch(createPurchase(await res.json()))
            } else {
                console.error(await res.json())
            }
        })
    }

    async delete(id) {
        this.apiUrl += id
        await super._delete().then(async res => {
            if (res.ok) {
                this._dispatch(deletePurchase(await res.json()))
            } else {
                console.error(await res.json())
            }
        })
    }
    
}

export default PurchaseApi