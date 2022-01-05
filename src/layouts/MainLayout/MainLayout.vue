<template lang="pug">
  .mainLayout
    Header
    Grid
      GridItem(
          v-for="(image, index) in getAllImages"
          :key="index"
          :src="image.src"
          :likesCount="image.likes"
          :dislikesCount="image.dislikes"
          :commentsCount="image.comments.length"
          @click.native="openPopup(index)"
      )
      AddButton

    ImagePopup(
        v-if="getAllImages[currentImageId]"
        :opened.sync="popupOpened"
        :likesCount="getAllImages[currentImageId].likes"
        :dislikesCount="getAllImages[currentImageId].dislikes"
        :comments="getAllImages[currentImageId].comments"
        :src="getAllImages[currentImageId].src"
        :itemIndex="currentImageId"
        @close="popupOpened = false"
      )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import Header from '../../components/Header/Header.vue';
import Grid from '../../components/Grid/Grid.vue';
import GridItem from '../../components/GridItem/GridItem.vue';
import AddButton from '../../components/AddButton/AddButton.vue';
import ImagePopup from '../../components/ImagePopup/ImagePopup.vue';
import { galleryActions, galleryGetters } from '@/store/modules/gallery/publicConstants';

import { IGalleryItem } from '@/interfaces/gallery';

const galleryModule = namespace('galleryModule');

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
  @galleryModule.Action(galleryActions.UPLOAD_IMAGES)
  private uploadImages!: () => void;

  @galleryModule.Getter(galleryGetters.GET_ALL_IMAGES)
  private getAllImages!: Array<IGalleryItem>;

  private popupOpened = false;

  private currentImageId = 0;

  private mounted(): void {
    this.uploadImages();
  }

  private openPopup(index:number): void {
    this.currentImageId = index;
    this.popupOpened = !this.popupOpened;
  }
}
</script>

<style scoped>

</style>
