<template>
    <div>
        <div>
            <FilterBar :filterItems="filterItems" :filterKeyword="filterKeyword" @onClickFilter="onClickFilter"/>
            <MenuList :menuList="filteredList" :restaurant="restourantKind.bon"/>
        </div>
    </div>
</template>

<script>
import MenuList from '../components/MenuList.vue'
import FilterBar from '../components/FilterBar.vue'
import {kimTypeList, myMixin} from '../assets/constant'
import {utils} from '../assets/mixin'
import axios from 'axios'

export default {
    components: {
        MenuList,
        FilterBar
    },
    data() {
        return {
            items: [],
            filterKeyword: 'all',
            filterItems: kimTypeList
        }
    },
    methods: {
        onClickFilter: function (key) {
            this.filterKeyword = key
        }
    },
    computed : {
        filteredList : function () {
            if(this.filterKeyword == 'all') return this.items
            else return this.items.filter(item => item.type == this.filterKeyword)
        }
    },
    created: function() {
        console.log('Bonif created')
        axios.get('http://localhost:8000/bon/')
        .then(res => {
            this.items = res.data
        }, err => {
            console.log(err)
        });
    },
    mixins: [myMixin, utils('restourantKind')]
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