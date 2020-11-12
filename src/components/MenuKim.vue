<template>
<b-card v-if="menu" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
    <b-card-title>
        <div>
            {{menu.name}}
        </div>
    </b-card-title>
    <b-card-footer>
        {{menu.price | comma}}원
    </b-card-footer>
    <div>
        <b-button v-b-modal="menu.id + 'id'">주문표에 추가하기</b-button>

        <b-modal :id="menu.id + 'id'" title="추가하기" @ok="insertMenu(menu, orderer)">
            <b-form-input placeholder="먹을사람 이름을 입력하세요" v-model="orderer" />
            <p class="my-4">{{menu.name}}</p>
            <p class="my-4">{{menu.price | comma}}원</p>

        </b-modal>
    </div>
</b-card>
</template>

<script>
import {
    utils
} from '../assets/mixin'
import axios from 'axios';
import {
    API_SERVER,
    ORDERS
} from '../assets/urls';

export default {
    mixins: [utils('addOrderEvent')],
    data() {
        return {
            orderer: null
        }
    },
    props: {
        menu: {
            type: Object
        }
    },
    methods: {
        insertMenu: function (menu, orderer) {
            axios.post(API_SERVER + ORDERS, {
                    ...menu,
                    orderer,
                    menu_type: 'kim'
                })
                .then(res => {
                    this.noticeAddOrder(res.data)
                }, err => {
                    console.log(err)
                })
        },
        noticeAddOrder: function (order) {
            this.$socket.emit(this.addOrderEvent, {
                order
            })
        }
    }
}
</script>

<style scoped>

</style>
