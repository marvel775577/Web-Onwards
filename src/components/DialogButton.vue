<template>
  <div :class="{'dialog': position === 'top', 'dialog dialog-bottom': position === 'bottom'}" :style="{backgroundColor: background}">
    <div v-html="this.icon" :style="{color: iconColor}" v-if="this.icon"></div>
    <img src="/icons/Asset_15_1.png" alt="Chat" v-else>
    <p v-html="this.body" :style="{color: textColor}"></p>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: ['body', 'icon', 'icon-color', 'position', 'background', 'text-color'],
  data () {
    return {}
  }
}
</script>

<style lang="scss">
  .dialog {
    display: flex;
    height: 50px;
    border-radius: 0 0 10px 10px;
    img {
      height: 35px;
      padding: 10px 5px;
    }
    div {
      margin: 0;
      width: 50px;
      font-size: 33px;
      display: flex;
      align-items: center;
      justify-content: center;
      i{
        color: inherit;
      }
    }
    p {
      width: 85px;
      height: 100%;
      margin: 0;
      padding: 5px 0;
      text-align: start;
      font-size: 17px;
    }
  }

  .dialog-bottom {
    border-radius: 10px 10px 0 0;
  }

  @media all and (max-width: 891px) {
    .dialog {
      border-radius: 0;
      align-items: center;
      margin-bottom: 5px;
      height: 40px;
      img {
        height: 25px;
        padding: 10px 8px 10px 12px;
      }
      i{
        font-size: 25px;
      }
      p{
        padding: 0;
        width: auto;
        height: auto;
      }
    }
  }
</style>
