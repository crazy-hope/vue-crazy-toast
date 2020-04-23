import Vue from 'vue'
import CrazyToast from './index.vue'

let newInstance = null
let ExtendCrazyToast = Vue.extend(CrazyToast)

const caller = (vue, options) => {
    if(newInstance) return false
    newInstance = new ExtendCrazyToast 
    Object.assign(newInstance, options)
    document.body.appendChild(newInstance.$mount().$el)
    return newInstance
}

const install = (vue, options) => {
    if(install.installed) return false
    install.installed = true
    vue.prototype.$crazyToast = caller(options)
}

export default {
    install
}