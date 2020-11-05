<template>
    <div>
    <b-breadcrumb>
        <b-breadcrumb-item 
            v-for="(item, index) in filterItems" 
            :key="index"
            :active="item.key == filterKeyword"
            @click="clickFilter(item.key)">
            {{item.value}}
        </b-breadcrumb-item>
    </b-breadcrumb>
    </div>
</template>
<script>
export default {
    props: {
        filterItems : {
            type : Array
        },
        filterKeyword: {
            type: String
        }
    },
    methods: {
        clickFilter: function (key) {
            this.$emit('onClickFilter', key)
        }
    }

}
</script>