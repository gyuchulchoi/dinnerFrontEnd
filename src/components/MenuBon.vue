<template>
    <b-card
        v-if="menu"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        @click="menuDetail">
        <b-card-title>
            <div>
                본도시락 : {{menu.name}}
            </div>
        </b-card-title>
        <b-card-footer>
            {{menu.price}}
        </b-card-footer>
    </b-card>
</template>

<script>
export default {
    props: {
        menu: {
            type: Object
        }
    },
    methods: {
        menuDetail : function () {
            this.$router.push({
                name: 'menu',
                params: {id: this.menu.id}
            })
        }
    }
}
</script>

<style scoped>

</style>