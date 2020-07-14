<template>
  <div class="configure-thumb" :class="{'configure-thumb-large': large}" :style="{background: color}">
    <h1>{{ this.title }}</h1>
    <p>{{ this.body }}</p>
    <div class="control">
      <button @click="routeTo()">Get Started</button>
      <div class="icon">
        <img src="/icons/Asset_1.svg" alt="Config">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfigureThumb',
  props: ['title', 'body', 'color', 'path', 'large'],
  methods: {
    routeTo () {
      window.bus.$emit('routeTo', {
        name: this.path.name,
        id: this.path.id,
        breadcrumb: this.path.breadcrumb
      })
    }
  }
}
</script>

<style lang="scss">
  .configure-thumb{
    width: 420px;
    height: 280px;
    background: #34b759;
    color: #231f20;
    padding: 5px 20px;
    box-sizing: border-box;
    margin-bottom: 20px;
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
        position: relative;
        margin-top: -38px;
        margin-right: 0;
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

  .configure-thumb-large{
    width: 650px;
  }

  @media all and (max-width: 891px){
    .configure-thumb{
      width: 100%;
      margin: 10px 0;
      padding: 0 10px;
      .control {
        button {
          margin-top: 10px;
        }
        .icon{
          margin-top: -20px;
        }
      }
      h1{
        font-size: 20px;
      }
      p{
        font-size: 17px;
      }
    }
  }
</style>
