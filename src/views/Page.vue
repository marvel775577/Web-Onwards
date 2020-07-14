<template>
  <div>
    <div class="wrap">
      <Breadcrumbs/>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs'
export default {
  components: {
    Breadcrumbs
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
  .column{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .grid {
    margin: 0 auto;
    .article-small-thumb {
      width: 320px;
    }
    .article-small-thumb-large {
      width: 650px;
    }
  }
</style>
