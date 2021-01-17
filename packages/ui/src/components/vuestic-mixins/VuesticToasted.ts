import Toasted from 'vue-toasted'
import Vue from 'vue'

const toastOptions = {
  theme: 'none',
  position: 'bottom-center',
  className: 'vuestic-toast',
  iconPack: 'fontawesome',
  duration: 2500,
}

//@ts-ignore
Vue.use(Toasted, toastOptions)

export default {
  methods: {
    showToast (msg: string, options: any) {
      (this as any).$toasted.show(msg, options)
    },
  },
}
