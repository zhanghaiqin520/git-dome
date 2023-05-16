<template>
  <view data-v-539ddc91="" class="box">
    <view data-v-539ddc91="" class="kong"></view>
    <view data-v-539ddc91="" class="top_box flexs3">
      <!--  top_border -->
      <view :class="item.type==currentindex?'top_border':''" @click="togleHandle(item.type)" v-for="item in objList"
        :key="item.type" data-v-539ddc91="" class="top_list">{{item.title}}</view>

    </view>
    <image data-v-539ddc91="" class="top_sousuo" src="../../static/ico_ss@2x.png">

      <!---->
    </image>
    <view data-v-539ddc91="" class="top_next flexs3">
      <view @click="toggle(item.id)" v-for="item in titleList" :key="item.id" data-v-539ddc91="" class="flexs1">
        <view data-v-539ddc91="" class="top_title">{{item.text}}</view>
        <image data-v-539ddc91="" class="top_image" :src="item.url">
        </image>
      </view>


    </view>
    <view data-v-539ddc91="" class="top_kong"></view>
    <!---->
    <!---->

    <!---->
    <!---->
    <!---->
    <!---->
    <!---->
    <!---->
  </view>
</template>

<script>
  export default {
    data() {
      return {

        titleList: [{
            id: 1,
            text: "发布时间",
            url: "../../static/kqfx_ico_xl@2x.png",
            flag: false,
            // kqfx_ico_sl@2x.png
          },
          {
            id: 2,
            text: "行业分类",
            url: "../../static/kqfx_ico_xl@2x.png",
            flag: false,
          },
          {
            id: 3,
            text: "价格",
            url: "../../static/kqfx_ico_xl@2x.png",
            flag: false,
          }
        ],
        fromList: {
          type: "",
          class_id: null,
          price_min: 0,
          price_max: "",
          order: "",

        },
        objList: [{
            type: 1,
            title: "笔试"
          },
          {
            type: 2,
            title: "面试"
          },
          {
            type: 3,
            title: "助攻"
          },
          {
            type: 4,
            title: "职称"
          }
        ],
        currentindex: 1,

      }

    },
    methods: {
      togleHandle(ids) {
        this.currentindex = ids
      },
      toggle(ids) {
        let objs = this.titleList.find((item) => {
          return item.id == ids
        })
        if (objs.flag) {
          objs.url = "../../static/kqfx_ico_sl@2x.png"
        } else {
          objs.url = "../../static/kqfx_ico_xl@2x.png"
        }
        objs.flag = !objs.flag
      }
    }

  }
</script>

<style lang="scss">
  view {
    box-sizing: border-box;
  }

  .box[data-v-539ddc91] {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    position: relative;
    color: #333;

    .top_next[data-v-539ddc91] {
      width: 100%;
      line-height: 35px;
      font-size: 13px;
      background-color: #fff;

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

        .top_title[data-v-539ddc91] {
          margin-right: 4px;
          font-size: 13px;
        }

        .top_image[data-v-539ddc91] {
          width: 8px;
          height: 5px;
        }
      }
    }

    .top_sousuo[data-v-539ddc91] {
      width: 14px;
      height: 15px;
      position: absolute;
      right: 15px;
      -webkit-transform: translateY(-35px);
      transform: translateY(-35px);
    }

    .kong[data-v-539ddc91] {
      width: 100%;
      height: 0;
      background-color: #fff;
    }

    .top_box[data-v-539ddc91] {
      width: 100%;
      height: 50px;
      padding: 0 45px;
      font-size: 17px;
      background-color: #fff;

      .top_list[data-v-539ddc91] {
        padding-bottom: 5px;
      }

      .top_border[data-v-539ddc91] {
        font-size: 18px;
        font-weight: 700;
        border-bottom: solid 1px #ffdd47;
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
</style>
