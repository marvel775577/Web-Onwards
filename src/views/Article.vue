<template>
  <div class="article">
    <div class="wrap">
      <div class="body">
        <div class="content">
          <h1>{{ this.title }}</h1>
          <img
            v-if="image"
            src="https://ane4bf-datap1.s3-eu-west-1.amazonaws.com/wmocms/s3fs-public/styles/featured_media_detail/public/OceansJames_St._JohnFlickr.jpg?B6OLz3xbs7_r_ttzkutmzDH3TsZyVnyA&itok=0DEsgy0J" alt="Background">
          <div v-html="content"></div>
          <div v-if="pdf">
            <button :style="{ backgroundColor: sidebarData.articleSmallThumb.color }">Download PDF</button>
          </div>
        </div>
        <div class="sidebar">
          <small-banner
            :title="sidebarData.smallBanner.title"
          />
          <small-configure-thumb
            :title="sidebarData.smallConfigureThumb.title"
            :body="sidebarData.smallConfigureThumb.body"
            :color="sidebarData.smallConfigureThumb.color"
            v-if="thumb"
          />
          <article-small-thumb
            v-for="article in featured"
            :key="article.id"
            :title="article.title"
            :body="article.short_text"
            :color="sidebarData.articleSmallThumb.color"
            :path="{name: sidebarData.articleSmallThumb.link, id: article.slug, breadcrumb: article.breadcrumbs}"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleSmallThumb from '@/components/ArticleSmallThumb'
import SmallConfigureThumb from '@/components/SmallConfigureThumb'
import SmallBanner from '@/components/SmallBanner'

export default {
  name: 'Article',
  components: {
    SmallBanner,
    ArticleSmallThumb,
    SmallConfigureThumb
  },
  computed: {
    articles: function () {
      return this.$store.state.articles
    },
    sidebarData: function () {
      let data = {
        smallBanner: {},
        smallConfigureThumb: {},
        articleSmallThumb: {}
      }
      if (this.$route.matched[0].path === '/stopping-driving') {
        data.smallBanner.title = 'We are here to help you find your way when you stop driving.'
        data.smallConfigureThumb.title = 'Driver\'s Checklist'
        data.smallConfigureThumb.body = 'Creates a personal checklist for drivers which explains what you need to do after being diagnosed with dementia.'
        data.smallConfigureThumb.color = '#34b759'
        data.smallConfigureThumb.link = 'stopping-driving-article'
        data.articleSmallThumb.color = '#34b759'
      } else if (this.$route.matched[0].path === '/cost-of-transport') {
        data.smallBanner.title = "We can <span class='bold'>help you</span> when the DVLA tell you to stop driving."
        data.smallConfigureThumb.title = 'Cost Calculator'
        data.smallConfigureThumb.body = 'Helps you calculate what you spend on your vehicle and how to save money using alternative transport.'
        data.smallConfigureThumb.color = '#3ca4f4'
        data.smallConfigureThumb.link = 'cost-of-transport-article'
        data.articleSmallThumb.color = '#3ca4f4'
      } else if (this.$route.matched[0].path === '/plan-your-travel') {
        data.smallBanner.title = "We can <span class='bold'>help you</span> when the DVLA tell you to stop driving."
        data.smallConfigureThumb.title = 'Journey Planner'
        data.smallConfigureThumb.body = 'Allows you to plan your journeys si that you can easily find your way without needing a car.'
        data.smallConfigureThumb.color = '#FF8E20'
        data.smallConfigureThumb.link = 'plan-your-travel-article'
        data.articleSmallThumb.color = '#FF8E20'
      } else {
        data.smallBanner.title = "We can <span class='bold'>help you</span> when the DVLA tell you to stop driving."
        data.articleSmallThumb.title = 'Concessions'
        data.articleSmallThumb.body = 'The National Entitlement Card allows free bus travel around Scotland for over 60\'s and for people with a disability.'
        if (this.$route.matched[0].path === '/family-and-carer-support') {
          data.articleSmallThumb.color = '#C36ED1'
        } else {
          data.articleSmallThumb.color = '#FC5643'
        }
      }
      return data
    }
  },
  data () {
    return {
      content: null,
      title: null,
      image: false,
      thumb: false
    }
  },
  created () {
    this.update()
  },
  beforeUpdate () {
    this.update()
  },
  methods: {
    update: function () {
      let item = this.articles.filter(e => e.section === this.$route.meta.breadcrumb[0].name && e.breadcrumbs === this.$route.meta.breadcrumb[1].name)[0]
      this.content = item.content
      this.title = item.title
      this.image = item.image
      this.pdf = item.pdf
      if (this.$route.matched[0].path === '/stopping-driving' || this.$route.matched[0].path === '/cost-of-transport' || this.$route.matched[0].path === '/plan-your-travel') {
        this.thumb = true
      }
      let temp = this.articles.filter(e => e.section === this.$route.meta.breadcrumb[0].name && e.title !== this.title)
      let count = 2
      if (this.thumb) {
        count = 1
      }
      this.featured = this.getRandom(temp, count)
    },
    getRandom: (arr, n) => {
      let result = new Array(n)

      let len = arr.length

      let taken = new Array(len)
      if (n > len) { throw new RangeError('getRandom: more elements taken than available') }
      while (n--) {
        let x = Math.floor(Math.random() * len)
        result[n] = arr[x in taken ? taken[x] : x]
        taken[x] = --len in taken ? taken[len] : len
      }
      return result
    }
  }
}
</script>

<style lang="scss">
  .article {
    .body {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .content {
        width: 70%;
        padding: 0 20px 0 0;
        img {
          width: 90%;
        }
        button {
          width: 135px;
          height: 35px;
          border-radius: 5px;
          border: none;
          color: #302c2d;
          font-weight: 700;
        }
      }
      .sidebar{
        height: auto;
        display: flex;
        flex-direction: column;
        div {
          margin-bottom: 20px;
        }
      }
    }
    .small-banner {
      width: 310px;
    }
  }
  @media all and (max-width: 891px) {
    .article{
      .body{
        display: block;
        .content{
          width: 100%;
        }
        .sidebar{
          height: auto;
          display: block;
        }
      }
      .small-banner {
        width: 100%;
      }
      .small-configure-thumb {
        width: 100%;
      }
    }
  }
</style>
