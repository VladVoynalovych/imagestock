<template lang="pug">
  .popup.addImagePopup(v-show="opened")
    .popup__popupContent.border-box
      .addImagePopup__searchPoleWrapper
        input.addImagePopup__searchPole(
          type="text"
          placeholder="Type your image name here..."
          v-model="keyWord"
        )
        button.addImagePopup__searchButton(
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
          :class="{'addImagePopup__imageContainer_alreadyAdded': isBelongToGallery(item.src),'addImagePopup__imageContainer_newAdded': item.added }"
        )
          img(
            :src='item.src'
            :key="index"
            class='addImagePopup__image'
          )
          img(
            src='~@/assets/media/images/AddButton/plus_icon.png'
            class='plusButton'
            @click.once="addImage(item.src, index)"
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

const addImagePopupModule = namespace('addImagePopupModule');

const galleryModule = namespace('galleryModule');

  @Component
export default class AddImagePopup extends Vue {
    @Prop() private opened!: boolean;

    @Emit('close')
    close():boolean {
      this.clearImages();
      return false;
    }

    protected showDisclaimer = true;

    protected keyWord = '';

    @addImagePopupModule.Action(popupActions.UPLOAD_IMAGES)
    private uploadImagesAction!: (keyWord:string) => void;

    @addImagePopupModule.Action(popupActions.CLEAR_IMAGES_POPUP)
    private clearImages!: () => void;

    @addImagePopupModule.Action(popupActions.SET_AS_ADDED)
    private setAsAdded!: (id:number) => void;

    @addImagePopupModule.Getter(popupGetters.GET_UPLOADED_IMAGES)
    private getAllImages!: Array<INewImage>;

    // gallery module functionality
    @galleryModule.Getter(galleryGetters.GET_ALL_IMAGES)
    private getAllGalleryImages!: Array<IGalleryItem>;

    @galleryModule.Action(galleryActions.ADD_IMAGE_TO_GALLERY)
    private addImageToGallery!: (src:string) => void;

    @galleryModule.Action(galleryActions.UPDATE_LOCAL_STORAGE)
    private updateLocalStorage!: () => void;
    // gallery module functionality

    private uploadImages(keyWord:string):void {
      if (keyWord !== '') {
        this.uploadImagesAction(keyWord);
        this.showDisclaimer = false;
        this.keyWord = '';
      } else {
        alert('The search string shouldn`t be empty');
      }
    }

    private addImage(src:string, index:number):void {
      this.addImageToGallery(src);
      this.setAsAdded(index);
      this.updateLocalStorage();
    }

    private isBelongToGallery(src:string) {
      return !!this.getAllGalleryImages.find(item => item.src === src);
    }
}
</script>

<style scoped>

</style>
