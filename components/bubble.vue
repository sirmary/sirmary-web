<template lang="pug">
    .entry(ref="index", v-bind:class="[ entryTyping, entryClassQuickReply, entryClass ]")
      .bubble.typing-indicator(v-bind:class="[ bubbleClass, botVisible]")
        .typing-indicator-container
          .span
          .span
          .span
        .bubble(:class="[ bubbleClass, entryClassActive]")
            .border-top-curve(v-if="entry.image")
              img(:src="entry.image", width="100%", @load="containerResized")
            .video-placeholder(v-if="entry.youtube")
            .border-top-curve.video(v-if="entry.youtube")
                iframe(:src="entry.youtube", width="100%", v-if="entry.youtube", frameborder="0")
            .content-container
                .message(v-html="entry.message")
                .interactive(v-show="isInteractiveEntry")
                    button.md-button.md-button-black.wave-button.wave-float(@click="showAnswerRequest(entry)")
                      | Antwort suchen
            .quick-replies(v-bind:class="[ classReplyCount ]", v-if="entry.replies")
              a.quick-reply-button(@click="quickReply(reply)", v-for="reply in entry.replies")
                {{ reply }}
</template>

<script>
export default {
  props: ['entry'],
  data () {
    return {
      answerRequestClicked: false
    }
  },
  computed: {
    isInteractiveEntry: function (entry) {
      return (this.entry.responder == 'ask_human' && !this.answerRequestClicked)
    },
    entryTyping: function () {
      return this.entry.typing
    },
    entryClass: function () {
      return this.entry.author
    },
    bubbleClass: function () {
      return 'bubble-' + this.entry.author
    },
    entryClassActive: function () {
      return 'bubble-' + this.entry.author + '-active'
    },
    entryClassQuickReply: function () {
      if (this.entry.replies != null) return 'entry-has-quick-reply'
      return ''
    },
    classReplyCount: function () {
      if (this.entry.replies != null)
        return 'x' + this.entry.replies.length
      return ''
    },
    botVisible: function () {
      return (this.entry.author == 'bot') ? '' : 'hidden'
    }
  },
  methods: {
    showAnswerRequest: function (entry) {
      this.answerRequestClicked = true;
      this.$emit('human-request', entry)
    },
    containerResized: function () {
      this.$emit('container-resized')
    },
    quickReply: function(replyMessage) {
      this.$emit('quick-reply', replyMessage)
    }
  }
}
</script>
