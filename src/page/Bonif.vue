<template>
    <div>
        <div>
            <MenuList :menuList="items" />
        </div>
    </div>
</template>

<script>
import MenuList from '../components/MenuList.vue'
import {bonifMenuList} from '../assets/constant'

export default {
    components: {
        MenuList
    },
    created: function() {
        this.items = bonifMenuList
    },
    data() {
        return {
            items: []
    }
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