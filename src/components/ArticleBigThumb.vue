<template>
  <div class="article-big-thumb" :style="{background: primaryColor, borderColor: secondaryColor}">
    <img
      :src="image"
      alt="Article">
    <div class="body">
      <h1>{{ this.title }}</h1>
      <p>{{ this.body }}</p>
      <div class="control">
        <button @click="routeTo()">Read More</button>
        <div class="icon">
          <i class="fas fa-comment-alt" :style="{color: secondaryColor}"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleBigThumb',
  props: ['image', 'title', 'body', 'primaryColor', 'secondaryColor', 'path'],
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
  .article-big-thumb {
    width: 530px;
    height: 580px;
    background: #b7e8cb;
    border: 3px solid #34b759;
    img {
      width: 100%;
      height: 365px;
      object-fit: cover;
    }
    .body{
      padding: 0 10px;
      h1{
        padding: 0;
        margin: 15px 0;
        font-size: 27px;
      }
      p{
        margin: 0;
        padding: 0;
        font-size: 24px;
      }
      .control {
        margin-top: 50px;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        button {
          width: 140px;
          height: 35px;
          border-radius: 5px;
          border: none;
          background: #fff;
          color: #302c2d;
          font-weight: 700;
          margin-top: -7px;
          font-size: 18px;
        }
        .icon{
          width: 72px;
          height: 72px;
          border-radius: 72px;
          background: #231f20;
          position: relative;
          margin-top: -45px;
          margin-right: -2px;
          i{
            color: #34b759;
            font-size: 30px;
            width: 30px;
            height: 30px;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
          }
        }
      }
    }
  }
  @media all and (max-width: 891px) {
    .article-big-thumb{
      width: 300px;
      height: auto;
      display: flex;
      margin: 10px 0;
      img{
        height: 230px;
        width: 50%;
      }
      .body{
        width: 50%;
        h1{
          font-size: 20px;
        }
        p{
          font-size: 16px;
        }
        .control{
          padding: 0;
          button{
            width: 70px;
            height: 25px;
            font-size: 11px;
          }
          .icon{
            width: 43px;
            height: 43px;
            border-radius: 72px;
            margin-top: -35px;
            i {
              font-size: 20px;
              width: 20px;
              height: 20px;
            }
          }
        }
      }
    }
  }
</style>
