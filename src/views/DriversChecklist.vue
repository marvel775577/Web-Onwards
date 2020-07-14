<template>
  <div class="drivers-checklist">
    <div class="wrap">
      <section class="right">
        <drivers-cheklist-form/>
        <div class="wrap wrap-inner">
          <div class="card">
            <p class="body">Our free tools have already helped so many people.</p>
            <div class="control">
              <h1>Why not try them today ?</h1>
              <img src="/icons/Asset_12_2x.png" class="mobile-icon">
            </div>
          </div>
          <Card title="Cost Calculator"
                body="Helps ypu calculate what you spend on vehicle and how to save money using alternative transport."
                background="#3ca4f4"/>
          <Card title="Journey Planner"
                body="Allows you to plan your journeys so that you can easily find your way without needing a car"
                background="#ff8e33"/>
        </div>
      </section>
      <section class="left">
        <small-banner
          title="We are here to <span class='bold'>help you</span> find your way."
        />
      </section>
    </div>
  </div>
</template>

<script>
import DriversCheklistForm from '@/components/DriversCheklistForm'
import SmallBanner from '@/components/SmallBanner'
import Card from '@/components/Card.vue'

export default {
  components: {
    DriversCheklistForm,
    SmallBanner,
    Card
  }
}
</script>

<style lang="scss">
  .drivers-checklist {
    margin-bottom: 50px;
    .wrap-inner {
      margin-top: 20px;
      margin-left: -10px;
    }
    .right {
      width: 75%;
      .wrap-inner {
        height: auto;
      }
    }
    .left {
      width: 20%;
      .small-banner {
        margin: -20px auto 0;
      }
    }
  }

  @media all and (max-width: 891px){
    .drivers-checklist {
      .wrap {
        display: block;
      }
      .right {
        width: auto;
        display: block;
      }
      .left {
        width: auto;
      }
    }
  }
</style>
