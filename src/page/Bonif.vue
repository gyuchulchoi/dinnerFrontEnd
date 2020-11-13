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
import {bonifTypeList, myMixin} from '../assets/constant'
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
            filterItems: bonifTypeList
        }
    },
    methods: {
        onClickFilter: function (key) {
            this.filterKeyword = key
        }
    },
    computed : {
        filteredList : function () {
            if(this.filterKeyword == 'one') return this.items.filter(item => item.menu_type == this.filterKeyword)
            else if(this.filterKeyword == 'half') return this.items.filter(item => item.menu_type == this.filterKeyword)
            else if(this.filterKeyword == 'korean') return this.items.filter(item => item.menu_type == this.filterKeyword)
            else if(this.filterKeyword == 'small') return this.items.filter(item => item.menu_type == this.filterKeyword)
            else if(this.filterKeyword == 'banchan') return this.items.filter(item => item.menu_type == this.filterKeyword)
            else if(this.filterKeyword == 'other') return this.items.filter(item => item.menu_type == this.filterKeyword)
            else if(this.filterKeyword == 'winter') return this.items.filter(item => item.menu_type == this.filterKeyword)
            else return this.items
        }
    },
    created: function() {
        console.log('Bonif created')
        axios.get('http://192.168.62.55:8000/bonmenu/?format=json')
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