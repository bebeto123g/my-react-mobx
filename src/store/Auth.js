import { makeAutoObservable } from 'mobx'

class Auth {
    isLogin = false

    constructor() {
        makeAutoObservable(this)
    }

    login() {
        this.isLogin = true
    }

    logout() {
        this.isLogin = false
    }

    toggle() {
        this.isLogin = !this.isLogin
    }
}

export default new Auth()
