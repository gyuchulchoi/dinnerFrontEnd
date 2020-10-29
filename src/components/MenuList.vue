<template>
    <div id="container" v-if="menuList.length>0">
        <b-container fluid>
            <b-row class="row" v-for="i in Math.ceil(menuList.length/4)" :key="i.id">
                <b-col cols="3" v-for="item in menuList.slice((i - 1) * 4, i * 4)" :key="item.id">
                    <Menu :menu="item" @detail="detail"/>
                </b-col>
            </b-row>
        </b-container>
    </div>    
</template>

<script>
import Menu from './Menu.vue'

export default {
    components: {Menu},
    props : {
        menuList: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    methods: {
        detail: (menu) => {
            console.log(menu)
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