import * as constant from './constant'

export const utils  = (param) => {
    return {
        data() {
            return {
                [param]: constant[param]
            }
        }   
    }
} 


// <b-button variant="success" @click="makeToast('success')" class="mb-2">Success</b-button>
export const toast = {
    methods: {
        makeToast(variant = null, title, content) {
            this.$bvToast.toast(content, {
                title: title,
                variant: variant,
                solid: true
            })
        }
    }
}