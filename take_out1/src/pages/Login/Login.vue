<template>
    <section class="content">
        <div class="on">
        <section class="loginContainer">
            <div class="loginInner">
                <div class="login_header">
                    <h2 class="login_logo">硅谷外卖</h2>
                    <div class="login_header_title">
                        <a href="javascript:;" :class="{on:flag}" @click="flag=true">短信登录</a>
                        <a href="javascript:;" :class="{on:!flag}" @click="flag=false">密码登录</a>
                    </div>
                </div>
                <div class="login_content">
                    <form>
                        <div :class="{on:flag}" @click="flag=true">
                            <section class="login_message">
                                <input type="tel" maxlength="11" placeholder="手机号" v-model="phone" name="phone" v-validate="`mobile|required`">
                                <span style="color: red;" v-show="errors.has('phone')">{{ errors.first('phone')}}</span>
                                <button :disabled="getCode?false:true"
                                        :class="['get_verification' ,{isLight:getCode}]"
                                        @click.prevent="handC">
<!--                                    {{times>0?'已发送验证码`${times}s`':"获取验证码"}}-->
                                    {{times > 0 ? `已发送验证码(${times})s`:"获取验证码"}}
                                </button>
                            </section>
                            <section class="login_verification">
                                <input type="tel" maxlength="8" placeholder="验证码" v-model="code" name="code" v-validate="{required: true,regex: /^\d{6}$/}" >
                                <span style="color: red;" v-show="errors.has('code')">{{ errors.first('code') }}</span>
<!--                                <input type="tel" maxlength="8" placeholder="验证码">-->
                            </section>
                            <section class="login_hint">
                                温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
                                <a href="javascript:;">《用户服务协议》</a>
                            </section>
                        </div>
                        <div :class="{on:!flag}" @click="flag=false">
                            <section>
                                <section class="login_message">
                                    <input type="text" placeholder="手机/邮箱/用户名"
                                           v-model="name" name="name" v-validate="'required'">
                                    <span style="color: red;" v-show="errors.has('name')">{{ errors.first('name') }}</span>
<!--                                    <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名">-->
                                </section>
                                <section class="login_verification">
                                    <input :type="btn ? 'password' : 'tell'"  maxlength="8" placeholder="密码"   v-model="pwd" name="pwd" v-validate="'required'">
                                    <span style="color: red;" v-show="errors.has('pwd')">{{ errors.first('pwd') }}</span>
                                    <div class="switch_button" :class="btn?'on':'off'" @click="btn=!btn">
                                        <div class="switch_circle" :class="btn?'on':'off'"></div>
                                        <span class="switch_text">{{btn?'abc':''}}</span>
                                    </div>
                                </section>
                                <section class="login_message">
                                    <input type="text" maxlength="11" placeholder="验证码"
                                           v-model="captcha" name="captcha" v-validate="{required: true,regex: /^[0-9a-zA-Z]{4}$/}">
                                    <span style="color: red;" v-show="errors.has('captcha')">{{ errors.first('captcha') }}</span>
                                    <img class="get_verification" src="http://localhost:4000/captcha" alt="captcha" @click="getImg" ref="getIamge">
                                </section>
                            </section>
                        </div>
                        <button class="login_submit" @click.prevent="Submission">登录</button>
                    </form>
                    <a href="javascript:;" class="about_us">关于我们</a>
                </div>
                <a href="javascript:" class="go_back" @click="$router.replace('./profile')">
                    <i class="iconfont icon-jiantou2"></i>
                </a>
            </div>
        </section>
    </div>
    </section>
</template>

<script>
    import {mapActions} from "vuex"
  export default {
    name: "Login",
    data(){
      return{
        flag:true, //表示短信登录
        btn:false,
        times:0,

        captcha:"",
        pwd:"",
        name:"",
        code:"",
        phone:""
      }
    },
    methods:{
      //注册一把登录的请求
      ...mapActions(["userLogin"]),
      //点击验证码更新验证码
      getImg(){
        // console.log(this.$refs.getIamge.src);
        // this.$refs.getIamge.src=`http://localhost:4000/captcha?time=${Date.now()}`
        this.$refs.getIamge.src=`http://localhost:4000/captcha?time=${Date.now()}`
      },
      async handC(){
       this.times = 10;
        const timer = setInterval(()=>{
          this.times --;
          if(this.times === 0 ){
            clearInterval(timer)
          }
        },1000)
       // 点击后要发送请求，获取短信验证码
       const res=await this.$http.login.getIdentifyingCode({
          phone:this.phone
        })
       //此时发送验证码成功后times要为0,方便可以点击
       (res.code===0)&&(this.times=0)
        // console.log(this.times);
      },
      async Submission(){
        //对表单进行统一验证
        if(this.flag){
          //短信登录
          const success = await this.$validator.validateAll(["phone","code"])
          this.userLogin({flag:this.flag,data:{phone:this.phone,code:this.code}})
        }else{
          //用户名登录
          const success = await this.$validator.validateAll(["name","pwd","captcha"])

          //点击发送用户名登录的请求
            this.userLogin({flag:this.flag,data:{name:this.name,pwd:this.pwd,captcha:this.captcha},updateImage:this.getImg})
        }
      }
    },
    computed:{
      getCode(){
        return /^1\d{10}$/.test(this.phone)
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .content
        .loginContainer
            width 100%
            height 100%
            background #fff
            .loginInner
                padding-top 60px
                width 80%
                margin 0 auto
                .login_header
                    .login_logo
                        font-size 40px
                        font-weight bold
                        color #02a774
                        text-align center
                    .login_header_title
                        padding-top 40px
                        text-align center
                        >a
                            color #333
                            font-size 14px
                            padding-bottom 4px
                            &:first-child
                                margin-right 40px
                            &.on
                                color #02a774
                                font-weight 700
                                border-bottom 2px solid #02a774
                .login_content
                    >form
                        >div
                            display none
                            &.on
                                display block
                            input
                                width 100%
                                height 100%
                                padding-left 10px
                                box-sizing border-box
                                border 1px solid #ddd
                                border-radius 4px
                                outline 0
                                font 400 14px Arial
                                &:focus
                                    border 1px solid #02a774
                            .login_message
                                position relative
                                margin-top 16px
                                height 48px
                                font-size 14px
                                background #fff
                                .get_verification
                                    position absolute
                                    top 50%
                                    right 10px
                                    transform translateY(-50%)
                                    border 0
                                    color #ccc
                                    font-size 14px
                                    background transparent
                                    &.isLight
                                        color #80347e
                            .login_verification
                                position relative
                                margin-top 16px
                                height 48px
                                font-size 14px
                                background #fff
                                .switch_button
                                    font-size 12px
                                    border 1px solid #ddd
                                    border-radius 8px
                                    transition background-color .3s,border-color .3s
                                    padding 0 6px
                                    width 30px
                                    height 16px
                                    line-height 16px
                                    color #fff
                                    position absolute
                                    top 50%
                                    right 10px
                                    transform translateY(-50%)
                                    &.off
                                        background #fff
                                        .switch_text
                                            float right
                                            color #ddd
                                    &.on
                                        background #02a774
                                    >.switch_circle
                                        position absolute
                                        top -1px
                                        left -1px
                                        width 16px
                                        height 16px
                                        border 1px solid #ddd
                                        border-radius 50%
                                        background #fff
                                        box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                                        transition transform .3s
                                        &.on
                                            transform translateX(27px)
                            .login_hint
                                margin-top 12px
                                color #999
                                font-size 14px
                                line-height 20px
                                >a
                                    color #02a774
                        .login_submit
                            display block
                            width 100%
                            height 42px
                            margin-top 30px
                            border-radius 4px
                            background #4cd96f
                            color #fff
                            text-align center
                            font-size 16px
                            line-height 42px
                            border 0
                    .about_us
                        display block
                        font-size 12px
                        margin-top 20px
                        text-align center
                        color #999
                .go_back
                    position absolute
                    top 5px
                    left 5px
                    width 30px
                    height 30px
                    >.iconfont
                        font-size 20px
                        color #999
</style>
