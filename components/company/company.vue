<template>
  <view>
    <view data-v-ee43312e="" class="list_four" v-for="item in company" :key="item.id">
      <view data-v-ee43312e="" class="list_fourleft">
        <image data-v-ee43312e="" class="one_img" :src="'http://www.wsit.cn:8068/shuati1/public/index.php'+item.image">
        </image>
      </view>
      <view data-v-ee43312e="" class="list_fourright">
        <view data-v-ee43312e="" class="titltname">{{item.name}}</view>
        <view data-v-ee43312e="">
          <p v-html="item.analysis"></p>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "company",
    data() {
      return {

      };
    },
    props: [
      "company"
    ]
  }
</script>

<style lang="scss">
  view {
    box-sizing: border-box;
  }

  .list_four[data-v-ee43312e] {
    width: 100%;
    height: auto;
    background-color: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    padding-top: 15px;
    font-size: 14px;
    /* padding-bottom: 30rpx; */

    .list_fourleft {
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
    }

    .list_fourright[data-v-ee43312e] {
      height: auto;
      width: 66%;
      padding-bottom: 15px;
      border-bottom: 1px solid #f5f5f5;

      .titltname[data-v-ee43312e] {
        font-size: 13px;
        font-weight: 600;
        margin-bottom: 5px;
      }
    }
  }
</style>
