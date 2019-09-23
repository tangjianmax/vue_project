<template>
    <section class="content">
        <!--首页外卖-->
        <div class="on">
            <section class="msite">
                <!--首页头部-->
                <commonHeader :title="adress.name">
                   <span class="header_search" slot="left">
                      <i class="iconfont icon-sousuo"></i>
                    </span>
<!--                    <span class="header_title">-->
<!--                        <span class="header_title_text ellipsis">昌平区北七家宏福科技园(337省道北)</span>-->
<!--                     </span>-->
                    <span class="header_login" slot="right">
                        <span class="header_login_text">登录|注册</span>
                    </span>
                </commonHeader>
                <!--首页导航-->
                <nav class="msite_nav">
                    <swiper ></swiper>
<!--                    <div class="swiper-container">-->
<!--                        <div class="swiper-wrapper">-->
<!--                            <div class="swiper-slide" v-for=" items in Category">-->
<!--                                <a href="javascript:" class="link_to_food" v-for="item in items">-->
<!--                                    <div class="food_container">-->
<!--                                        <img src="./images/nav/1.jpg">-->
<!--                                    </div>-->
<!--                                    <span>甜品饮品</span>-->
<!--                                </a>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <van-swipe :autoplay="3000" indicator-color="red" class="swiper-wrapper">-->
<!--                            <van-swipe-item class="swiper-slide" >1</van-swipe-item>-->
<!--                            <van-swipe-item class="swiper-slide" >2</van-swipe-item>-->
<!--                        </van-swipe>-->
                        <!-- Add Pagination -->
<!--                        <div class="swiper-pagination"></div>-->
<!--                    </div>-->
                </nav>
                <!--首页附近商家-->
                <shopList></shopList>
            </section>
        </div>
     </section>
</template>

<script>
    import shopList from "../../components/shopList/shopList"
    import commonHeader from "../../components/commonHeader/commonHeader"
    import {mapActions,mapState} from "vuex"
    // import _ from "lodash"
    import swiper from "../../components/swiper/swiper"
    // const SIZE = 8
  export default {
    name: "Msite",
    computed:{
      ...mapState(["adress"]),
      // Category(){
      //   return _.chunk(this.foodList, SIZE)
      // }
    },
    methods:{
      ...mapActions(["MisteAdress"])

    },
    components:{
      shopList,
      commonHeader,
      swiper
    },

    created() {
      this.MisteAdress()
      // this.getFoodList()
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/stylus/mixins.styl"
 .content  //每个页面的内容
        >div //决定哪个页面显示
            display none
            &.on
                display block
            >section
                &.msite  //首页
                    width 100%
                    .msite_nav
                        bottom-border-1px(#e4e4e4)
                        margin-top 45px
                        height 200px
                        background #fff
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
                            .swiper-pagination
                                >span.swiper-pagination-bullet-active
                                    background #02a774

</style>
