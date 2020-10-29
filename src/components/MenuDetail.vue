<template>
    <div class="mt-4">
    <h4>Left and Right (or Start and End)</h4>
    <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </b-card-text>
    </b-card>

    <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-right>
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </b-card-text>
    </b-card>
    {{menu.id}}
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