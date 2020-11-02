<template>
    <b-card
        v-if="menu"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        @click="$emit('detail', menu)">
        <b-card-title>
            <div>
                {{menu.title}}
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
    }    
}
</script>

<style scoped>

</style>