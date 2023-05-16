<template>
  <view data-v-8ac67f18="" class="content">
    <view data-v-8ac67f18="" class="top_kong"></view>
    <view data-v-8ac67f18="" class="top_box">
      <image @click="goback" data-v-8ac67f18="" src="../../static/ico_dl_gb@2x.png">

      </image>
      <view data-v-8ac67f18="" class="top_box_right">注册</view>
    </view>
    <view data-v-8ac67f18="" class="login_box">
      <view data-v-8ac67f18="" class="login_title">账号密码登录</view>
      <view data-v-8ac67f18="" class="login_input_box">
        <view data-v-8ac67f18="" class="login_input_item">

          <div class="input-wrapper">

            <input v-model.trim="form.account" placeholder="请输入账号" maxlength="140" step="0.000000000000000001"
              enterkeyhint="done" autocomplete="off" type="number" class="input-input">
            <!---->
          </div>

          <image @click="cleardata" v-show="form.account" data-v-8ac67f18="" class="clear_btn" style=""
            src="../../static/ico_gb@2x.png">

            <!---->
          </image>
        </view>
        <view data-v-8ac67f18="" class="login_input_item">

          <div class="input-wrapper">

            <input v-model.trim="form.password" placeholder="请输入6~16位密码" maxlength="140" step="0.000000000000000001"
              enterkeyhint="done" autocomplete="off" class="input-input" ref="paswinput" type="password">
            <!---->
          </div>
          <view class="">
            <image @click="cleardatas" v-show="form.password" data-v-8ac67f18="" class="clear_btn" style=""
              src="../../static/ico_gb@2x.png">

              <!---->
            </image>
            <image @click="toggle" v-show="flag" data-v-8ac67f18="" class="clear_btn" style=""
              src="../../static/ico_zy@2x(1).png" style="width: 13px;height: 8px; margin-left:7px;">

              <!---->
            </image>
            <image @click="toggle" v-show="!flag" data-v-8ac67f18="" class="clear_btn" style=""
              src="../../static/ico_zy@2x.png" style="width: 13px;height: 8px; margin-left:7px;">

              <!---->
            </image>
          </view>



        </view>

      </view>
      <view @click="Login" data-v-8ac67f18="" class="login_btn" :class="{login_btn1:activeclass}">登录</view>
      <view data-v-8ac67f18="" class="login_other_box">
        <view data-v-8ac67f18="" class="login_other_l">
          <image @click="isrember=!isrember" v-show="!isrember" data-v-8ac67f18=""
            src="../../static/ico_dl_jzzh_nor@2x.png">

            <!---->
          </image>
          <image @click="isrember=!isrember" v-show="isrember" data-v-8ac67f18="" src="../../static/ico_dl_jzzh@2x.png">

            <!---->
          </image>
          <view data-v-8ac67f18="">记住账号</view>
        </view>
        <view data-v-8ac67f18="" class="login_other_r">忘记密码？</view>
      </view>
    </view>
    <view data-v-8ac67f18="" class="btm_box">登录即代表您已同意<text data-v-8ac67f18="" class="xy_color">
        <span>《用户协议》</span></text>与<text data-v-8ac67f18="" class="xy_color"><span>《隐私政策》</span></text>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        flag: true,
        form: {
          account: null,
          password: null,
          token: ""
        },
        isLogin: null,
        isrember: false,

      };
    },
    methods: {
      async Login() {
        if (this.isLogin) {
          const {
            data: res
          } = await uni.$http.post('/user/login', this.form);
          if (res.code !== 1) return uni.$showMsg(res.msg)
          uni.$showMsg(res.msg)
          // 13888888888
          const token = res.data.userinfo.token
          console.log(token);

        }
      },
      // #region
      cleardata() {
        this.form.account = ""
      },
      cleardatas() {
        this.form.password = ""
      },
      toggle() {
        this.flag = !this.flag
        console.log(this.flag);

        if (!this.flag) {
          this.$nextTick(() => {
            this.$refs.paswinput.type = "number"
          })

        } else {

          this.$nextTick(() => {
            this.$refs.paswinput.type = "password"
          })
        }

      },
      goback() {
        uni.switchTab({
          url: '/pages/my/my',
        })
      }
      //#endregion
    },
    computed: {

      activeclass() {
        this.isLogin = Boolean(this.form.account && this.form.password)
        return this.isLogin

      },




    }
  }
</script>

<style lang="scss">
  view,
  input {
    box-sizing: border-box;
  }


  .content[data-v-8ac67f18] {
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    overflow: hidden;

    .btm_box[data-v-8ac67f18] {
      width: 100%;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      font-size: 11px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #999;
      position: absolute;
      bottom: 20px;

      .xy_color[data-v-8ac67f18] {
        font-size: 11px;
        color: #333;
      }
    }

    .login_box[data-v-8ac67f18] {
      width: 100%;
      margin-top: 10%;
      height: 275px;

      .login_other_box[data-v-8ac67f18] {
        width: 80%;
        margin: auto;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        margin-top: 20px;

        .login_other_l[data-v-8ac67f18] {
          display: -webkit-box;
          display: -webkit-flex;
          display: flex;
          -webkit-box-pack: start;
          -webkit-justify-content: flex-start;
          justify-content: flex-start;
          -webkit-box-align: center;
          -webkit-align-items: center;
          align-items: center;
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #666;

          image[data-v-8ac67f18] {
            width: 13px;
            height: 13px;
            margin-right: 5px;
          }

          image {
            max-width: 100%;
            display: inline-block;
            position: relative;
            z-index: 0;
          }
        }

        .login_other_r[data-v-8ac67f18] {
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #666;
        }
      }

      .login_btn[data-v-8ac67f18] {
        width: 80%;
        height: 44px;
        margin: auto;
        background: #ddd;
        border-radius: 5px;
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #fff;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        margin-top: 30px;
      }

      .login_btn1[data-v-8ac67f18] {
        width: 80%;
        height: 44px;
        margin: auto;
        background: -webkit-linear-gradient(left, #ffdd47, #fcb630);
        background: linear-gradient(90deg, #ffdd47, #fcb630);
        border-radius: 5px;
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #fff;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        margin-top: 30px;
      }

      .login_title[data-v-8ac67f18] {
        width: 80%;
        margin: auto;
        font-size: 22px;
        font-family: PingFang SC;
        font-weight: 700;
        color: #333;
      }

      .login_input_box[data-v-8ac67f18] {
        width: 80%;
        height: 100px;
        margin: 0 auto;
        margin-top: 20px;

        .login_input_item[data-v-8ac67f18] {
          width: 100%;
          height: 50px;
          display: -webkit-box;
          display: -webkit-flex;
          display: flex;
          align-items: center;
          border-bottom: 0.5px solid #e5e5e5;

          justify-content: space-between;



          .clear_btn[data-v-8ac67f18] {
            width: 13px;
            height: 13px;
            max-width: 100%;
            display: inline-block;
            position: relative;
            z-index: 0;

          }

          input[data-v-8ac67f18] {
            width: 80%;


          }

          input[data-v-8ac67f18] {
            display: block;
            font-size: 16px;
            line-height: 1.4em;
            height: 1.4em;
            min-height: 1.4em;
            overflow: hidden;
          }
        }
      }



    }

    .top_kong[data-v-8ac67f18] {
      width: 100%;
      height: 0;
    }

    .top_box[data-v-8ac67f18] {
      width: 100%;
      height: 50px;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      padding: 0 15px;

      image[data-v-8ac67f18] {
        width: 18px;
        height: 18px;
      }

      .top_box_right[data-v-8ac67f18] {
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #333;
      }

      image {
        max-width: 100%;
        display: inline-block;
        position: relative;
        z-index: 0;
      }
    }



  }
</style>
