<template>
  <div class="chat-widget">
    <div class="chats">
      <div class="chat-list">
        <div class="chatbubble" v-for="chat,index in chats">{{chat}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '',
      chats: [
        'wonderful',
        'how\'s your day been?',
        'me too freak'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.chat-widget {
  position: absolute;
  bottom: 100px;
  width:100%;
  max-width: 400px;
  padding: 0 12px;
}

.chatbubble {
  // background: lime;
  border:1px solid rgba(white,.2);
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 12px;

}
</style>
