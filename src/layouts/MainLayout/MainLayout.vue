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
          :itemId="index"
          @click.native="openPopup(index)"
      )
      AddButton(
          @click.native="addImagePopupOpened = !addImagePopupOpened"
      )

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
    AddImagePopup(
        :opened.sync="addImagePopupOpened"
        @close="addImagePopupOpened = !addImagePopupOpened"
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
import AddImagePopup from '../../components/AddImagePopup/AddImagePopup.vue';

import { galleryActions, galleryGetters } from '@/store/modules/gallery/publicConstants';

import { IGalleryItem } from '@/interfaces/gallery';

const GalleryModule = namespace('galleryModule');

@Component({
  components: {
    Header,
    Grid,
    GridItem,
    AddButton,
    ImagePopup,
    AddImagePopup,
  },
})
export default class MainLayout extends Vue {
  @GalleryModule.Action(galleryActions.UPLOAD_IMAGES)
  private uploadImages!: () => void;

  @GalleryModule.Getter(galleryGetters.GET_ALL_IMAGES)
  private getAllImages!: IGalleryItem[];

  private popupOpened: boolean = false;

  private addImagePopupOpened: boolean = false;

  private currentImageId: number = 0;

  private mounted(): void {
    this.uploadImages();
  }

  private openPopup(index: number): void {
    this.currentImageId = index;
    this.popupOpened = !this.popupOpened;
  }
}
</script>

<style scoped>

</style>
