<template>
  <div class="locationWrap">
    <span
      v-for="item in locations"
      :key="item.idx">
        {{ item }}
    </span>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    // items: {
    //   type: Array,
    //   default: () => []
    // }
  },
  computed: {
    ...mapState([
      'locations',
    ])
  }

}
</script>

<style>
  
</style>
