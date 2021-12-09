<template lang="pug">
  .gridItem
    img.gridItem__itemImage(src='~@/assets/media/images/ciri.jpg')
    .gridItem__infoArea
      .gridItem__comments.gridItem__icon
        .gridItem__valueWrapper 5

      .gridItem__dislikes.gridItem__icon
        .gridItem__valueWrapper 5

      .gridItem__likes.gridItem__icon
        .gridItem__valueWrapper 5

</template>

<script>
export default {
  name: 'GridItem',
};
</script>

<style scoped>

</style>
