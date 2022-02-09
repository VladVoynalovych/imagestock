<template lang="pug">
  .popup.addImagePopup(v-show="opened")
    .popup__popupContent.border-box
      .addImagePopup__searchFieldWrapper
        input.searchField(
          type="text"
          placeholder="Type your image name here..."
          v-model="keyWord"
        )
        button.searchButton(
          @click="uploadImages(keyWord)"
        )
          i(
            class="fas fa-search"
          )

      .addImagePopup__imagesWrapper.border-box(
        :class="{ 'addImagePopup__imagesWrapper_centered': showDisclaimer }"
      )
        .addImagePopup__disclaimer(
          v-show="showDisclaimer"
        ) There will be your images

        .addImagePopup__imageContainer.border-box(
          v-if="getAllImages.length"
          v-for="(item, index) in getAllImages"
          :class="{'alreadyAdded': isBelongToGallery(item.src) && !item.added, 'newAdded': item.added}"
        )
          img(
            :src='item.src'
            :key="index"
            class='addImagePopup__image'
          )
          img(
            src='~@/assets/media/images/AddButton/plus_icon.png'
            class='plusButton'
            @click="updateImageState(item.src, index)"
          )
      img.popup__closeButton(
        src='~@/assets/media/images/ImagePopup/close_icon.png'
        @click="close"
      )
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { popupActions, popupGetters } from '@/store/modules/addImagePopup/publicConstants';
import { galleryActions, galleryGetters } from '@/store/modules/gallery/publicConstants';

import { INewImage } from '@/interfaces/flickr';
import { IGalleryItem } from '@/interfaces/gallery';

const AddImagePopupModule = namespace('addImagePopupModule');

const GalleryModule = namespace('galleryModule');

  @Component
export default class AddImagePopup extends Vue {
    @Prop() private opened!: boolean;

    @Emit('close')
    private close(): boolean {
      this.clearImages();
      this.showDisclaimer = true;
      return false;
    }

    protected showDisclaimer: boolean = true;

    protected keyWord:string = '';

    @AddImagePopupModule.Action(popupActions.UPLOAD_IMAGES)
    private uploadImagesAction!: (keyWord: string) => void;

    @AddImagePopupModule.Action(popupActions.CLEAR_IMAGES_POPUP)
    private clearImages!: () => void;

    @AddImagePopupModule.Action(popupActions.SET_AS_ADDED)
    private setAsAdded!: (id: number) => void;

    @AddImagePopupModule.Action(popupActions.SET_AS_DEFAULT)
    private setAsDefault!: (id: number) => void;

    @AddImagePopupModule.Getter(popupGetters.GET_UPLOADED_IMAGES)
    private getAllImages!: INewImage[];

    // gallery module functionality
    @GalleryModule.Getter(galleryGetters.GET_ALL_IMAGES)
    private getAllGalleryImages!: IGalleryItem[];

    @GalleryModule.Action(galleryActions.ADD_IMAGE_TO_GALLERY)
    private addImageToGallery!: (src: string) => void;

    @GalleryModule.Action(galleryActions.UPDATE_LOCAL_STORAGE)
    private updateLocalStorage!: () => void;

    @GalleryModule.Action(galleryActions.DELETE_IMAGE_BY_SRC)
    private deleteImageBySrc!: (src: string) => void;
    // gallery module functionality

    private uploadImages(keyWord: string): void {
      if (!keyWord) {
        alert('The search string shouldn`t be empty');
        return;
      }

      this.uploadImagesAction(keyWord);
      this.showDisclaimer = false;
      this.keyWord = '';
    }

    private updateImageState(src: string, index: number): void {
      !this.isBelongToGallery(src) ? this.addImage(src, index) : this.deleteImage(src, index);
      this.updateLocalStorage();
    }

    private addImage(src: string, index: number): void {
      this.addImageToGallery(src);
      this.setAsAdded(index);
    }

    private deleteImage(src: string, index: number): void {
      this.deleteImageBySrc(src);
      this.setAsDefault(index);
    }

    private isBelongToGallery(src: string) {
      return !!this.getAllGalleryImages.find(item => item.src === src);
    }
}
</script>

<style scoped>

</style>
