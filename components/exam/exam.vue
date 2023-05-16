<template>
  <view>
    <view data-v-ee43312e="" class="creditbox" v-for="item in shijuan " :key="item.id">
      <view data-v-ee43312e="" class="chapterbox text-bold">{{item.name}}</view>
      <view data-v-ee43312e="" class="secondview">
        <view data-v-ee43312e="" class="studentbox">
          <image class="studenter" data-v-ee43312e="" src="../../static/ss_ico_xx@2x.png">

          </image>
          <view data-v-ee43312e="">{{item.answer_num}}人已学习</view>
        </view>
        <view data-v-ee43312e="" class="timebox">
          <image src="../../static/sjxq_ico_sj@2x.png" data-v-ee43312e="" class="clocker">

            <!---->
          </image>
          <view data-v-ee43312e="">答题时长: {{item.answer_time}}分钟</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "exam",
    data() {
      return {

      };
    },
    props: [
      "shijuan"
    ],
  }
</script>

<style lang="scss">
  view {
    box-sizing: border-box;
  }

  .creditbox[data-v-ee43312e] {
    height: 70px;
    width: 100%;
    background-color: #fff;

    .chapterbox[data-v-ee43312e] {
      height: 40px;
      line-height: 40px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: calc(100% - 30px);
      margin: 0 auto;
      font-size: 30rpx;
    }

    .text-bold {
      font-weight: 700;
    }

    .secondview[data-v-ee43312e] {
      width: calc(100% - 30px);
      margin: 0 auto;
      height: 30px;
      padding-bottom: 10px;
      border-bottom: 0.5px solid #f5f5f5;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      color: #656565;


      .studentbox[data-v-ee43312e] {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        margin-right: 15px;
        font-size: 14px;

        .studenter[data-v-ee43312e] {
          width: 14px;
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

      .timebox[data-v-ee43312e] {
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        font-size: 14px;

        .clocker[data-v-ee43312e] {
          margin-right: 5px;
          width: 11px;
          height: 13px;

        }
      }
    }
  }
</style>
