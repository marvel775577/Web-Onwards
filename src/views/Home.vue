<template>
  <div>
    <div class="wrap">
      <BigBanner/>
    </div>
    <div class="wrap card-wrap wrap-resp">
      <div class="card">
        <p class="body">Our free tools have already helped so many people.</p>
        <div class="control">
          <h1>Why not try them today ?</h1>
          <img src="/icons/Asset_12_2x.png" class="mobile-icon">
        </div>
      </div>
      <Card title="Driver's Checklist"
            body="Creates a personal checklist for drivers which explains what you need to do after being diagnosed with
            dementia."
            :path="{name: 'driver-checklist'}"
            background="#00b65f"/>
      <Card title="Cost Calculator"
            body="Helps ypu calculate what you spend on vehicle and how to save money using alternative transport."
            :path="{name: 'cost-calculator'}"
            background="#3ca4f4"/>
      <Card title="Journey Planner"
            body="Allows you to plan your journeys so that you can easily find your way without needing a car"
            background="#ff8e33"/>
    </div>
  </div>
</template>

<script>

import BigBanner from '@/components/BigBanner.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'home',
  components: {
    BigBanner,
    Card
  },
  created () {
    window.bus.$on('routeTo', (data) => {
      this.$router.push({
        name: data.name,
        query: {
          breadcrumb: data.breadcrumb
        },
        params: {
          id: data.id
        }
      })
    })
  }
}

</script>

<style lang="scss">
  .card {
    width: 310px;
    height: 285px;
    margin-top: 10px;
    background: #f9c536;
    margin-bottom: 20px;
    .body{
      height: 180px;
      font-size: 26px;
      margin-top: 13px;
    }
    .control{
      display: flex;
      justify-content: space-around;
      position: relative;
      padding-left: 10px;
      img{
        width: 60px;
        height: 50px;
        margin: 20px 20px 0 0;
      }
    }
  }
  @media all and (max-width: 891px){
    .card-wrap {
      display: block;
    }
    .card{
      width: 100%;
      height: 200px;
      overflow: hidden;
      margin-top: 0;
      margin-bottom: 20px;
      .body{
        font-size: 20px;
        height: 110px;
        padding: 0 10px;
      }
      .control{
        padding: 0;
        width: 94%;
        margin: auto;
        justify-content: space-between;
        h1{
          font-size: 18px;
          margin-left: 0;
          padding: 25px 0;
        }
        i{
          font-size: 20px;
          margin: 28px 10px 0 0;
          width: auto;
          height: auto;
        }
        .desktop-icon {
          display: none;
        }
        .mobile-icon {
          display: block;
          transform: rotate(90deg);
          margin: 18px 0 0 0;
          height: 40px;
          width: 40px;
        }
      }
    }
  }
</style>
