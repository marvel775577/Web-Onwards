<template>
  <div>
    <div class="wrap">
      <div class="row">
        <Tip
          :large="true"
        />
        <small-banner
          title="We are here to <span class='bold'>help you</span> find your way."
        />
      </div>
    </div>
    <aside>
      <div class="wrap grid" ref="grid">
      <configure-thumb
        title="Journey Planner"
        body="When you stop driving, we want to make sure you can continue travelling. You can use our Journey Planner to find you way without needing car."
        color="#ff8e33"
        :path="{name: 'driver-checklist'}"
        :large="true"
      />
      <article-big-thumb-alternative
        image="https://ane4bf-datap1.s3-eu-west-1.amazonaws.com/wmocms/s3fs-public/styles/featured_media_detail/public/OceansJames_St._JohnFlickr.jpg?B6OLz3xbs7_r_ttzkutmzDH3TsZyVnyA&itok=0DEsgy0J"
        :title="featured.title"
        :body="featured.short_text"
        primaryColor="#ffdcb9"
        secondaryColor="#ff8e33"
        :path="{name: 'plan-your-travel-article', id: featured.slug, breadcrumb: featured.breadcrumbs}"
      />
      <article-small-thumb
        v-for="(article, i) in articles"
        class="grid-item"
        :key="i"
        :title="article.title"
        :body="article.short_text"
        color="#ff8e33"
        :large="article.thumbnail_option === 'wide'"
        :path="{name: 'plan-your-travel-article', id: article.slug, breadcrumb: article.breadcrumbs}"
      />
    </div>
    </aside>
  </div>
</template>

<script>

import ArticleBigThumbAlternative from '@/components/ArticleBigThumbAlternative'
import ArticleSmallThumb from '@/components/ArticleSmallThumb'
import ConfigureThumb from '@/components/ConfigureThumb'
import SmallBanner from '@/components/SmallBanner'
import Tip from '@/components/Tip'
import Masonry from 'masonry-layout'

export default {
  name: 'PlanYourTravel',
  components: {
    ArticleSmallThumb,
    ConfigureThumb,
    SmallBanner,
    Tip,
    ArticleBigThumbAlternative
  },
  data () {
    return {
      articles: [],
      featured: {},
      windowWidth: 0,
      msnry: null,
      msnryObject: {
        columnWidth: 30,
        fitWidth: true
      }
    }
  },
  watch: {
    windowWidth () {
      if (this.windowWidth < 891 && this.msnry) {
        this.msnry.destroy()
        this.msnry = null
      } else if (this.windowWidth > 891 && !this.msnry) {
        this.msnry = new Masonry(this.$refs.grid, this.msnryObject)
      }
    }
  },
  mounted () {
    this.msnry = new Masonry(this.$refs.grid, this.msnryObject)
  },
  created () {
    this.articles = this.$store.state.articles.filter((el) => {
      if (el.section === 'Plan Your Travel' && !el.featured) return el
    })
    this.featured = this.$store.state.articles.filter((el) => {
      if (el.section === 'Plan Your Travel' && el.featured) return el
    })[0]
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  methods: {
    handleResize () {
      this.windowWidth = window.innerWidth
    }
  }
}
</script>

<style>
  .wrap {
    margin-bottom: 20px;
  }

  aside {
    max-width: 1330px;
    margin: auto;
  }

  .row {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .active-plan-your-travel {
    border-bottom: 3px solid #FF8E20;
  }

  @media all and (max-width: 768px) {
    .row {
      flex-direction: column;
    }
    .active-plan-your-travel {
      border-bottom: 3px solid #FF8E20;
    }
  }
</style>
