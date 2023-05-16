<template>
  <view class="box">
    <view data-v-ee43312e="" class="list_one flexs1" v-for="item in searlist||[]" :key="item.id">
      <image :src="'http://www.wsit.cn:8068/shuati1/public/index.php'+item.image" data-v-ee43312e="" class="one_img">

      </image>
      <view data-v-ee43312e="" class="list_one_right">
        <view data-v-ee43312e="" class="one_title text-bold" style="font-size: 28rpx;font-weight: 700;">{{item.name}}
        </view>
        <view data-v-ee43312e="" class="one_time">{{item.createtime}}</view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "wenZhang",
    props: [
      "searlist"
    ],
    data() {
      return {

      };
    },

  }
</script>

<style lang="scss">
  .box {
    // width: 100%;
    // height: 100%;

    .list_one[data-v-ee43312e] {
      width: 100%;
      height: 96px;
      background-color: #fff;

      .one_img[data-v-ee43312e] {
        width: 98px;
        height: 65px;
        border-radius: 5px;
        margin: 0 10px 0 14px;
      }

      image {
        max-width: 100%;
        display: inline-block;
        position: relative;
        z-index: 0;
      }

      .list_one_right[data-v-ee43312e] {
        width: 232px;
        height: 96px;
        padding-top: 13px;
        border-bottom: 1px solid #f5f5f5;

        .one_title[data-v-ee43312e] {
          width: 100%;
          height: 47px;
          line-height: 21px;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .one_time[data-v-ee43312e] {
          color: #999;
          font-size: 12px;
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
