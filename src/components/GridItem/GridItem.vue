<template lang="pug">
  .gridItem
    img.gridItem__itemImage(:src="src")
    .gridItem__infoArea
      .gridItem__delete.gridItem__icon(
          @click.stop="deleteImage(itemId)"
        )

      .gridItem__comments.gridItem__icon
        .gridItem__valueWrapper {{ likesCount }}

      .gridItem__dislikes.gridItem__icon
        .gridItem__valueWrapper {{ dislikesCount }}

      .gridItem__likes.gridItem__icon
        .gridItem__valueWrapper {{ commentsCount }}

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { galleryActions } from '@/store/modules/gallery/publicConstants';

const GalleryModule = namespace('galleryModule');
  @Component
export default class GridItem extends Vue {
    @Prop({ default: 0 }) private itemId!: number;

    @Prop({ default: 0 }) private likesCount!: number;

    @Prop({ default: 0 }) private dislikesCount!: number;

    @Prop({ default: 0 }) private commentsCount!: number;

    @Prop() private src!: string;

    // gallery module functionality
    @GalleryModule.Action(galleryActions.DELETE_BY_ID)
    private deleteImageById!: (id: number) => void;

    @GalleryModule.Action(galleryActions.UPDATE_LOCAL_STORAGE)
    private updateLocalStorage!: () => void;
    // gallery module functionality

    private deleteImage(id: number): void {
      this.deleteImageById(id);
      this.updateLocalStorage();
    }
}
</script>

<style scoped>

</style>
