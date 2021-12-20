<template lang="pug">
  .mainLayout
    Header
    Grid
      GridItem(@click.native="popupOpened = !popupOpened")
      GridItem(@click.native="popupOpened = !popupOpened")
      GridItem(@click.native="popupOpened = !popupOpened")
      GridItem(@click.native="popupOpened = !popupOpened")
      GridItem(@click.native="popupOpened = !popupOpened")
      GridItem(@click.native="popupOpened = !popupOpened")
      GridItem(@click.native="popupOpened = !popupOpened")
      GridItem(@click.native="popupOpened = !popupOpened")
      GridItem(@click.native="popupOpened = !popupOpened")
      AddButton

    ImagePopup(:opened.sync="popupOpened")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import Header from '../../components/Header/Header.vue';
import Grid from '../../components/Grid/Grid.vue';
import GridItem from '../../components/GridItem/GridItem.vue';
import AddButton from '../../components/AddButton/AddButton.vue';
import ImagePopup from '../../components/ImagePopup/ImagePopup.vue';
import { someModuleActions, someModuleGetters } from '@/store/modules/someModule/publicConstants';

const SomeModule = namespace('someModule');

@Component({
  components: {
    Header,
    Grid,
    GridItem,
    AddButton,
    ImagePopup,
  },
})
export default class MainLayout extends Vue {
  @SomeModule.Action(someModuleActions.SOME_ACTION)
  private someAction!: () => void;

  @SomeModule.Getter(someModuleGetters.SOME_GETTER)
  private someGetter!: string;

  private popupOpened = false;
}
</script>

<style scoped>

</style>
