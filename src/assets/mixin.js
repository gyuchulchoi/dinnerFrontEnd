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
        makeToast(variant = null, content) {
            this.$bvToast.toast(content, {
                title: `Variant ${variant || 'default'}`,
                variant: variant,
                solid: true
            })
        }
    }
}