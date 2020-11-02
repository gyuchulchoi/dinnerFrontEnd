<template>
    <div>

        {{$route.params.id}}
    </div>
</template>

<script>
export default {
    props: {
        menu: {
            type: Object,
            default: () => {
                return {
                    id: 0,
                    title: '디폴트 타이틀',
                    price: '디폴트가격'
                }
            }
        }   
    }
}
</script>

<style scoped>

</style>