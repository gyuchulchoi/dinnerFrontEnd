<template>
    <div id="container" v-if="menuList.length>0">
        <b-container fluid>
            <b-row class="row" v-for="i in Math.ceil(menuList.length/4)" :key="i.id">
                <b-col cols="3" v-for="item in menuList.slice((i - 1) * 4, i * 4)" :key="item.id">
                    <component :is="menu" :menu="item"></component>
                </b-col>
            </b-row>
        </b-container>
    </div>    
</template>

<script>
import Menu from './Menu.vue'
import MenuBon from './MenuBon.vue'
import MenuKim from './MenuKim.vue'
import {restourantKind} from '../assets/constant'

export default {
    created: function() {
        console.log(restourantKind)
    },
    computed: {
        menu : function () {
            if(this.restaurant == restourantKind.bon) return MenuBon
            else if(this.restaurant == restourantKind.kim) return MenuKim
            else return Menu
        }
    },
    components: {Menu},
    props : {
        menuList: {
            type: Array,
            default: () => {
                return []
            }
        },
        restaurant : {
            type: String,
            default: () => {
                return restourantKind.bon
            }
        }
    }
}
</script>


<style scoped>

#container {
    padding:15px
}

.row {
    padding:10px
}

</style>