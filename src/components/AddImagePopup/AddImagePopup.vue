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

        .addImagePopup__imageContainer(
          v-if="getAllImages.length"
          v-for="(item, index) in getAllImages"
        )
          img(
            :src='item.src'
            :key="index"
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
import { INewImage } from '@/interfaces/flickr';

const addImagePopupModule = namespace('addImagePopupModule');

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

    @addImagePopupModule.Getter(popupGetters.GET_UPLOADED_IMAGES)
    private getAllImages!: Array<INewImage>;

    private uploadImages(keyWord:string):void {
      if (keyWord !== '') {
        this.uploadImagesAction(keyWord);
        this.showDisclaimer = false;
        this.keyWord = '';
      } else {
        alert('The search string shouldn`t be empty');
      }
    }
}
</script>

<style scoped>

</style>
