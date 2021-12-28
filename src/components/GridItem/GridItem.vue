<template lang="pug">
  .gridItem
    img.gridItem__itemImage(:src="src")
    .gridItem__infoArea
      .gridItem__comments.gridItem__icon
        .gridItem__valueWrapper {{ likesCount }}

      .gridItem__dislikes.gridItem__icon
        .gridItem__valueWrapper {{ dislikesCount }}

      .gridItem__likes.gridItem__icon
        .gridItem__valueWrapper {{ commentsCount }}

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
export default class GridItem extends Vue {
    @Prop({ default: 0 }) private likesCount!: number;

    @Prop({ default: 0 }) private dislikesCount!: number;

    @Prop({ default: 0 }) private commentsCount!: number;

    @Prop() private src!: string;
}
</script>

<style scoped>

</style>
