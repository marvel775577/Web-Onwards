<template>
  <div>
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
          title="Driver's Checklist"
          class="grid-item"
          body="Drivers can answer a few simple questions and we will create a personal checklist which explains what you need to do after being diagnosed with dementia."
          color="#34b759"
          :path="{name: 'driver-checklist'}"
          :large="true"
        />
        <article-big-thumb-alternative
          image="https://ane4bf-datap1.s3-eu-west-1.amazonaws.com/wmocms/s3fs-public/styles/featured_media_detail/public/OceansJames_St._JohnFlickr.jpg?B6OLz3xbs7_r_ttzkutmzDH3TsZyVnyA&itok=0DEsgy0J"
          :title="featured.title"
          class="grid-item"
          :body="featured.short_text"
          primaryColor="#b7e8cb"
          secondaryColor="#34b759"
          :path="{name: 'stopping-driving-article', id: featured.slug, breadcrumb: featured.breadcrumbs}"
        />
        <article-small-thumb
          v-for="(article, i) in articles"
          class="grid-item"
          :key="i"
          :title="article.title"
          :body="article.short_text"
          color="#34b759"
          :large="article.thumbnail_option === 'wide'"
          :path="{name: 'stopping-driving-article', id: article.slug, breadcrumb: article.breadcrumbs}"
        />
      </div>
      </aside>
    </div>
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
  name: 'StoppingDriving',
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
      if (el.section === 'Stopping Driving' && !el.featured) return el
    })
    this.featured = this.$store.state.articles.filter((el) => {
      if (el.section === 'Stopping Driving' && el.featured) return el
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

<style lang="scss">
  aside {
    max-width: 1330px;
    margin: auto;
  }
  .wrap {
    margin-bottom: 20px;
    flex-wrap: wrap;
  }

  .row {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .active-stopping-driving {
    border-bottom: 3px solid #00B65C;
  }

  @media all and (max-width: 768px) {
    .row {
      flex-direction: column;
    }
    .active-stopping-driving {
      border-bottom: 3px solid #00B65C;
    }
  }
</style>
