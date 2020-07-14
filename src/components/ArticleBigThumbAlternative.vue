<template>
  <div class="article-big-thumb-alternative" :style="{background: primaryColor, borderColor: secondaryColor}">
    <img
      :src="image"
      alt="Article">
    <div class="body">
      <h1>{{ this.title }}</h1>
      <p>{{ this.body }}</p>
      <div class="control">
        <button @click="routeTo()">Read More</button>
        <div class="icon">
          <img src="/icons/Asset_2.svg" alt="Comment">
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
  .article-big-thumb-alternative {
    width: 650px;
    height: 280px;
    background: #b7e8cb;
    border: 3px solid #34b759;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    margin-bottom: 20px;
    img {
      width: 50%;
      height: 100%;
      object-fit: cover;
    }
    .body {
      padding: 0 10px;
      h1 {
        padding: 0;
        margin: 15px 0;
        font-size: 27px;
      }
      p {
        margin: 0;
        padding: 0;
        font-size: 24px;
      }
      .control {
        margin-top: 90px;
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
        .icon {
          width: 72px;
          height: 72px;
          border-radius: 72px;
          position: relative;
          margin-top: -45px;
          margin-right: -2px;
          img {
            color: #34b759;
            width: 72px;
            height: 72px;
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
    .article-big-thumb-alternative {
      width: 100%;
      height: 280px;
      display: flex;
      margin: 10px 0;
      box-sizing: border-box;
      img {
        height: 100%;
        width: 50%;
      }
      .body {
        width: 50%;
        h1 {
          font-size: 20px;
        }
        p {
          font-size: 16px;
          height: 90px;
        }
        .control {
          padding: 0;
          margin-top: 80px;
          button {
            width: 135px;
            height: 35px;
            font-size: 18px;
            margin-top: 0;
          }
          .icon {
            width: 72px;
            height: 72px;
            border-radius: 72px;
            margin-top: -32px;
            margin-right: 0;
            i {
              font-size: 40px;
              width: 40px;
              height: 40px;
            }
          }
        }
      }
    }
  }

  @media all and (max-width: 550px) {
    .article-big-thumb-alternative {
      .body {
        .control {
          button {
            margin-left: -152px;
          }
        }
      }
    }
  }
</style>
