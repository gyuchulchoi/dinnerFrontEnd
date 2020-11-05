<template>
    <div>
        <div class="mt-4">
            <h4>{{menuDetail.name}}</h4>
            <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
                <b-card-text>
                    {{menuDetail.desc}}
                    <div class="price">{{menuDetail.price}}</div>
                </b-card-text>
            </b-card>
            
        </div>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            menuDetail : {}
        }
    },
    created: function () {        
        axios.get('http://localhost:8000/bon/'+ this.$route.params.id)
        .then(res => {
            this.menuDetail = res.data
        }, err => {
            console.log(err)
        })
    }
}
</script>

<style scoped>
.price {
    font-size: 20px;
    text-align: right;
    position: absolute;
    bottom: 10px;
}
</style>