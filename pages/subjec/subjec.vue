<template>

  <view class="scroll-view-container">
    <!-- 左侧的滚动视图区域 -->
    <scroll-view class="left-scroll-view" scroll-y :style="{height: wh + 'px'}">
      <view @click="getlistId(item.id)" v-for="item,i in leftLsit" class="left-scroll-view-item" :key="item.id"
        :class="item.id==currindex?'active':''">
        {{item.name}}
      </view>


    </scroll-view>
    <!-- 可以跳转的页面 -->
    <view data-v-1e5090f4="" class="right_box">
      <view data-v-1e5090f4="" class="right_list">
        <navigator :url="'/subpkg/Brush/Brush?classid='+item.id" v-for="(item,i) in  examList[0].second_list"
          :key="item.id" data-v-1e5090f4="" class="right_item">
          {{item.name}}

        </navigator>



      </view>
    </view>


  </view>
  </view>

</template>

<script>
  export default {
    data() {
      return {
        leftLsit: [],
        currindex: 1,
        wh: 0
      };
    },
    methods: {
      // H获取侧边导航栏数据
      async subject_class() {
        const {
          data: res
        } = await uni.$http.post('/subject_class/index');
        if (res.code !== 1) return uni.$showMsg()
        this.leftLsit = res.data
        uni.$showMsg("数据加载成功..")
        console.log(this.leftLsit);
      },
      // 
      getlistId(id) {
        this.currindex = id
      }

    },
    onLoad() {
      const sysInfo = uni.getSystemInfoSync()
      this.wh = sysInfo.windowHeight
      this.subject_class()
    },
    computed: {
      examList() {
        return this.leftLsit.filter((item) => {

          return item.id == this.currindex


        })

      }
    }
  }
</script>

<style lang="scss">
  .scroll-view-container {
    display: flex;

    .right_box[data-v-1e5090f4] {
      width: 260px;
      height: 100%;
      background-color: #fff;
      border-top: solid 0.5px #fff;
      flex-wrap: wrap;
      padding: 0 10px;


      .right_list[data-v-1e5090f4] {
        margin-top: 0px;

        display: flex;

        justify-content: flex-start;

        align-items: flex-start;

        flex-wrap: wrap;
        margin-top: 20px;

        .right_item[data-v-1e5090f4] {
          padding: 7px 11px;
          border: 0.5px solid #ccc;
          border-radius: 5px;
          margin: 7px 5px;
        }
      }
    }

    .left-scroll-view {
      width: 105px !important;


      .left-scroll-view-item {
        line-height: 55px;
        background-color: #f2f2f2;
        text-align: center;
        font-size: 12px;

        // 激活项的样式
        &.active {
          background-color: #ffffff;
          position: relative;

          // 渲染激活项左侧的红色指示边线
          &::before {
            content: ' ';
            display: block;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 2px;
            height: 10px;
            background: #ffdd47;
            border-radius: 1px;
          }
        }
      }
    }
  }
</style>
