<template lang="pug">
  .popup(v-show="opened")
    .popup__popupContent
      img.popup__closeButton(
        src='~@/assets/media/images/ImagePopup/close_icon.png'
        @click="close"
      )
      .imagePopup__contentWrapper
        .imagePopup__imageWrapper
          img.imagePopup__image(:src="src")
          .imagePopup__statsWrapper.border-box
            .imagePopup__buttonsWrapper
              .imagePopup__statBtn.imagePopup__dislike.border-box(@click="dislike")
                .imagePopup__btnIcon.imagePopup__iconDislike
                  .imagePopup__btnTextWrapper {{ dislikesCount }}
              .imagePopup__statBtn.imagePopup__like.border-box(@click="like")
                .imagePopup__btnIcon.imagePopup__iconLike
                  .imagePopup__btnTextWrapper {{ likesCount }}

        .imagePopup__commentsWrapper.border-box
          .imagePopup__commentsCount(v-if="comments.length > 0") Comments: {{ comments.length }}
          .imagePopup__commentsScroll
            .imagePopup__commentWrapper(
                v-for="(comment, index) in comments"
                :key="index"
              )
              .imagePopup__commentInfo.border-box
                .imagePopup__userName {{ comment.userName }}
                .imagePopup__commentDate {{ getDate(comment.date) }}
              .imagePopup__comment.border-box {{ comment.text }}
          .imagePopup__divider
          .imagePopup__newCommentWrapper
            input(
                type='text'
                placeholder='Type your nickname here...'
                class='imagePopup__comentatorName border-box'
                v-model="userName"
              )

            .imagePopup__commentArea
              textarea.imagePopup__textArea.border-box(
                  placeholder="Write your comment here..."
                  v-model="commentText"
                )
              .imagePopup__btnSubmit(@click="sendComment")

</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import moment from 'moment';
import { IUserComment } from '@/interfaces/gallery';
import { galleryActions } from '@/store/modules/gallery/publicConstants';

const galleryModule = namespace('galleryModule');

  @Component
export default class ImagePopup extends Vue {
    @Prop() private opened!: boolean;

    @Prop() private itemIndex!: number;

    @Prop({ default: 0 }) private src!: string;

    @Prop({ default: 0 }) private likesCount!: number;

    @Prop({ default: 0 }) private dislikesCount!: number;

    @Prop({ default: () => [] }) private comments!: Array<IUserComment>;

    protected userActivity = {
      liked: false,
      disliked: false,
    };

    protected userName = '';

    protected commentText = '';

    @galleryModule.Action(galleryActions.LIKES_INCREMENTATION)
    private likesIncrementation!: (index:number) => void;

    @galleryModule.Action(galleryActions.DISLIKES_INCREMENTATION)
    private dislikesIncrementation!: (index:number) => void;

    @galleryModule.Action(galleryActions.LIKES_DECREMENT)
    private likesDecrement!: (index:number) => void;

    @galleryModule.Action(galleryActions.DISLIKES_DECREMENT)
    private dislikesDecrement!: (index:number) => void;

    @galleryModule.Action(galleryActions.UPDATE_LOCAL_STORAGE)
    private updateLocalStorage!: () => void;

    @galleryModule.Action(galleryActions.COMMENT_INCREMENT)
    private commentIncrement!: (commentData:object) => void;

    protected like():void {
      if (!this.userActivity.liked) {
        this.likesIncrementation(this.itemIndex);
        this.userActivity.liked = !this.userActivity.liked;
      }

      this.unDislike();
      this.updateLocalStorage();
    }

    protected dislike():void {
      if (!this.userActivity.disliked) {
        this.dislikesIncrementation(this.itemIndex);
        this.userActivity.disliked = !this.userActivity.disliked;
      }

      this.unLike();
      this.updateLocalStorage();
    }

    protected unLike() {
      if (this.userActivity.liked) {
        this.likesDecrement(this.itemIndex);
        this.userActivity.liked = !this.userActivity.liked;
      }
    }

    protected unDislike() {
      if (this.userActivity.disliked) {
        this.dislikesDecrement(this.itemIndex);
        this.userActivity.disliked = !this.userActivity.disliked;
      }
    }

    @Emit('close')
    close():void {
      this.userActivity = {
        liked: false,
        disliked: false,
      };
      // this.$emit('update:opened', false);
    }

    clearInputs():void {
      this.userName = '';
      this.commentText = '';
    }

    sendComment():void {
      const commentData = {
        itemIndex: this.itemIndex,
        comment: {
          userName: this.userName,
          text: this.commentText,
          date: new Date(),
        },
      };

      this.commentIncrement(commentData);
      this.clearInputs();
      this.updateLocalStorage();
    }

    protected getDate(commentDate:Date):string {
      return moment(commentDate.toString()).fromNow();
    }
}
</script>

<style scoped>

</style>
