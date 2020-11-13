<template>
<b-card v-if="menu" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
    <b-card-title>
        <div>
            본도시락 : {{menu.menu_name}}
        </div>
    </b-card-title>
    <b-card-footer>
        {{menu.menu_price}}원
    </b-card-footer>
    <div>
        <b-button v-b-modal="menu.id + 'id'">주문표에 추가하기</b-button>

        <b-modal :id="menu.id + 'id'" title="BootstrapVue" @ok="onClickButton(menu.id, orderer)">
            <b-form-input placeholder="먹을사람 이름을 입력하세요" v-model="orderer" />
            <p class="my-4">{{menu.menu_name}}</p>
            <p class="my-4">{{menu.menu_price}}</p>

        </b-modal>
    </div>
</b-card>
</template>

<script>
import {
    utils
} from '../assets/mixin'

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
        onClickButton: function (menu, orderer) {
            this.$socket.emit(this.addOrderEvent, {
                ...menu,
                orderer,
                menu_type: 'bon'
            })
        }
    }
}
</script>

<style scoped>

</style>
