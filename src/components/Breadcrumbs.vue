<template>
  <div class="breadcrumb">
    <ul>
      <li>
        You are here:
      </li>
      <li
        v-for="(breadcrumb, id) in breadcrumbList"
        :key="id"
        @click="routeTo(id)"
        :class="{'linked': !!breadcrumb.link}"> {{ breadcrumb.name }} /
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data () {
    return {
      breadcrumbList: []
    }
  },
  mounted () {
    this.updateList()
  },
  watch: {
    '$route' () {
      this.updateList()
    }
  },
  methods: {
    routeTo (pRouteTo) {
      if (this.breadcrumbList[pRouteTo].link) {
        this.$router.push(this.breadcrumbList[pRouteTo].link)
      }
    },
    updateList () {
      this.breadcrumbList = this.$route.meta.breadcrumb
    }
  }
}
</script>

<style lang="scss">
  .breadcrumb{
    margin-bottom: 39px;
    ul{
      list-style: none;
      padding: 0;
      margin-top: 2px;
      li{
        &:first-child{
          margin-left: 0;
          cursor: default;
        }
        color: #7c7c7c;
        float: left;
        margin-left: 5px;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }
</style>
