<template>
  <div class="card" :style="{backgroundColor: background}">
    <h1>{{ this.title }}</h1>
    <p>{{ this.body }}</p>
    <div class="control">
      <button @click="routeTo()">Get Started</button>
      <div>
        <img src="/icons/Asset_1.svg" alt="Config">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: [
    'title',
    'body',
    'background',
    'path'
  ],
  name: 'card',
  methods: {
    routeTo () {
      console.log(this.path)
      window.bus.$emit('routeTo', {
        name: this.path.name
      })
    }
  }
}

</script>

<style lang="scss">
  .card {
    width: 310px;
    height: 285px;
    margin-top: 50px;
    h1 {
      font-size: 27px;
      padding: 13px 20px;
      margin: 0;
    }
    p {
      margin: 0;
      padding: 0 20px;
      font-size: 20px;
      height: 170px;
    }
    .control {
      display: flex;
      justify-content: space-around;
      margin-left: -5px;
      button {
        width: 165px;
        height: 40px;
        border-radius: 5px;
        border: none;
        font-size: 21px;
        font-weight: 700;
      }
      div {
        width: 70px;
        height: 70px;
        border-radius: 50px;
        position: relative;
        margin-top: -31px;
        margin-right: -5px;
        img {
          width: 70px;
          height: 60px;
          margin: 15px 20px 0 0;
        }
      }
    }
  }

  @media all and (max-width: 891px) {
    .card {
      h1 {
        font-size: 16px;
        padding: 10px;
      }
      p {
        font-size: 14px;
        padding: 10px;
        height: 115px;
      }
      .control {
        button{
          width: 75px;
          height: 20px;
          font-size: 10px;
        }
        div{
          width: 45px;
          height: 45px;
          img{
            margin: -6px 0 0 -20px;
          }
        }
      }
    }
  }
</style>
