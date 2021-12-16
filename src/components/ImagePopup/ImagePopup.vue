<template lang="pug">
  .imagePopup
    .imagePopup__popupContent
      .imagePopup__contentWrapper
        img.imagePopup__closeButton(src='~@/assets/media/images/ImagePopup/close_icon.png')
        .imagePopup__imageWrapper
          img.imagePopup__image(src='~@/assets/media/images/ciri.jpg')
          .imagePopup__statsWrapper.border-box
            .imagePopup__buttonsWrapper
              .imagePopup__statBtn.imagePopup__dislike.border-box
                .imagePopup__btnIcon.imagePopup__iconDislike
                  .imagePopup__btnTextWrapper 5
              .imagePopup__statBtn.imagePopup__like.border-box
                .imagePopup__btnIcon.imagePopup__iconLike
                  .imagePopup__btnTextWrapper 5

        .imagePopup__commentsWrapper.border-box
          .imagePopup__commentsCount Comments: 5
          .imagePopup__commentsScroll
            .imagePopup__commentWrapper
              .imagePopup__commentInfo.border-box
                .imagePopup__userName By Anon93
                .imagePopup__commentDate Today 10:21 PM
              .imagePopup__comment.border-box
                |Nullam viverra leo eget urna maximus,
                |et pellentesque enim volutpat.

            .imagePopup__commentWrapper
              .imagePopup__commentInfo.border-box
                .imagePopup__userName By Andrey
                .imagePopup__commentDate 5 days ago 5:21 PM
              .imagePopup__comment.border-box
                |Integer velit lectus, tincidunt rhoncus
                |nunc ut, dapibus dignissim arcu.

            .imagePopup__commentWrapper
              .imagePopup__commentInfo.border-box
                .imagePopup__userName By Sergey
                .imagePopup__commentDate 6 days ago 3:21 PM
              .imagePopup__comment.border-box
                |Quisque egestas cursus ipsum, vitae
                |commodo nunc varius nec.

            .imagePopup__commentWrapper
              .imagePopup__commentInfo.border-box
                .imagePopup__userName By Misha
                .imagePopup__commentDate 7 days ago 4:22 AM
              .imagePopup__comment.border-box
                |Donec ut justo nulla. Duis posuere in
                |leo in congue.

            .imagePopup__commentWrapper
              .imagePopup__commentInfo.border-box
                .imagePopup__userName By Irina
                .imagePopup__commentDate 8 days ago 3:21 AM
              .imagePopup__comment.border-box
                |Quisque convallis nec est nec maximus.
                |Sed lacus est, congue ac metus vel,
                |lacinia interdum nisl. Integer sit amet
                |faucibus sapien, vitae dictum sapien.
                |Maecenas ac nunc ut libero laoreet
                |porta.
          .imagePopup__divider
          .imagePopup__newCommentWrapper
            input(
                type='text'
                placeholder='Type your nickname here...'
                class='imagePopup__comentatorName border-box'
              )

            .imagePopup__commentArea
              textarea.imagePopup__textArea.border-box(placeholder="Write your comment here...")
              .imagePopup__btnSubmit

</template>

<script>
export default {
  name: 'ImagePopup',
};
</script>

<style scoped>

</style>
