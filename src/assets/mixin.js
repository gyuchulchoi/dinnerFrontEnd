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