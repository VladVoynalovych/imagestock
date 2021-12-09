<template lang="pug">
  .mainLayout
    Header
    Grid
      GridItem
      GridItem
      GridItem
      GridItem
      GridItem
      GridItem
      GridItem
      GridItem
      GridItem

      AddButton
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '../../components/Header/Header.vue';
import Grid from '../../components/Grid/Grid.vue';
import GridItem from '../../components/GridItem/GridItem.vue';
import AddButton from '../../components/AddButton/AddButton.vue';

@Component({
  components: {
    Header,
    Grid,
    GridItem,
    AddButton,
  },
})
export default class MainLayout extends Vue {
}
</script>

<style scoped>

</style>
