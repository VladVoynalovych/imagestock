<template lang="pug">
  .mainLayout
    Header
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '../../components/Header/Header.vue';

@Component({
  components: {
    Header,
  },
})
export default class MainLayout extends Vue {
}
</script>

<style scoped>

</style>
