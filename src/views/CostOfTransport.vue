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
          title="Cost Calculator"
          body="Owning a vehicle can be expensive. Our free Cost Calculator helps tou calculate what you are currently spending on your vehicle each year .
                You can then explore how you could save money by using  alternative transport methods."
          color="#3ca4f4"
          :large="true"
          :path="{name: 'cost-calculator'}"
        />
        <article-big-thumb-alternative
          image="https://ane4bf-datap1.s3-eu-west-1.amazonaws.com/wmocms/s3fs-public/styles/featured_media_detail/public/OceansJames_St._JohnFlickr.jpg?B6OLz3xbs7_r_ttzkutmzDH3TsZyVnyA&itok=0DEsgy0J"
          :title="featured.title"
          :body="featured.short_text"
          primaryColor="#c5e4fb"
          secondaryColor="#3ca4f4"
          :path="{name: 'cost-of-transport-article', id: featured.slug, breadcrumb: featured.breadcrumbs}"
        />
        <article-small-thumb
          v-for="(article, i) in articles"
          class="grid-item"
          :key="i"
          :title="article.title"
          :body="article.short_text"
          color="#3ca4f4"
          :large="article.thumbnail_option === 'wide'"
          :path="{name: 'cost-of-transport-article', id: article.slug, breadcrumb: article.breadcrumbs}"
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
  name: 'CostOfTransport',
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
      if (el.section === 'Costs of Transport' && !el.featured) return el
    })
    this.featured = this.$store.state.articles.filter((el) => {
      if (el.section === 'Costs of Transport' && el.featured) return el
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

  .active-cost-of-transport {
    border-bottom: 3px solid #37A8F5;
  }

  @media all and (max-width: 891px) {
    .wrap {
      width: auto;
    }
    .row {
      flex-direction: column;
      width: auto;
    }
    .active-cost-of-transport {
      border-bottom: 3px solid #37A8F5;
    }
  }
</style>
