<template lang="pug">
  .anonymous    
    img(src="~/assets/img/emoji/santa.png")    
    h2 Ho! Ho! Ho!
    h2 You need a code to view this content. 
    .responses
        nuxt-link(to='/chat')
            button.try-code Try your code
</template>



<style lang="scss" scoped>
    .anonymous {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        height: 100vh;

        img {
            margin-bottom: 2rem;
        }

        h2 {
            margin-top: 0;
            text-align: center;
        }

        .responses {
            position: relative;
            bottom: 0;
        }
    }
</style>
