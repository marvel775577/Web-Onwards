<template>
  <div class="small-banner">
    <h1 v-html="title"></h1>
    <hr>
    <p>Need help with travel ?</p>
    <p class="phone"><span class="bold">Call 0101 111222</span></p>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="scss">
  .small-banner{
    width: 317px;
    height: 280px;
    background: #f6c600;
    padding: 15px 60px 0 20px;
    box-sizing: border-box;
    h1{
      font-size: 27px;
      font-weight: 400;
      margin: 0;
      height: 160px;
    }
    hr{
      display: block;
      height: 1px;
      border: 0;
      border-top: 3px solid #000;
      padding: 0;
      width: 110px;
      margin: 7px 0 0 0;
    }
    p{
      margin: 19px 0 0;
      font-size: 17px;
    }
    .phone{
      margin: 0;
    }
  }

  @media all and (max-width: 891px){
    .small-banner{
      width: auto;
      margin: 10px 0;
      padding: 0 10px;
      h1{
        margin: 15px 0 5px;
      }
      p{
        font-size: 18px;
      }
    }
  }
</style>
