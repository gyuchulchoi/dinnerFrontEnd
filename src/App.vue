<template>
  <div>
      <div>
        <b-jumbotron header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">
        </b-jumbotron>
      </div>
    <Bonif />
  </div>
</template>

<script>

import Bonif from './components/Bonif.vue'

export default {
  name: 'App',
  components: {
    Bonif
  }
}
</script>