<template>
  <div class="small-configure-thumb" :style="{background: color}">
    <h1>{{ this.title }}</h1>
    <p>{{ this.body }}</p>
    <div class="control">
      <button>Get Started</button>
      <div class="icon">
        <i class="fas fa-wrench" :style="{color: color}"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmallConfigureThumb',
  props: ['title', 'body', 'color']
}
</script>

<style lang="scss">
  .small-configure-thumb{
    width: 310px;
    height: 280px;
    background: #34b759;
    color: #231f20;
    padding: 5px 17px;
    box-sizing: border-box;
    h1{
      padding: 0;
      margin: 15px 0 5px;
      font-size: 26px;
    }
    p{
      margin: 0;
      padding: 0;
      font-size: 19px;
      height: 120px;
    }
    .control {
      margin-top: 55px;
      display: flex;
      justify-content: space-between;
      button {
        width: 135px;
        height: 35px;
        border-radius: 5px;
        border: none;
        background: #fff;
        color: #302c2d;
        font-weight: 700;
        font-size: 18px;
      }
      .icon{
        width: 72px;
        height: 72px;
        border-radius: 72px;
        background: #231f20;
        position: relative;
        margin-top: -37px;
        margin-right: -4px;
        i{
          color: #34b759;
          font-size: 40px;
          width: 40px;
          height: 40px;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          transform: rotate(270deg);
        }
      }
    }
  }
</style>
