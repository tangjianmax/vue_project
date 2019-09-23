<template>
    <div class="stars" :class="modelSiez">
        <div class="star" v-for="item in arr" :class="item"></div>
        <!--  <div class="star on"></div>
          <div class="star on"></div>
          <div class="star on"></div>
          <div class="star half"></div>
          <div class="star off"></div>-->
    </div>
</template>

<script>
  const ON = "on";
  const OFF = "off";
  const HALF = "half";
  const LENGTH = 5
  export default {
    name: "starts",
    props:{
      score:Number,
      model:Number,
    },
    computed:{
      modelSiez(){
        // console.log(this.model)
        return  `star_${this.model}`

      },
      arr(){
        const arr = []
        // console.log(this.score);
        let onModel = Math.floor((this.score)*2)/2
        let halfModel = onModel%1 !==0
        let offModel = 5-onModel-halfModel
        onModel=Math.floor(onModel)
        for (var i = 0; i < onModel; i++) {
          arr.push(ON)
        }
        if (halfModel) {
          arr.push(HALF)
        }
        // while (arr.length < LENGTH){
        //   arr.push(OFF)
        // }
        for (var i=0;i<offModel;i++){
          arr.push(OFF)
        }
        return arr
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/mix.styl"
    .stars
        /*display flex*/
        display inline-flex
        .start
            background-size 100% 100%
            background-repeat no-repeat
        &.star_48
            .star
                width 20px
                height 20px
                margin-right 20px
                &:last-child
                    margin-right 0
                &.on
                    bg-img(star48_on)
                &.half
                    bg-img(star48_half)
                &.off
                    bg-img(star48_off)
        &.star_36
            .star
                width 15px
                height 15px
                &.on
                    bg-img(star36_on)
                &.half
                    bg-img(star36_half)
                &.off
                    bg-img(star36_off)
        &.star_24
            .star
                width 10px
                height 10px
                &.on
                    bg-img(star24_on)
                &.half
                    bg-img(star24_half)
                &.off
                    bg-img(star24_off)
</style>
