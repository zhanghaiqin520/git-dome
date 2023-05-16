<template>
  <view data-v-74a87c9c="" class="content">
    <view data-v-74a87c9c="" class="tabber_box flexs1">
      <view @click="getinfoid(item.id)" :class="item.id==type_id?'chooseactive':''" v-for="item in recruitlsit" :key="item.id
      " data-v-74a87c9c="" class="tabber_item ">
        <view data-v-74a87c9c="">{{item.name}}</view>
        <view data-v-74a87c9c="" :class="item.id==type_id?'title_line':''"></view>
      </view>
    </view>
    <view class="list_box">

      <news :infoList="inforecruitlsit"> </news>
      <errotips v-show="!inforecruitlsit.length"></errotips>
    </view>


  </view>
</template>

<script>
  export default {
    data() {
      return {
        recruitlsit: [],
        type_id: 1,
        token: '',
        inforecruitlsit: [],
      };
    },
    onLoad() {
      this.Recruitinforist()
      this.getRecruitinforist()
    },
    methods: {
      getinfoid(e) {
        this.type_id = e
        this.getRecruitinforist()
      },
      async Recruitinforist() {
        const {
          data: res
        } = await uni.$http.post('/zhang/Recruitinformation/get_type_list');
        if (res.code !== 1) return uni.$showMsg()
        this.recruitlsit = res.data
        uni.$showMsg("数据加载成功..")
      },
      async getRecruitinforist() {
        const {
          data: res
        } = await uni.$http.post('/zhang/Recruitinformation/get_information_list', {
          type_id: this.type_id,
          token: this.token,
        });
        if (res.code !== 1) return uni.$showMsg()
        this.inforecruitlsit = res.data
      },

    }
  }
</script>

<style lang="scss">
  view {
    box-sizing: border-box;
  }

  .content[data-v-74a87c9c] {
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    .list_box {
      width: 100%;
      height: calc(100% - 50px);
      margin-top: 50px;
      overflow-y: auto;
    }

    .tabber_box[data-v-74a87c9c] {
      width: 100%;
      height: 40px;
      margin: auto;
      background-color: #fff;
      overflow-x: scroll;
      padding-left: 10px;
      position: fixed;
      top: 42px;
      z-index: 10;
      margin-right: 15px;

      .chooseactive[data-v-74a87c9c] {
        width: auto;
        font-size: 1px;
        font-family: PingFang SC;
        font-weight: 700 !important;
        color: #333 !important;
        margin: 0 15px;
      }

      .tabber_item[data-v-74a87c9c] {
        width: auto;
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #666;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        margin: 0 15px;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        flex-direction: column;
        -webkit-flex-shrink: 0;
        flex-shrink: 0;

        .title_line[data-v-74a87c9c] {
          width: 30px;
          height: 2px;
          background: #ffdd47;
          border-radius: 1px;
          margin-top: 2px;
        }
      }
    }

    .flexs1 {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;

      justify-content: flex-start;

      align-items: center;
    }
  }
</style>
