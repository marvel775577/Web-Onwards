<template>
  <div class="banner">
    <div class="img">
      <img src="https://ane4bf-datap1.s3-eu-west-1.amazonaws.com/wmocms/s3fs-public/styles/featured_media_detail/public/OceansJames_St._JohnFlickr.jpg?B6OLz3xbs7_r_ttzkutmzDH3TsZyVnyA&itok=0DEsgy0J" alt="Background-image">
    </div>
    <div class="content">
      <h1>We are here to <span class="bold">help you</span> find your way when you stop driving.</h1>
      <hr>
      <p>Need help with travel ?</p>
      <p><span class="bold">Call 0101 111222</span></p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'banner',
  components: {}
}

</script>

<style lang="scss">
  .banner{
    margin-top: 10px;
    height: 270px;
    display: flex;
    justify-content: space-between;
    flex: 1 0 50%;
    .img{
      width: 49%;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .content{
      width: 49%;
      background: #f6c600;
      padding: 15px;
      box-sizing: border-box;
      min-height: 100%;
      h1{
        margin: 0;
        font-weight: 400;
        font-size: 35px;
        color: #221f20;
      }
      hr{
        display: block;
        height: 1px;
        border: 0;
        border-top: 3px solid #000;
        padding: 0;
        width: 35%;
        margin: 5px 0 0 0;
      }
      p{
        margin: 10px 0;
        font-size: 18px;
      }
    }
  }
  @media all and (max-width: 891px) {
    .wrap{
      flex-wrap: wrap;
    }
    .banner{
      display: block;
      margin-top: 0;
      height: auto;
      .img{
        width: 100%;
        img{
          width: 100%;
        }
      }
      .content{
        width: 100%;
        height: auto;
        min-height: auto;
        h1{
          font-size: 25px;
        }
        p{
          font-size: 16px;
        }
      }
    }
  }
</style>
