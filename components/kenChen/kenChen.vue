<template>
  <view class="box">
    <view data-v-ee43312e="" class="list_two flexs1" v-for="item in kechen||undefined" :key="item.id">
      <view data-v-ee43312e="" class="two_left">
        <image :src="'http://www.wsit.cn:8068/shuati1/public/index.php'+item.image" data-v-ee43312e="" class="one_img">

        </image>
        <view data-v-ee43312e="" class="type_box" style="display: none;">面试</view>
        <view data-v-ee43312e="" class="type_box">笔试</view>
      </view>
      <view data-v-ee43312e="" class="list_two_right">
        <view data-v-ee43312e="" class="two_title text-bold">{{item.name}}</view>
        <view data-v-ee43312e="" class="remen_right_mid flexs1">
          <image data-v-ee43312e="" style="width: 30rpx; margin-right:10rpx ;" mode="widthFix"
            src="../../static/ss_ico_xx@2x.png">

          </image>
          <view data-v-ee43312e="">{{item.buy_num}}人已学习</view>
        </view>
        <view data-v-ee43312e="" class="flexs2 two_right">
          <view data-v-ee43312e="" class="tao_num">{{item.qb_count}}套真题</view>
          <view data-v-ee43312e="" class="money">
            <text data-v-ee43312e="" class="fuhao"><span>￥</span></text>{{item.now_price}}
          </view>
        </view>
      </view>
    </view>

  </view>
</template>

<script>
  export default {
    name: "kenChen",
    data() {
      return {

      };
    },
    props: [
      "kechen"
    ]
  }
</script>

<style lang="scss" scoped>
  view {
    box-sizing: border-box;
  }

  .box {
    .list_two[data-v-ee43312e] {
      width: 100%;
      height: 105px;
      background-color: #fff;



      .two_left[data-v-ee43312e] {
        position: relative;


        .one_img[data-v-ee43312e] {
          width: 98px;
          height: 65px;
          border-radius: 5px;
          margin: 0 10px 0 14px;
        }

        .type_box[data-v-ee43312e] {
          width: 35px;
          height: 15px;
          line-height: 15px;
          text-align: center;
          color: #fff;
          background: #ff3b30;
          border-radius: 5px 0px 5px 0px;
          font-size: 11px;
          position: absolute;
          top: 0px;
          left: 14px;
        }

        image {
          max-width: 100%;
          display: inline-block;
          position: relative;
          z-index: 0;
        }
      }

      .list_two_right[data-v-ee43312e] {
        width: 232px;
        height: 105px;
        padding-top: 15px;
        border-bottom: 1px solid #f5f5f5;

        .two_title[data-v-ee43312e] {
          width: 100%;
          height: 40px;
          line-height: 19px;
          // box-sizing: border-box;
          // margin-top: 5px;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;


        }

        .text-bold {
          font-weight: 700;
          // height: 30px;
          // margin-top: 5px;
        }

        .remen_right_mid[data-v-ee43312e] {
          height: 20px;
          font-size: 12px;
          color: #666;
        }

        .two_right[data-v-ee43312e] {
          width: 94%;

          .tao_num[data-v-ee43312e] {
            font-size: 10px;
            color: #999;
          }

          .money[data-v-ee43312e] {
            width: 62px;
            font-size: 17px;
            font-weight: 700;
            color: #ff3b30;
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

  }
</style>
