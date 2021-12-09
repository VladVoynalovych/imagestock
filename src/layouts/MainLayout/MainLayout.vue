<template lang="pug">
  .mainLayout
    Header
    Grid
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '../../components/Header/Header.vue';
import Grid from '../../components/Grid/Grid.vue';

@Component({
  components: {
    Header,
    Grid,
  },
})
export default class MainLayout extends Vue {
}
</script>

<style scoped>

</style>
