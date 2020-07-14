<template>
  <div class="article-middle-thumb" :style="{borderColor: color}">
    <h1>{{ this.title }}</h1>
    <p>{{ this.body }}</p>
    <div class="control">
      <button :style="{backgroundColor: color}" @click="routeTo()">Read More</button>
      <div class="icon">
        <i class="fas fa-book-open" :style="{color: color}"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'body', 'color', 'path'],
  methods: {
    routeTo () {
      window.bus.$emit('routeTo', {
        name: this.path.name,
        id: this.path.id
      })
    }
  }
}
</script>

<style lang="scss">
  .article-middle-thumb{
    width: 420px;
    height: 280px;
    color: #231f20;
    padding: 5px 20px;
    box-sizing: border-box;
    border: 3px solid #00b65f;
    h1{
      padding: 0;
      margin: 0;
      font-size: 25px;
    }
    p{
      margin-top: 15px;
      padding: 0;
      font-size: 22px;
      height: 150px;
    }
    .control {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      button {
        width: 135px;
        height: 35px;
        border-radius: 5px;
        border: none;
        color: #302c2d;
        font-weight: 700;
        background: #00b65f;
        margin-left: -4px;
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
          font-size: 35px;
          width: 35px;
          height: 35px;
          position: absolute;
          left: -3px;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
        }
      }
    }
  }

  @media all and (max-width: 891px){
    .article-middle-thumb{
        width: 305px;
        margin: 10px 0;
        padding: 0 10px;
        h1{
          font-size: 20px;
          margin: 15px 0 5px;
        }
        p{
          font-size: 17px;
        }
    }
  }
</style>
