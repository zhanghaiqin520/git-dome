<template>
  <view>
    <view data-v-74a87c9c="" class="list_item" v-for="item in  infoList" :key="item.id">
      <view data-v-74a87c9c="" class="list_left">
        <image data-v-74a87c9c="" :src="'http://www.wsit.cn:8068/shuati1/public'+item.image">
        </image>
      </view>
      <view data-v-74a87c9c="" class="list_right">
        <view data-v-74a87c9c="" class="list_title">{{item.name}}</view>
        <view data-v-74a87c9c="" class="list_time">{{item.createtime}}</view>
        <view data-v-74a87c9c="" class="list_data_box">
          <view data-v-74a87c9c="" class="list_read_num">
            <image data-v-74a87c9c="" src="../../static/zcht_ico_yd_nor@2x.png">
            </image>{{item.read_num}}
          </view>
          <view data-v-74a87c9c="" class="list_com_num">
            <image data-v-74a87c9c="" src="../../static/zpzx_ico_pl@2x.png">

            </image>{{item.comment_num}}
          </view>
        </view>
      </view>
    </view>

  </view>
</template>

<script>
  export default {
    name: "news",
    data() {
      return {


      };
    },
    props: ["infoList"]
  }
</script>

<style lang="scss">
  view {
    box-sizing: border-box;
  }



  .list_item[data-v-74a87c9c] {
    height: auto;
    width: 100%;
    padding: 0px 15px;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    padding-top: 15px;
    background-color: #fff;

    .list_left[data-v-74a87c9c] {
      image {
        width: 98px;
        height: 65px;
        border-radius: 5px;
        margin-right: 10px;
        background-color: #f5f5f5;
      }
    }

    .list_right[data-v-74a87c9c] {
      height: 100%;
      width: 85%;
      padding-bottom: 15px;
      border-bottom: 0.5px solid #f5f5f5;

      .list_title[data-v-74a87c9c] {
        width: 100%;
        padding-right: 5px;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 700;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }

      .list_time[data-v-74a87c9c] {
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #999;
        margin-top: 5px;
      }

      .list_data_box[data-v-74a87c9c] {
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        margin-top: 5px;
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #333;
        padding-right: 110px;

        .list_read_num[data-v-74a87c9c] {
          display: -webkit-box;
          display: -webkit-flex;
          display: flex;
          -webkit-box-align: center;
          -webkit-align-items: center;
          align-items: center;

          image[data-v-74a87c9c] {
            width: 13px;
            height: 13px;
            margin-right: 5px;
          }
        }

        .list_com_num[data-v-74a87c9c] {
          display: -webkit-box;
          display: -webkit-flex;
          display: flex;
          -webkit-box-align: center;
          -webkit-align-items: center;
          align-items: center;

          image[data-v-74a87c9c] {
            width: 14px;
            height: 13px;
            margin-right: 5px;
          }
        }
      }
    }

  }
</style>
