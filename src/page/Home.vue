<template>
<div>
    <b-jumbotron :header="appName" lead="설명ㅓㅁㅇㄹ89ㅓ239ㄱ4ㅓ23ㅑㅜ" />
</div>
</template>

<script>
import {
    mapState
} from 'vuex'

export default {
    computed: {
        ...mapState(['appName'])
    },
}
</script>
