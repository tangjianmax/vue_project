<template>
    <div class="swiper-container">
<!--        <div >-->
            <van-swipe  class="swiper-wrapper" indicator-color="green">
                <van-swipe-item class="swiper-slide" v-for=" items in Category">
<!--                    <div >-->
                        <a href="javascript:" class="link_to_food" v-for="item in items">
                            <div class="food_container">
                                <img :src="imgUrl+item.image_url">
                            </div>
                            <span>{{item.title}}</span>
                        </a>
<!--                    </div>-->
                </van-swipe-item>
            </van-swipe>
<!--        </div>-->
    </div>
</template>


<script>
  import {mapActions,mapState} from "vuex"
  import _ from "lodash"
  import Vue from 'vue';
  import { Swipe, SwipeItem } from 'vant';
  Vue.use(Swipe).use(SwipeItem)
  const SIZE = 8
  export default {
    name: "swiper",
    computed:{
      ...mapState(["foodList","imgUrl"]),
      Category(){
        return _.chunk(this.foodList, SIZE)
      }
    },
    methods:{
      ...mapActions(["getFoodList"])
    },
    created() {
      this.getFoodList()
    },
    // updated() {
    //   console.log(this.Category)
    // }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/stylus/mixins.styl"
    .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
            width 100%
            height 100%
            .swiper-slide
                display flex
                justify-content center
                align-items flex-start
                flex-wrap wrap
                .link_to_food
                    width 25%
                    .food_container
                        display block
                        width 100%
                        text-align center
                        padding-bottom 10px
                        font-size 0
                        img
                            display inline-block
                            width 50px
                            height 50px
                    span
                        display block
                        width 100%
                        text-align center
                        font-size 13px
                        color #666
</style>
