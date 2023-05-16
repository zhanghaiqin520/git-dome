<template>
  <view class="big">
    <!-- 第一部分 -->
    <view class="top">
      <navigator url="/subpkg/my-search/my-search" class="top_kuang flexs1">
        <image class="border_serch" src="../../static/ico_ss@2x.png" mode="widthFix"></image>
        <input disabled="disabled" maxlength="140" step="" enterkeyhint="done" autocomplete="off" type=""
          class="uni-input-input" value="输入真题、资料、公司名称"></input>
      </navigator>

      <view class="banner">
        <swiper :autoplay="true" :interval="3000" :duration="2000" circular="true" @change="intervalChange">
          <swiper-item v-for="(item,i) in bannerlist " :key="item.id">
            <navigator class="swiper-item" :url="'/subpkg/good_detail/good_detail?c_id='+item.id">
              <image :src='item.image.replace("/..","http://www.wsit.cn:8068/shuati1/public")' mode="widthFix"></image>
            </navigator>
          </swiper-item>
        </swiper>
        <view class="box1">
          {{currindex+1}}/5
        </view>
      </view>
      <!-- 第3部分 -->
      <view class="class_box flexs1">
        <navigator v-for="(item,i) in navlist" :key="i" class="class_list">
          <image :src="item.url" mode="widthFix"></image>
          <view data-v-580b8874="">{{item.title}}</view>
        </navigator>

      </view>



    </view>
    <!-- no.2-->
    <view data-v-580b8874="" class="notice_box flexs1">
      <image data-v-580b8874="" src="../../static/sy_img_td@2x.png" class="notice_img">
      </image>
      <view data-v-580b8874="" class="topbottombox">
        <swiper :autoplay="true" :interval="3000" :duration="4000" vertical="true" :circular="true"
          easing-function="linear">
          <swiper-item v-for="(item,i) in headtiao " :key="item.id">
            <navigator class="swiper-item">
              <view data-v-580b8874="" class="swiper-item-left">{{item.icon}}</view>
              <view data-v-580b8874="" class="swiper-item-right">{{item.name}}</view>
            </navigator>
          </swiper-item>
        </swiper>

      </view>
    </view>
    <!-- no.3 -->
    <view class="middle">
      <view data-v-580b8874="" class="middle_top flexs2">
        <view data-v-580b8874="" class="flexs1">
          <view data-v-580b8874="" class="line"></view>
          <view data-v-580b8874="" class="remen">热门推荐</view>

        </view>
        <view class="more">
          查看更多
          <image mode="widthFix" style="width: 15rpx;margin-left: 10rpx; " data-v-580b8874=""
            src="../../static/zxwb_ico_jr_b@2x.png">
            <!---->
          </image>
        </view>
      </view>
      <!-- .. -->
      <view class="remen_list flexs1">
        <navigator v-for="item in Hottuijian" data-v-580b8874="" class="remen_one flexs1" :key="item.id"
          :url="'/subpkg/good_detail/good_detail?c_id='+item.id">
          <image :src='item.image.replace("/..","http://www.wsit.cn:8068/shuati1/public")' mode="widthFix"
            data-v-580b8874="" class="remen_img">
          </image>
          <view data-v-580b8874="" class="remen_right">
            <view data-v-580b8874="" class="remen_right_title text-bold">{{item.name}}</view>
            <view data-v-580b8874="" class="remen_right_mid flexs1">
              <image style="width: 30rpx;" src="../../static/ss_ico_xx@2x.png" data-v-580b8874="" mode="widthFix">
              </image>
              <view data-v-580b8874="">{{item.buy_num}}人已学习</view>
            </view>
            <view data-v-580b8874="" class="flexs1 remen_right_bottom">
              <view data-v-580b8874="" class="money">
                <text data-v-580b8874="" class="fuhao"><span>￥</span></text>{{(item.now_price.replace(".00","")) }}
              </view>
              <view data-v-580b8874="" class="look">{{item.watch_num}}人查看</view>
            </view>
          </view>
        </navigator>
      </view>
      <!-- 3 -->
      <view data-v-580b8874="" class="middle_top flexs2">
        <view data-v-580b8874="" class="flexs1">
          <view data-v-580b8874="" class="line"></view>
          <view data-v-580b8874="" class="remen">精彩课程</view>

        </view>
        <view class="more">
          查看更多
          <image mode="widthFix" style="width: 15rpx;margin-left: 10rpx; " data-v-580b8874=""
            src="../../static/zxwb_ico_jr_b@2x.png">
            <!---->
          </image>
        </view>
      </view>
      <!-- 4 -->
      <view data-v-580b8874="" class="cai_box">

        <navigator v-for="item in PerfectObj" :key="item.id" data-v-580b8874="" class="ca_list flexs1"
          :url="'/subpkg/good_detail/good_detail?c_id='+item.id">
          <image :src='item.image.replace("/..","http://www.wsit.cn:8068/shuati1/public")' data-v-580b8874=""
            class="ca_img">
          </image>
          <view data-v-580b8874="" class="cai_right">
            <view data-v-580b8874="" class="cai_right_t">{{item.name}}</view>
            <view data-v-580b8874="" class=" flexs1">
              <view data-v-580b8874="" class="cai_bottom_left">
                <view data-v-580b8874="" class="remen_right_mid flexs1">
                  <image style="width: 30rpx; margin-right:10rpx ;" src="../../static/ss_ico_xx@2x.png"
                    data-v-580b8874="" mode="widthFix">
                    <view data-v-580b8874="">{{item.buy_num}}已学习</view>
                </view>
                <view data-v-580b8874="" class="money">
                  <text data-v-580b8874="" class="fuhao"><span>￥</span></text>{{(item.now_price.replace(".00","")) }}
                </view>
              </view>
              <view data-v-580b8874="" class="button flexs">立即抢购</view>
            </view>
          </view>
        </navigator>
      </view>


    </view>
    <!-- no.4 -->
    <view data-v-580b8874="" class="ke_box">
      <view data-v-580b8874="" class="ke_top flexs3">
        <view data-v-580b8874="" class="ke_list">
          <view data-v-580b8874="" class="ke_title_new">笔试课程</view>
          <view data-v-580b8874="" class="ke_line" style=""></view>
        </view>
        <view data-v-580b8874="" class="ke_list">
          <view data-v-580b8874="" class="ke_title">面试课程</view>
          <view data-v-580b8874="" class="ke_line" style="display: none;"></view>
        </view>
        <view data-v-580b8874="" class="ke_list">
          <view data-v-580b8874="" class="ke_title">助攻辅导</view>
          <view data-v-580b8874="" class="ke_line" style="display: none;"></view>
        </view>
      </view>
      <view data-v-580b8874="" class="ke_list_big flexs12">
        <view v-for="item in Perfect4" :key="item.id" data-v-580b8874="" class="list_big_one">
          <image :src='item.image.replace("/..","http://www.wsit.cn:8068/shuati1/public")' data-v-580b8874=""
            class="feng_img">


          </image>
          <view data-v-580b8874="" class="ke_name">{{item.name}}</view>
          <view data-v-580b8874="" class="remen_right_mid flexs1">
            <image style="width: 30rpx; margin-right:10rpx ;" src="../../static/ss_ico_xx@2x.png" data-v-580b8874=""
              mode="widthFix">
            </image>
            <view data-v-580b8874="">{{item.buy_num}}人已学习</view>
          </view>
          <view data-v-580b8874="" class="money">
            <text data-v-580b8874="" class="fuhao"><span>￥</span></text>{{item.now_price}}
          </view>
        </view>



        <!---->
        <!---->
        <!---->
      </view>
      <view data-v-580b8874="" class="more_box flexs3">
        <view data-v-580b8874="">查看更多</view>
        <image data-v-580b8874="" src="../../static/zxwb_ico_jr_b@2x.png">
          <!---->
        </image>
      </view>
    </view>
    <!-- no.5 -->
    <view data-v-580b8874="" class="notice_box flexs1">
      <image data-v-580b8874="" src="../../static/sy_img_td@2x.png" class="notice_img">
      </image>
      <view data-v-580b8874="" class="topbottombox">
        <swiper :autoplay="true" :interval="2000" :duration="3000" vertical="true" :circular="true"
          easing-function="linear">
          <swiper-item v-for="(item,i) in zhenzi " :key="item.id">
            <navigator class="swiper-item">
              <view data-v-580b8874="" class="swiper-item-left">{{item.icon}}</view>
              <view data-v-580b8874="" class="swiper-item-right">{{item.name}}</view>
            </navigator>
          </swiper-item>
        </swiper>

      </view>

    </view>
    <!-- no.6 -->
    <view data-v-580b8874="" class="topic_box">
      <view data-v-580b8874="" class="middle_top flexs2">
        <view data-v-580b8874="" class="flexs1">
          <view data-v-580b8874="" class="line"></view>
          <view data-v-580b8874="" class="remen">热门推荐</view>

        </view>
        <view class="more">
          查看更多
          <image mode="widthFix" style="width: 15rpx;margin-left: 10rpx; " data-v-580b8874=""
            src="../../static/zxwb_ico_jr_b@2x.png">
            <!---->
          </image>
        </view>
      </view>

      <view data-v-580b8874="" class="topic_list" v-for="item in Hotzhenz" :key="item.id">
        <view data-v-580b8874="" class="topic_name">{{item.info}}</view>
        <view data-v-580b8874="" class="topic_img flexs1">
          <image data-v-580b8874="" v-for="(items,i) in item.images"
            :src='items.replace("/..","http://www.wsit.cn:8068/shuati1/public")' :key="i"
            style="width: 70px; height: 70px;border-radius: 5px;">
          </image>

        </view>
        <view data-v-580b8874="" class="topic_bottom flexs3">
          <view data-v-580b8874="" class="bottom_list flexs1">
            <image src="../../static/zpzx_ico_pl@2x.png" data-v-580b8874="" class="ping_img">
            </image>
            <view data-v-580b8874="">{{item.cmt_nums}}</view>
          </view>
          <view data-v-580b8874="" class="bottom_list flexs1">
            <image src="../../static/sy_ico_dz@2x.png" data-v-580b8874="" class="ping_img">


            </image>
            <view data-v-580b8874="">{{item.zan_nums}}</view>
          </view>
          <view data-v-580b8874="" class="bottom_list flexs1">
            <image src="../../static/zpzx_ico_yd@2x.png" data-v-580b8874="" class="ping_img">


            </image>
            <view data-v-580b8874="">{{item.read_nums}}</view>
          </view>
        </view>
      </view>
    </view>
    <!-- no.7 -->
    <view data-v-580b8874="" class="paper_box">
      <view data-v-580b8874="" class="middle_top flexs2">
        <view data-v-580b8874="" class="flexs1">
          <view data-v-580b8874="" class="line"></view>
          <view data-v-580b8874="" class="remen">热门试卷</view>
        </view>
        <view data-v-580b8874="" class="top_right flexs1">
          <view class="more">
            查看更多
            <image mode="widthFix" style="width: 15rpx;margin-left: 10rpx; " data-v-580b8874=""
              src="../../static/zxwb_ico_jr_b@2x.png">
              <!---->
            </image>
          </view>
        </view>
      </view>
      <view data-v-580b8874="" class="paper_list flexs2" v-for="item in hotexam " :key="item.id">
        <view data-v-580b8874="" class="paper_name">{{item.name}}</view>
        <view data-v-580b8874="" class="number">{{item.answer_num}}人做过</view>
      </view>
    </view>


  </view>
</template>
<script>
  export default {
    data() {
      return {
        bannerlist: [],
        navlist: [{
            url: "../../static/sy_ico_kctc@2x.png",
            title: "课程套餐"
          },
          {
            url: "../../static/sy_ico_mkst@2x.png",
            title: "模考刷题"

          },
          {
            url: "../../static/sy_ico_zpzx@2x.png",
            title: "招聘资讯"

          },
          {
            url: "../../static/sy_ico_szrd@2x.png",
            title: "时政热点"

          },
          {
            url: "../../static/sy_ico_jyjq@2x.png",
            title: "经验技巧"

          },
          {
            url: "../../static/sy_ico_zqht@2x.png",
            title: "职圈话题"

          },
          {
            url: "../../static/sy_ico_kqfx@2x.png",
            title: "考情分析"

          },
          {
            url: "../../static/sy_ico_ofzh@2x.png",
            title: "Offer斩获"

          },
          {
            url: "../../static/sy_ico_jlmb@2x.png",
            title: "简历模板"

          },

          {
            url: "../../static/sy_ico_zxwb@2x.png",
            title: "在线问吧"

          },
        ],
        headtiao: [],
        curriculum: [],
        zhenzi: [],
        Hotzhenz: [],
        hotexam: [],

        parms: {
          page: 1,
          pageSize: 10,
          type: 2,
        },
        currindex: null,


      }
    },
    mounted() {
      this.getBanList()
      this.getHeadList()
      this.Curriculum()
      this.Shisizhenzhi()
      this.Hotzhenzhi()
      this.Hotexam()

    },


    methods: {
      search() {
        uni.navigateTo({
          url: '/subpkg/my-search/my-search'
        });
      },

      intervalChange(e) {
        this.currindex = e.detail.current
      },
      //获取录播图数据
      async getBanList() {
        const {
          data: res
        } = await uni.$http.post('/zhang/banner/get_banner_list');
        if (res.code !== 1) return uni.$showMsg()
        this.bannerlist = res.data
        uni.$showMsg("数据加载成功..")
      },
      // hetiao
      async getHeadList() {
        const {
          data: res
        } = await uni.$http.post('/zhang/Recruitinformation/show');
        if (res.code !== 1) return uni.$showMsg()
        this.headtiao = res.data

      },
      // hot
      async Curriculum() {
        const {
          data: res
        } = await uni.$http.post('/Curriculum/show');
        if (res.code !== 1) return uni.$showMsg()
        this.curriculum = res.data
        // console.log(this.curriculum);
      },
      // 时事政治
      async Shisizhenzhi() {
        const {
          data: res
        } = await uni.$http.post('/zhang/Current_politics/show');
        if (res.code !== 1) return uni.$showMsg()
        this.zhenzi = res.data
        // console.log(this.zhenzi);
      },
      // 热门话题
      async Hotzhenzhi() {
        const {
          data: res
        } = await uni.$http.post('/talk/index', this.parms);
        if (res.code !== 1) return uni.$showMsg()
        this.Hotzhenz = res.data
        console.log(this.Hotzhenz);
      },
      // 热门考试
      async Hotexam() {
        const {
          data: res
        } = await uni.$http.post('/question_bank/show');
        if (res.code !== 1) return uni.$showMsg()
        this.hotexam = res.data
        // console.log(this.hotexam);
      },

    },

    computed: {

      Hottuijian() {
        return this.curriculum.filter((item) => {
          return item.id <= 3
        })

      },
      PerfectObj() {
        return this.curriculum.filter((item) => {
          return item.id > 3
        })
      },
      Perfect4() {
        return this.curriculum.filter((item) => {
          return item.id <= 4
        })
      }




    }





  }
</script>

<style lang="scss" scoped>
  .big {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;

    //no.7
    .paper_box[data-v-580b8874] {
      width: 375px;
      height: auto;
      background: #fff;

      .paper_list[data-v-580b8874] {
        width: 345px;
        height: 43px;
        margin: 0 auto;
        border-bottom: 1px solid #f2f2f2;

        .paper_name[data-v-580b8874] {
          width: 252px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .number[data-v-580b8874] {
          font-size: 12px;
          color: #999;
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

      .middle_top {
        width: 92%;
        height: 55px;
        margin: 0 auto;



        .more {
          font-size: 11px;
          color: #999;


        }

        .flexs1 {

          display: flex;

          justify-content: flex-start;

          align-items: center;

          .line {
            width: 2px;
            height: 10px;
            background: #ffdd47;
            border-radius: 1px;
            margin-right: 5px;
          }

          .remen {
            font-size: 17px;
            font-weight: 700;
          }



        }


      }

      .flexs2 {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;

        justify-content: space-between;
        align-items: center;
      }
    }

    //no.6
    .topic_box[data-v-580b8874] {
      width: 375px;
      height: auto;
      background: #fff;
      margin-bottom: 10px;
      padding-bottom: 20px;

      .topic_list[data-v-580b8874] {
        width: 345px;
        height: auto;
        background: #fff;
        box-shadow: 0px 1px 5px 0px rgba(15, 11, 2, .13);
        border-radius: 5px;
        margin: 0 auto;
        margin-bottom: 10px;
        padding: 15px 0;

        .topic_name[data-v-580b8874] {
          width: 318px;
          height: auto;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          margin: 0 auto;
          font-size: 13px;
          line-height: 20px;
        }

        .topic_img[data-v-580b8874] {
          width: 318px;
          height: auto;
          margin: 10px auto;
          -webkit-flex-wrap: wrap;
          flex-wrap: wrap;
        }

        .topic_bottom[data-v-580b8874] {
          width: 318px;
          height: auto;
          margin: 0 auto;
          color: #666;
          font-size: 13px;

          .ping_img[data-v-580b8874] {
            width: 14px;
            height: 13px;
            margin-right: 5px;
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
      }

      .middle_top {
        width: 92%;
        height: 55px;
        margin: 0 auto;



        .more {
          font-size: 11px;
          color: #999;


        }

        .flexs1 {

          display: flex;

          justify-content: flex-start;

          align-items: center;

          .line {
            width: 2px;
            height: 10px;
            background: #ffdd47;
            border-radius: 1px;
            margin-right: 5px;
          }

          .remen {
            font-size: 17px;
            font-weight: 700;
          }



        }


      }

      .flexs2 {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;

        justify-content: space-between;
        align-items: center;
      }

    }

    //no.4
    .ke_box[data-v-580b8874] {
      width: 375px;
      height: auto;
      padding-bottom: 20px;
      margin-bottom: 10px;
      background: #fff;

      .more_box[data-v-580b8874] {
        width: 75px;
        height: 23px;
        background: #f2f2f2;
        border-radius: 11px;
        margin: 0 auto;
        color: #666;
        font-size: 11px;
        padding: 0 7px;
        margin-top: 7px;

        image[data-v-580b8874] {
          width: 6px;
          height: 11px;
        }
      }

      .ke_list_big[data-v-580b8874] {
        width: 344px;
        height: auto;
        margin: 0 auto;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;

        .list_big_one[data-v-580b8874] {
          width: 165px;
          height: auto;
          margin-bottom: 10px;

          .money[data-v-580b8874] {
            width: 62px;
            font-size: 17px;
            font-weight: 700;
            color: #ff3b30;
          }

          .remen_right_mid[data-v-580b8874] {
            height: 25px;
            font-size: 12px;
            color: #666;
          }

          .feng_img[data-v-580b8874] {
            width: 165px;
            height: 100px;
            border-radius: 5px;
          }

          .ke_name[data-v-580b8874] {
            width: 165px;
            height: 38px;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
      }

      .flexs12 {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      }

      .ke_top[data-v-580b8874] {
        width: 85%;
        height: 50px;
        margin: 0 auto;

        .ke_list[data-v-580b8874] {
          width: 75px;

          .ke_title_new[data-v-580b8874] {
            height: 23px;
            line-height: 23px;
            font-size: 16px;
            font-weight: 700;
            text-align: center;
          }

          .ke_line[data-v-580b8874] {
            width: 30px;
            height: 2px;
            background: #ffdd47;
            border-radius: 1px;
            margin-left: 24px;
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



    }



    // 3
    .middle {

      width: 375px;
      height: auto;
      background: #fff;
      margin-bottom: 10px;

      // 4
      .cai_box[data-v-580b8874] {
        width: 92%;
        margin: 0 auto;
        height: auto;

        .ca_list[data-v-580b8874] {
          width: 100%;
          height: 85px;
          margin-bottom: 10px;

          .ca_img[data-v-580b8874] {
            width: 98px;
            height: 65px;
            border-radius: 5px;
            margin-right: 10px;
          }

          image {
            max-width: 100%;
            display: inline-block;
            position: relative;
            z-index: 0;
          }

          .cai_right {
            .cai_right_t[data-v-580b8874] {
              width: 232px;
              font-weight: 700;
              color: #333;
            }

            .cai_bottom_left[data-v-580b8874] {
              width: 170px;

              .remen_right_mid[data-v-580b8874] {
                height: 25px;
                font-size: 12px;
                color: #666;
              }

              .money[data-v-580b8874] {
                width: 62px;
                font-size: 17px;
                font-weight: 700;
                color: #ff3b30;
              }
            }

            .button[data-v-580b8874] {
              width: 65px;
              height: 25px;
              line-height: 25px;
              background: #ffdd47;
              border-radius: 3px;
              font-size: 12px;
              color: #888;
              text-align: center;
            }


          }




        }


      }

      .remen_list {
        width: 95%;
        height: 200rpx;
        overflow-x: scroll;
        margin-left: 40rpx;
        margin-bottom: 10rpx;

        .remen_one[data-v-580b8874] {
          width: 257px;
          height: 85px;
          background: #fff;
          box-shadow: 0px 1px 5px 0px rgba(15, 11, 2, .13);
          border-radius: 5px;
          -webkit-flex-shrink: 0;
          flex-shrink: 0;
          margin-right: 10px;

          .remen_img[data-v-580b8874] {
            width: 98px;
            height: 65px;
            border-radius: 5px;
            margin: 0 10px 0 10px;
            max-width: 100%;
            display: inline-block;
            position: relative;
            z-index: 1;
          }

          .remen_right[data-v-580b8874] {
            height: 70px;

            .remen_right_title[data-v-580b8874] {
              width: 128px;
              height: 20px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }

            .text-bold {
              font-weight: 600;
            }

            .remen_right_mid[data-v-580b8874] {
              height: 25px;
              font-size: 12px;
              color: #666;

              image[data-v-580b8874] {
                width: 14px;
                height: 13px;
                margin-right: 5px;
              }
            }

            .remen_right_bottom[data-v-580b8874] {
              height: 30px;

              .money[data-v-580b8874] {
                width: 62px;
                font-size: 17px;
                font-weight: 700;
                color: #ff3b30;
              }

              .look[data-v-580b8874] {
                font-size: 10px;
                color: #999;
              }
            }
          }
        }


      }

      .middle_top {
        width: 92%;
        height: 55px;
        margin: 0 auto;



        .more {
          font-size: 11px;
          color: #999;


        }

        .flexs1 {

          display: flex;

          justify-content: flex-start;

          align-items: center;

          .line {
            width: 2px;
            height: 10px;
            background: #ffdd47;
            border-radius: 1px;
            margin-right: 5px;
          }

          .remen {
            font-size: 17px;
            font-weight: 700;
          }



        }


      }

      .flexs2 {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;

        justify-content: space-between;
        align-items: center;
      }
    }

    // 2部分
    .notice_box[data-v-580b8874] {
      width: 375px;
      height: 70px;
      background: #fff;
      margin-bottom: 10px;

      .topbottombox[data-v-580b8874] {
        margin-left: 20px;
        width: 320px;
        height: 30px;
        overflow: hidden;
        /* border:1rpx solid red; */

        swiper-item {
          height: 40px !important;

        }

        .swiper-item {
          height: 40px !important;
          padding: 5px 0;
          line-height: 40px !important;

          display: flex;

          align-items: center;

          justify-content: flex-start;

          .swiper-item-left[data-v-580b8874] {
            width: auto;
            padding: 0 7px;
            height: 18px;
            background: #ff3b30;
            border-radius: 2px;
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            justify-content: center;

            align-items: center;
            color: #fff;
            font-size: 11px;
            margin-right: 12px;
          }

          .swiper-item-right[data-v-580b8874] {
            width: 200px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            /*溢出不 */

          }

        }
      }

      .notice_img[data-v-580b8874] {
        width: 60px;
        height: 60px;
        margin: 0 11px 0 14px;
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

    .top {
      width: 375px;
      display: block;
      height: auto;
      background: #fff;
      padding-bottom: 3px;
      margin-bottom: 10px;
      padding-top: 8px;

      /* border:1px solid red */
      .top_kuang {
        width: 345px;
        height: 30px;
        background: #f5f5f5;
        border-radius: 5px;
        margin: 0 auto;
        position: sticky;
        // 吸顶的“位置”
        top: 0;
        // 提高层级，防止被轮播图覆盖
        z-index: 999;

        // position: relative;

        .uni-input-input {
          position: absolute;
          left: 80rpx;
          top: 0;
          display: block;
          height: 100%;
          background: none;
          opacity: .5;
          color: inherit;
          font: inherit;
          line-height: inherit;
          letter-spacing: inherit;
          text-align: inherit;
          text-indent: inherit;
          text-transform: inherit;
          text-shadow: inherit;
          font-size: 30rpx;
        }

        .border_serch {
          width: 14px;
          height: 15px;
          margin: 0 10px 0 12px;
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

      // banner
      .banner {


        width: 337px;
        height: 156px;
        margin: 0 auto;
        margin-top: 22px;
        background: url("../../static/sy_img_br_bg@2x.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: relative;
        box-shadow: 0px 0px 7px #000;
        border-radius: 10px;
        overflow: hidden;


        .swiper-item {
          image {
            width: 100%;
            height: 100%;

          }
        }


        .box1 {
          position: absolute;
          bottom: 15px;
          right: 10px;
          z-index: 999;
          background-repeat: no-repeat;

          background-size: 100% 100%;
          color: #fff;
          width: 30px;
          text-align: center;
          height: 13px;
          font-size: 10px;


          display: flex;

          align-items: center;

          justify-content: center;


        }
      }

      .class_box {
        width: 337px;
        height: auto;
        margin: 0 auto;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-top: 5px;



        .class_list {
          width: 67px;
          height: 84px;
          font-size: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 8rpx;

          image {
            width: 104rpx;
          }


        }

        .text-center {
          text-align: center;
        }
      }

    }
  }
</style>
