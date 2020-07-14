<template>
  <div class="article-small-thumb" :style="{borderColor: color}" :class="{'article-small-thumb-large': large}">
    <h1>{{ this.title }}</h1>
    <p>{{ this.body }}</p>
    <div class="control">
      <button :style="{backgroundColor: color}" @click="routeTo()">Read More</button>
      <div class="icon">
        <img src="/icons/Asset_3.svg" alt="Book">
        <!--<i class="fas fa-book-open" :style="{color: color}"></i>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  .article-small-thumb {
    width: 310px;
    height: 280px;
    padding: 5px 15px;
    border: 3px solid #34b759;
    box-sizing: border-box;
    margin-bottom: 20px;
    h1 {
      padding: 0;
      margin: 5px 0 10px;
      font-size: 25px;
    }
    p {
      margin: 20px 0 0;
      padding: 0;
      font-size: 19px;
      height: 125px;
    }
    .control {
      margin-top: 35px;
      display: flex;
      justify-content: space-between;
      button {
        width: 135px;
        height: 35px;
        border-radius: 5px;
        border: none;
        background: #34b759;
        color: #302c2d;
        font-weight: 700;
      }
      .icon {
        width: 72px;
        height: 72px;
        border-radius: 72px;
        position: relative;
        margin-top: -35px;
        img {
          color: #34b759;
          width: 72px;
          height: 72px;
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

  .article-small-thumb-large {
    width: 650px;
  }

  @media all and (max-width: 891px){
    .article-small-thumb{
      width: 100% !important;
      margin: 10px 0;
      padding: 0 10px;
      h1{
        margin: 15px 0 5px;
      }
      p{
        font-size: 18px;
      }
    }
    .article-small-thumb-large {
      width: 100% !important;
    }
  }
</style>
