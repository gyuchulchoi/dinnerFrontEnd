<template>
    <div>
        <div>
            <b-breadcrumb>
                <b-breadcrumb-item 
                    v-for="(item, index) in filterItems" 
                    :key="index"
                    :active="item.key == filterKeyword"
                    @click="filterKeyword = item.key"
                    >
                    {{item.value}}
                </b-breadcrumb-item>
            </b-breadcrumb>
            <MenuList :menuList="filteredList" />
        </div>
    </div>
</template>

<script>
import MenuList from '../components/MenuList.vue'
import {bonifMenuList, bonifTypeList} from '../assets/constant'

export default {
    components: {
        MenuList
    },
    data() {
        return {
            items: [],
            filterKeyword: 'all',
            filterItems: bonifTypeList
        }
    },
    computed : {
        filteredList : function () {
            if(this.filterKeyword == 'all') return this.items
            else return this.items.filter(item => item.type == this.filterKeyword)
        }
    },
    methods: {
        aa : () => {
            console.log('hi')
        }
    },
    created: function() {
        this.items = bonifMenuList
    }
}
</script>

<style scoped>
h1 {
    font-size: medium;
    color: black;
    padding: 10px;
}

#title {
    font-size: medium;
    color: aqua;
}
</style>