<template lang="pug">
  .popup.addImagePopup(v-show="opened")
    .popup__popupContent.border-box
      input.addImagePopup__searchPole(
        type="text"
        placeholder="Type your image name here..."
      )

      .addImagePopup__imagesWrapper.border-box
        .addImagePopup__disclaimer(
          v-show="showDisclaimer"
        ) There will be your images

        .addImagePopup__imageContainer
          img(
            src='~@/assets/media/images/ciri.jpg'
          )
        .addImagePopup__imageContainer
          img(
            src='~@/assets/media/images/ciri.jpg'
          )
        .addImagePopup__imageContainer
          img(
            src='~@/assets/media/images/ciri.jpg'
          )
        .addImagePopup__imageContainer
          img(
            src='~@/assets/media/images/ciri.jpg'
          )
        .addImagePopup__imageContainer
          img(
            src='~@/assets/media/images/ciri.jpg'
          )
        .addImagePopup__imageContainer
          img(
            src='~@/assets/media/images/ciri.jpg'
          )
        .addImagePopup__imageContainer
          img(
            src='~@/assets/media/images/ciri.jpg'
          )
        .addImagePopup__imageContainer
          img(
            src='~@/assets/media/images/ciri.jpg'
          )
        .addImagePopup__imageContainer
          img(
            src='~@/assets/media/images/ciri.jpg'
          )
        .addImagePopup__imageContainer
          img(
            src='~@/assets/media/images/ciri.jpg'
          )

      img.popup__closeButton(
        src='~@/assets/media/images/ImagePopup/close_icon.png'
        @click="close"
      )
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

  @Component
export default class AddImagePopup extends Vue {
    @Prop() private opened!: boolean;

    @Emit('close')
    close():boolean {
      return false;
    }

    protected showDisclaimer = false;
}
</script>

<style scoped>

</style>
