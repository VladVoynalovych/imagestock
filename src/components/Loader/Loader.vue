<template lang="pug">
  .loader(
    :class="{ loading: isLoading }"
  )
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
export default class GridItem extends Vue {
    @Prop({ default: true }) private isLoading!: number;
}
</script>

<style scoped>

</style>
