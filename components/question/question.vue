<template>
  <view class="box">
    <view data-v-ee43312e="" class="list_five" v-for="item in ask" :key="item.id">
      <view data-v-ee43312e="" class="zombietitle">问题列表(1)</view>
      <view data-v-ee43312e="" class="list_fiveitem">
        <view data-v-ee43312e="" class="zombieimg">{{item.class_name}}</view>
        <view data-v-ee43312e="" class="contentzombie">{{item.content}}</view>
        <view data-v-ee43312e="" class="zombietime">{{item.time_info}}</view>
      </view>
    </view>
  </view>

</template>

<script>
  export default {
    name: "question",
    data() {
      return {

      };
    },
    props: ["ask"]
  }
</script>

<style lang="scss">
  view {
    box-sizing: border-box;
  }

  .list_five[data-v-ee43312e] {
    width: 100%;
    padding: 0 15px;
    background-color: #fff;
    padding-bottom: 10px;
    font-size: 14px;

    .zombietitle[data-v-ee43312e] {
      height: 40px;
      line-height: 40px;
      color: #666;
    }

    .list_fiveitem[data-v-ee43312e] {
      height: auto;
      width: 100%;
      border: 0.5px solid transparent;
      border-radius: 5px;
      box-shadow: 0 2px 10px 0 rgba(15, 11, 2, .13);
      position: relative;
      padding: 10px 0px;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      flex-direction: column;
      margin-bottom: 10px;

      .zombieimg[data-v-ee43312e] {
        position: absolute;
        top: 0;
        right: 0;
        width: 45px;
        height: 18px;
        line-height: 18px;
        text-align: center;
        font-size: 13px;
        border-bottom-left-radius: 5px;
        border-top-right-radius: 5px;
        background-color: #fa3a2b;
        color: #fff;
        line-height: 18px;
        text-align: center;
      }

      .contentzombie[data-v-ee43312e] {
        overflow: hidden;
        text-overflow: ellipsis;
        width: 266px;
        height: auto;
        line-height: 22px;
        padding-left: 10px;
        padding-bottom: 4px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }

      .zombietime[data-v-ee43312e] {
        padding-left: 10px;
        height: 20px;
        line-height: 20px;
        width: 305px;
        color: #b6b6b6;
      }
    }
  }
</style>
