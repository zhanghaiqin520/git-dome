<template>
  <view data-v-370c40b6="" class="content">
    <view data-v-370c40b6="" class="list_box">
      <navigator v-for="item in examlsit" :key="item.type" class="list_item">
        <view data-v-370c40b6="" class="list_item_l">
          <view data-v-370c40b6="" class="list_item_l_title">{{item.t1}}</view>
          <view data-v-370c40b6="" class="list_item_ms">{{item.t2}}</view>
        </view>
        <view data-v-370c40b6="" class="list_item_r">
          <image data-v-370c40b6="" :src="baseurl+item.url">
          </image>
        </view>
      </navigator>

    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        examlsit: [{
          type: 1,
          t1: "考试",
          t2: "全真模拟",
          url: "tmlx_img_qzmo@2x.png"
        }, {
          type: 2,
          t1: "考试",
          t2: "全真模拟",
          url: "tmlx_img_qzmo@2x.png"
        }],
        baseurl: "../../static/",

      };
    }
  }
</script>

<style lang="scss">
  view {
    box-sizing: border-box;
  }

  .content[data-v-370c40b6] {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #fff;
    border-top: 0.5px solid #f5f5f5;

    .list_box[data-v-370c40b6] {
      width: 100%;
      height: auto;
      margin-top: 20px;
      padding: 0 15px;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      -webkit-box-align: start;
      -webkit-align-items: flex-start;
      align-items: flex-start;
      -webkit-flex-wrap: wrap;
      flex-wrap: wrap;

      .list_item[data-v-370c40b6] {
        width: 167px;
        height: 90px;
        border: 0.5px solid #ccc;
        border-radius: 5px;
        margin-bottom: 15px;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;

        justify-content: space-between;

        align-items: center;
        padding: 15px 10px;

        .list_item_l_title[data-v-370c40b6] {
          font-size: 17px;
          font-family: PingFang SC;
          font-weight: 700;
          color: #333;
        }

        .list_item_ms[data-v-370c40b6] {
          width: 60px;
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #666;
          margin-top: 7px;
        }

        .list_item_r[data-v-370c40b6] {
          width: 67px;
          height: 67px;

          image[data-v-370c40b6] {
            width: 67px;
            height: 67px;
          }

          image {
            max-width: 100%;
            display: inline-block;
            position: relative;
            z-index: 0;
          }
        }
      }
    }


  }
</style>
