import {instance} from './index'

export const getKimMenu = (id = null) => {
    if(id) return instance.get(`/kim_menus/${id}`)
    return instance.get('/kim_menus')
}
