<template>
  <view data-v-ee43312e="" class="big">
    <view data-v-ee43312e="" class="top">
      <view data-v-ee43312e="" class="flexs1">
        <image @click="goback" src="../../static/ico_dh_bk@2x.png" data-v-ee43312e="" class="back_img">

          <!---->
        </image>
        <view data-v-ee43312e="" class="top_kuang flexs1">
          <image src="../../static/ico_ss@2x.png" data-v-ee43312e="" class="border_serch">

            <!---->
          </image>
          <input @keydown.enter="show" v-model.trim="fromdata.search" data-v-ee43312e="" placeholder="输入真题、资料、公司名称">

          </input>
          <image @click="clear" src="../../static/ico_gb@2x.png" data-v-ee43312e="" class="close_img">
          </image>
        </view>
      </view>
      <view data-v-ee43312e="" class="lei_box flexs3" @click="getTitle">
        <view :class="1==Currindex?'active':'lei_title'" data-index="1" data-v-ee43312e="" class="">文章</view>
        <view :class="2==Currindex?'active':'lei_title'" data-index="2" data-v-ee43312e="" class="">课程</view>
        <view :class="3==Currindex?'active':'lei_title'" data-index="3" data-v-ee43312e="" class="">试卷</view>
        <view :class="4==Currindex?'active':'lei_title'" data-index="4" data-v-ee43312e="" class="">名企</view>
        <view :class="5==Currindex?'active':'lei_title'" data-index="5" data-v-ee43312e="" class="">问答</view>
      </view>
      <scroll-view scroll-y style="width: 100% ; margin-top: 5px;">

        <template v-if="Currindex==1">
          <wenZhang :searlist="searlist"></wenZhang>
        </template>
        <template v-if="Currindex==2">
          <kenChen :kechen="kechen"></kenChen>
        </template>
        <template v-if="Currindex==3">
          <exam :shijuan="shijuan"></exam>
        </template>
        <template v-if="Currindex==4">
          <company :company="company"></company>
        </template>
        <template v-if="Currindex==5">
          <question :ask="ask"></question>
        </template>
        <errotips v-show="!flag"></errotips>
      </scroll-view>




    </view>
  </view>

</template>

<script>
  export default {
    data() {
      return {
        fromdata: {
          is_hot: 1,
          is_index: null,
          search: "",
          type: null,
          id_good: null,
          page: 1,
          pageSize: 10,
          token: ''
        },
        searlist: [],
        kechen: [],
        shijuan: [],
        company: [],
        ask: [],
        Currindex: 1,


      };
    },

    computed: {

      flag() {

        if (this.Currindex == 1) {
          return this.searlist.length
        }
        if (this.Currindex == 2) {
          return this.kechen.length
        }
        if (this.Currindex == 3) {
          return this.shijuan.length
        }
        if (this.Currindex == 4) {
          return this.company.length
        }
        if (this.Currindex == 5) {
          return this.ask.length
        }
      }
    },

    methods: {
      //返回
      goback() {
        uni.switchTab({
          url: '/pages/home/home'
        });
        // console.log(666);
      },
      //切换
      clear() {
        this.fromdata.search = ""
      },
      getTitle(e) {
        if (!e.target.dataset.index) return
        this.Currindex = e.target.dataset.index
        console.log(this.Currindex);


      },
      //搜索事件
      show() {
        this.Search()
        this.Company()
        this.Question()
        this.Ask()
        this.Curriculum()
        // console.log(this.searlist);
        // console.log(this.company);

      },
      // 1
      async Search() {
        const {
          data: res
        } = await uni.$http.post('/zhang/Recruitinformation/search', this.fromdata);
        if (res.code !== 1) return uni.$showMsg()
        this.searlist = res.data
        // console.log(this.curriculum);
      },
      //2
      async Curriculum() {

        const {
          data: res
        } = await uni.$http.post('/Curriculum/show', this.fromdata);
        if (res.code !== 1) return uni.$showMsg()
        this.kechen = res.data
        console.log(this.kechen);
        // console.log(this.curriculum);
      },
      //3
      async Question() {
        const {
          data: res
        } = await uni.$http.post('/question_bank/show', this.fromdata);
        if (res.code !== 1) return uni.$showMsg()
        this.shijuan = res.data
        // console.log(this.curriculum);
      },
      //4
      async Company() {
        const {
          data: res
        } = await uni.$http.post('/company/show', this.fromdata);
        if (res.code !== 1) return uni.$showMsg()
        this.company = res.data
        // console.log(this.curriculum);
      },
      //5
      async Ask() {
        const {
          data: res
        } = await uni.$http.post('/ask/show', this.fromdata);
        if (res.code !== 1) return uni.$showMsg()
        this.ask = res.data
        // console.log(this.curriculum);
      },



    },

  }
</script>

<style lang="scss">
  .big[data-v-ee43312e] {
    width: 100vw;
    height: 100vh;

    .top[data-v-ee43312e] {
      width: 100%;
      height: 85px;
      background-color: #fff;
      padding-top: 8px;

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

        .back_img[data-v-ee43312e] {
          width: 10px;
          height: 18px;
          margin: 0 10px 0 15px;
        }

        .top_kuang[data-v-ee43312e] {
          width: 325px;
          height: 30px;
          background: #f5f5f5;
          border-radius: 5px;


          .close_img[data-v-ee43312e] {
            width: 13px;
            height: 13px;
            margin-left: 80px;

          }

          input {
            display: block;
            font-size: 16px;
            line-height: 1.4em;
            height: 1.4em;
            min-height: 1.4em;
            overflow: hidden;
          }

          .border_serch[data-v-ee43312e] {

            width: 14px;
            height: 15px;
            margin: 0 10px 0 12px;
          }
        }
      }

      .lei_box[data-v-ee43312e] {
        width: 100%;
        height: 30px;
        margin-top: 13px;

        .active[data-v-ee43312e] {
          width: 33px;
          height: 21px;
          line-height: 15px;
          font-size: 16px;
          font-weight: 700;
          border-bottom: 2px solid #ffdd47;
        }

        .lei_title[data-v-ee43312e] {
          width: 35px;
          height: 15px;
          line-height: 15px;
          font-size: 15px;
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
  }
</style>
