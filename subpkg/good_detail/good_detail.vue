<template>
  <view data-v-b9f92768="" class="box">
    <view data-v-b9f92768="" class="kong_border"></view>
    <view data-v-b9f92768="" class="border">
      <view data-v-b9f92768="" class="border_top flexs2">
        <image @click="goback" data-v-b9f92768="" class="back_image" src="../../static/ico_dh_bk@2x.png">

          <!---->
        </image>
        <view data-v-b9f92768="" class="topbiao">课程详情</view>
        <view data-v-b9f92768="" class="text-center">
          <image data-v-b9f92768="" class="tiwen_image" style="display: none;">

          </image>
          <image data-v-b9f92768="" class="tiwen_image" style="" src="../../static/dt_jc_sel.png">

          </image>
        </view>
      </view>
    </view>
    <view data-v-b9f92768="" class="all_big_box">
      <image data-v-b9f92768="" class="image_top" :src="'http://www.wsit.cn:8068/shuati1/public'+goodDetal.image">
      </image>
      <view data-v-b9f92768="" class="title_top flexs3">
        <view data-v-b9f92768="" class="title_list top_border">
          <view data-v-b9f92768="">概况</view>
          <view data-v-b9f92768="" class="border_color"></view>
        </view>
        <view data-v-b9f92768="" class="title_list">
          <view data-v-b9f92768="">历年真题</view>
          <!---->
        </view>
        <view data-v-b9f92768="" class="title_list">
          <view data-v-b9f92768="">复习资料</view>
          <!---->
        </view>
        <view data-v-b9f92768="" class="title_list">
          <view data-v-b9f92768="">模拟刷题</view>
          <!---->
        </view>
      </view>
      <view data-v-b9f92768="" class="kong"></view>
      <view data-v-b9f92768="" class="gaiguo">
        <view data-v-b9f92768="" class="top_next">
          <view data-v-b9f92768="" class="flexs1">
            <view data-v-b9f92768="" class="kong_color"></view>
            <view data-v-b9f92768="" class="top_xinxi">基本信息</view>
          </view>
          <view data-v-b9f92768="" class="top_kecheng">课程名称：{{goodDetal.name}}</view>
        </view>
        <view data-v-b9f92768="" class="jiangyi flexs3">
          <view data-v-b9f92768="" class="jiang_list">
            <view data-v-b9f92768="" class="text-center jiangyi_num">0</view>
            <view data-v-b9f92768="" class="jiangyi_center">真题|讲义</view>
          </view>
          <view data-v-b9f92768="" class="jiang_list">
            <view data-v-b9f92768="" class="text-center jiangyi_num">0</view>
            <view data-v-b9f92768="" class="jiangyi_center">模考|刷题</view>
          </view>
          <view data-v-b9f92768="" class="jiang_list">
            <view data-v-b9f92768="" class="text-center jiangyi_num">{{goodDetal.buy_num}}</view>
            <view data-v-b9f92768="" class="jiangyi_center">学习人数</view>
          </view>
        </view>
        <view data-v-b9f92768="" class="student">
          <view data-v-b9f92768="" class="flexs1">
            <view data-v-b9f92768="" class="student_name">最新学员</view>
            <view data-v-b9f92768="" class="student_right1 flexs1"></view>
          </view>
          <view data-v-b9f92768="" class="flexs1">
            <view data-v-b9f92768="" class="student_name">优惠价格</view>
            <view data-v-b9f92768="" class="student_right">
              <view data-v-b9f92768="">
                <text data-v-b9f92768="" class="student_size"><span>￥</span></text>
                <text data-v-b9f92768="" class="student_money"><span>{{goodDetal.now_price}}</span></text>
                <text data-v-b9f92768="" class="student_moneyhui"><span>￥{{goodDetal.original_price}}</span></text>
              </view>
              <view data-v-b9f92768="" class="student_vip">VIP:￥{{goodDetal.discount_price}}</view>
            </view>
          </view>
          <view data-v-b9f92768="" class="student_list flexs1">
            <view data-v-b9f92768="" class="student_name">购买说明</view>
            <view data-v-b9f92768="" class=" student_center flexs1">{{goodDetal.buy_explain }}</view>
          </view>
          <view data-v-b9f92768="" class="student_list flexs1">
            <view data-v-b9f92768="" class="student_name">提分利器</view>
            <view data-v-b9f92768="" class=" student_center flexs1">{{goodDetal.raise_score}}</view>
          </view>
          <view data-v-b9f92768="" class="student_list flexs1 ">
            <view data-v-b9f92768="" class="student_name">复习时长</view>
            <view data-v-b9f92768="" class=" student_center border_nun flexs1">{{goodDetal.createtime }}</view>
          </view>
        </view>
        <view data-v-b9f92768="" class="kong"></view>
        <view data-v-b9f92768="" class="mingxi">
          <view data-v-b9f92768="" class="flexs1">
            <view data-v-b9f92768="" class="kong_color"></view>
            <view data-v-b9f92768="" class="top_xinxi">内容明细</view>
          </view>
          <view data-v-b9f92768="" v-html="goodDetal.content">

          </view>
        </view>
        <view data-v-b9f92768="" class="kong"></view>
        <view data-v-b9f92768="" class="mubiao">
          <view data-v-b9f92768="" class="flexs1">
            <view data-v-b9f92768="" class="kong_color"></view>
            <view data-v-b9f92768="" class="top_xinxi">学习目标</view>
          </view>
          <view data-v-b9f92768="" class="mubiao_text">
            <view data-v-b9f92768="" v-html="goodDetal.study_target">

            </view>
          </view>
        </view>
        <view data-v-b9f92768="" class="kong"></view>
        <view data-v-b9f92768="" class="pingjia">
          <view data-v-b9f92768="" class="flexs2">
            <view data-v-b9f92768="" class="flexs1">
              <view data-v-b9f92768="" class="kong_color"></view>
              <view data-v-b9f92768="" class="top_xinxi">学员评价(0)</view>
            </view>
            <view data-v-b9f92768="" class="flexs1" style="margin-top: 15px;">
              <view data-v-b9f92768="" class="pingjia_more">查看更多</view>
              <image data-v-b9f92768="" class="image_next" src="../../static/zxwb_ico_jr_b@2x.png">

                <!---->
              </image>
            </view>
          </view>
        </view>
      </view>
      <view data-v-b9f92768="" class="kongs_border"></view>
      <view data-v-b9f92768="" class="bottom_last flexs1">
        <view data-v-b9f92768="" class=" text-center">
          <image data-v-b9f92768="" class="pingjia_image" src="../../static/mqpj_ico_pj_h@2x.png">

          </image>
          <view data-v-b9f92768="">评价</view>
        </view>
        <view data-v-b9f92768="" class="bottom_ping text-center">
          <image data-v-b9f92768="" class="tiwen_image" src="../../static/mqpj_ico_tw@2x.png">

          </image>
          <view data-v-b9f92768="">提问</view>
        </view>
        <view data-v-b9f92768="" class="butns flexs">立即购买</view>
      </view>
      <view data-v-b9f92768="" class="cu-modal"></view>
      <view data-v-b9f92768="" class="cu-modal"></view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        parms: {
          page: 1,
          pageSize: 10,
          c_id: null,
          level: 0,

        },
        goodDetal: []

      };
    },
    methods: {
      goback() {
        uni.navigateBack({
          delta: 1
        });
      },
      // 获取课程详情
      async goodsIfon() {
        const {
          data: res
        } = await uni.$http.post('/Curriculum/detail', this.parms);
        if (res.code !== 1) return uni.$showMsg()
        this.goodDetal = res.data
        console.log(this.goodDetal);
        // console.log(this.curriculum);
      },
      async goodsIfonlist() {
        const {
          data: res
        } = await uni.$http.post('/Curriculum/evaluate_list', this.parms);
        if (res.code !== 1) return uni.$showMsg()
        // console.log(this.curriculum);
      },

    },
    onLoad(id) {
      this.parms.c_id = id.c_id
      this.goodsIfonlist()
      this.goodsIfon()

    }

  }
</script>

<style lang="scss">
  view {
    box-sizing: border-box;
  }

  .box[data-v-b9f92768] {
    width: 100%;
    height: 100vh;
    color: #333;
    overflow: hidden;

    .all_big_box[data-v-b9f92768] {
      width: 100%;
      height: calc(100% - 50px);
      overflow-y: auto;

      .image_top[data-v-b9f92768] {
        width: 100%;
        height: 150px;
      }

      .title_top[data-v-b9f92768] {
        width: 100%;
        height: 40px;
        background-color: #fff;

        .top_border[data-v-b9f92768] {
          font-weight: 700;
        }

        .title_list[data-v-b9f92768] {
          font-size: 15px;

          .border_color[data-v-b9f92768] {
            width: 30px;
            height: 2px;
            background-color: #ffdd47;
            border-radius: 1px;
            margin: 0 auto;
          }
        }
      }

      .flexs3 {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-justify-content: space-around;
        justify-content: space-around;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .kong[data-v-b9f92768] {
        width: 100%;
        height: 10px;
        background-color: #f5f5f5;
      }

      .gaiguo[data-v-b9f92768] {
        width: 100%;
        height: auto;
        background-color: #fff;

        .pingjia[data-v-b9f92768] {
          width: 100%;
          padding: 0px 15px;
          height: auto;
          padding-bottom: 15px;

          .flexs2 {
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: justify;
            -webkit-justify-content: space-between;
            justify-content: space-between;
            -webkit-box-align: center;
            -webkit-align-items: center;
            align-items: center;

            .flexs1 {
              display: -webkit-box;
              display: -webkit-flex;
              display: flex;
              -webkit-box-pack: start;
              -webkit-justify-content: flex-start;
              justify-content: flex-start;
              -webkit-box-align: center;
              -webkit-align-items: center;
              align-items: center;

              .pingjia_more[data-v-b9f92768] {
                color: #666;
                font-size: 11px;
                margin-right: 5px;
              }

              .image_next[data-v-b9f92768] {
                width: 6px;
                height: 11px;
              }

              image {
                max-width: 100%;
                display: inline-block;
                position: relative;
                z-index: 0;
              }

              .kong_color[data-v-b9f92768] {
                width: 2px;
                height: 10px;
                border-radius: 10px;
                background-color: #ffdd47;
                margin-right: 5px;
                margin-top: 15px;
              }

              .top_xinxi[data-v-b9f92768] {
                width: 100%;
                line-height: 25px;
                font-size: 17px;
                margin-top: 15px;
              }
            }
          }
        }

        .mubiao[data-v-b9f92768] {
          width: 100%;
          padding: 0px 15px;
          height: auto;
          padding-bottom: 15px;

          .mubiao_text[data-v-b9f92768] {
            font-size: 13px;
          }

          .flexs1 {
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: start;
            -webkit-justify-content: flex-start;
            justify-content: flex-start;
            -webkit-box-align: center;
            -webkit-align-items: center;
            align-items: center;

            .kong_color[data-v-b9f92768] {
              width: 2px;
              height: 10px;
              border-radius: 10px;
              background-color: #ffdd47;
              margin-right: 5px;
              margin-top: 15px;
            }

            .top_xinxi[data-v-b9f92768] {
              width: 100%;
              line-height: 25px;
              font-size: 17px;
              margin-top: 15px;
            }
          }
        }

        .mingxi[data-v-b9f92768] {
          width: 100%;
          padding: 0px 15px;
          height: auto;
          padding-bottom: 15px;

          .flexs1 {
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: start;
            -webkit-justify-content: flex-start;
            justify-content: flex-start;
            -webkit-box-align: center;
            -webkit-align-items: center;
            align-items: center;

            .kong_color[data-v-b9f92768] {
              width: 2px;
              height: 10px;
              border-radius: 10px;
              background-color: #ffdd47;
              margin-right: 5px;
              margin-top: 15px;
            }

            .top_xinxi[data-v-b9f92768] {
              width: 100%;
              line-height: 25px;
              font-size: 17px;
              margin-top: 15px;
            }
          }
        }

        .student[data-v-b9f92768] {
          width: 325px;
          height: 237px;
          background: #fff;
          box-shadow: 0 1px 10px 0px rgba(15, 11, 2, .13);
          border-radius: 5px;
          margin: 0 auto;
          margin-top: 10px;
          padding: 0 10px;
          margin-bottom: 15px;

          .student_list[data-v-b9f92768] {
            height: 45px;

            .student_name[data-v-b9f92768] {
              width: 60px;
              font-size: 12px;
              color: #666;
              margin-right: 7px;
            }

            .student_center[data-v-b9f92768] {
              width: 250px;
              height: 100%;
              color: #333;
              font-size: 12px;
              border-bottom: solid 0.5px #e5e5e5;
            }
          }

          .flexs1 {
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: start;
            -webkit-justify-content: flex-start;
            justify-content: flex-start;
            -webkit-box-align: center;
            -webkit-align-items: center;
            align-items: center;

            .student_name[data-v-b9f92768] {
              width: 60px;
              font-size: 12px;
              color: #666;
              margin-right: 7px;
            }

            .student_right1[data-v-b9f92768] {
              width: 250px;
              height: 52px;
              border-bottom: solid 0.5px #e5e5e5;
            }

            .student_name[data-v-b9f92768] {
              width: 60px;
              font-size: 12px;
              color: #666;
              margin-right: 7px;
            }

            .student_right[data-v-b9f92768] {
              width: 250px;
              height: 52px;
              border-bottom: solid 0.5px #e5e5e5;
              display: -webkit-box;
              display: -webkit-flex;
              display: flex;
              /* justify-content: flex-start; */
              -webkit-box-pack: justify;
              -webkit-justify-content: space-between;
              justify-content: space-between;
              -webkit-box-align: center;
              -webkit-align-items: center;
              align-items: center;

              .student_size[data-v-b9f92768] {
                font-size: 12px;
                color: #ff3b30;
              }

              .student_moneyhui[data-v-b9f92768] {
                font-size: 12px;
                color: #999;
                text-decoration: line-through;
                margin-left: 3px;
              }

              .student_money[data-v-b9f92768] {
                font-size: 17px;
                color: #ff3b30;
              }

              .student_vip[data-v-b9f92768] {
                width: auto;
                height: 20px;
                padding: 0 5px;
                background: #ffe7e6;
                border-radius: 3px;
                color: #ff3b30;
                font-size: 13px;
                text-align: center;
                display: -webkit-box;
                display: -webkit-flex;
                display: flex;
                -webkit-box-pack: center;
                -webkit-justify-content: center;
                justify-content: center;
                -webkit-box-align: center;
                -webkit-align-items: center;
                align-items: center;
              }
            }
          }
        }

        .jiangyi[data-v-b9f92768] {
          width: 325px;
          height: 70px;
          background: #fff;
          box-shadow: 0 1px 10px 0 rgba(15, 11, 2, .13);
          border-radius: 5px;
          margin: 0 auto;

          .jiangyi_num[data-v-b9f92768] {
            line-height: 21px;
            font-size: 16px;
            font-family: PingFang SC;
            color: #ff3b30;
          }

          .text-center {
            text-align: center;
          }

          .jiangyi_center[data-v-b9f92768] {
            line-height: 21px;
            color: #666;
            font-size: 13px;
          }
        }

        .flexs3 {
          display: -webkit-box;
          display: -webkit-flex;
          display: flex;
          -webkit-justify-content: space-around;
          justify-content: space-around;
          -webkit-box-align: center;
          -webkit-align-items: center;
          align-items: center;
        }

        .top_next[data-v-b9f92768] {
          padding: 0 15px;

          .flexs1 {
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: start;
            -webkit-justify-content: flex-start;
            justify-content: flex-start;
            -webkit-box-align: center;
            -webkit-align-items: center;
            align-items: center;

            .kong_color[data-v-b9f92768] {
              width: 2px;
              height: 10px;
              border-radius: 10px;
              background-color: #ffdd47;
              margin-right: 5px;
              margin-top: 15px;
            }

            .top_xinxi[data-v-b9f92768] {
              width: 100%;
              line-height: 25px;
              font-size: 17px;
              margin-top: 15px;
            }
          }

          .top_kecheng[data-v-b9f92768] {
            width: 100%;
            line-height: 40px;
            font-size: 14px;
          }
        }
      }

      .kongs_border[data-v-b9f92768] {
        width: 100%;
        height: 65px;
        background-color: #f5f5f5;
      }

      .bottom_last[data-v-b9f92768] {
        width: 100%;
        height: 50px;
        padding-left: 29px;
        font-size: 12px;
        position: fixed;
        bottom: 0;
        z-index: 999;
        background-color: #fff;

        .butns[data-v-b9f92768] {
          width: 242px;
          height: 35px;
          background: #ffdd47;
          border-radius: 5px;
          font-size: 15px;
        }

        .flexs {
          display: -webkit-box;
          display: -webkit-flex;
          display: flex;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-box-align: center;
          -webkit-align-items: center;
          align-items: center;
        }

        .bottom_ping[data-v-b9f92768] {
          margin: 0 20px;

          .tiwen_image[data-v-b9f92768] {
            width: 22px;
            height: 22px;
          }

          image {
            max-width: 100%;
            display: inline-block;
            position: relative;
            z-index: 0;
          }
        }

        .text-center {
          text-align: center;

          .pingjia_image[data-v-b9f92768] {
            width: 20px;
            height: 22px;
          }

          image {
            max-width: 100%;
            display: inline-block;
            position: relative;
            z-index: 0;
          }
        }
      }

      .flexs1 {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .cu-modal {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1110;
        opacity: 0;
        outline: 0;
        text-align: center;
        -ms-transform: scale(1.185);
        -webkit-transform: scale(1.185);
        transform: scale(1.185);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-perspective: 1000px;
        perspective: 1000px;
        background: rgba(0, 0, 0, .6);
        -webkit-transition: all .3s ease-in-out 0s;
        transition: all .3s ease-in-out 0s;
        pointer-events: none;
      }
    }

    .border[data-v-b9f92768] {
      .border_top[data-v-b9f92768] {
        width: 100%;
        height: 50px;
        padding: 0 15px;
        background-color: #fff;
        border-bottom: 0.5px solid #f5f5f5;

        .back_image[data-v-b9f92768] {
          width: 10px;
          height: 18px;
        }

        image {
          max-width: 100%;
          display: inline-block;
          position: relative;
          z-index: 0;
        }

        .topbiao[data-v-b9f92768] {
          font-size: 18px;
          color: #333;
        }

        .text-center {
          text-align: center;

          .tiwen_image[data-v-b9f92768] {
            width: 22px;
            height: 22px;
          }
        }
      }

      .flexs2 {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
      }
    }

    .all_big_box[data-v-b9f92768] {
      width: 100%;
      height: calc(100% - 50px);
      overflow-y: auto;
    }

  }
</style>
