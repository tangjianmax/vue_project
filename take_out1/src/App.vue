<template>
    <div id="app">
        <router-view></router-view>
        <FooterGuide v-if="$route.path!=='/login'"></FooterGuide>
    </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide"
import {mapActions} from "vuex"
export default {
  name: 'app',
  components:{
    "FooterGuide":FooterGuide
  },
  methods: {
    ...mapActions(["autoLogin"])
  },
  created() {
        this.autoLogin()
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
   #app
        width 100%
        height 100%
        background #f5f5f5
        position relative
</style>
