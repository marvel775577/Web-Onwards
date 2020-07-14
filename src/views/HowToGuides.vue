<template>
  <div>
    <aside>
      <div class="wrap grid" ref="grid">
      <article-big-thumb-alternative
        image="https://ane4bf-datap1.s3-eu-west-1.amazonaws.com/wmocms/s3fs-public/styles/featured_media_detail/public/OceansJames_St._JohnFlickr.jpg?B6OLz3xbs7_r_ttzkutmzDH3TsZyVnyA&itok=0DEsgy0J"
        :title="featured.title"
        :body="featured.short_text"
        primaryColor="#ef9a9a"
        secondaryColor="#FC5643"
        :path="{name: 'how-to-guides-article', id: featured.slug, breadcrumb: featured.breadcrumbs}"
      />
      <article-small-thumb
        v-for="(article, i) in articles"
        class="grid-item"
        :key="i"
        :title="article.title"
        :body="article.short_text"
        color="#FC5643"
        :large="article.thumbnail_option === 'wide'"
        :path="{name: 'how-to-guides-article', id: article.slug, breadcrumb: article.breadcrumbs}"
      />
    </div>
    </aside>
  </div>
</template>

<script>
import ArticleBigThumbAlternative from '@/components/ArticleBigThumbAlternative'
import ArticleSmallThumb from '@/components/ArticleSmallThumb'
import Masonry from 'masonry-layout'

export default {
  name: 'HowToGuides',
  components: {
    ArticleSmallThumb,
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
      if (el.section === 'How to Guides' && !el.featured) return el
    })
    this.featured = this.$store.state.articles.filter((el) => {
      if (el.section === 'How to Guides' && el.featured) return el
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
    flex-wrap: wrap;
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

  .active-how-to-guides {
    border-bottom: 3px solid #FC5643;
  }

  @media all and (max-width: 768px) {
    .row {
      flex-direction: column;
    }
    .active-how-to-guides {
      border-bottom: 3px solid #FC5643;
    }
  }
</style>
