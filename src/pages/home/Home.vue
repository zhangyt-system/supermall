<template>
  <div>
    <NavBar class="nav">
      <span slot="center">购物街</span>
    </NavBar>
    <TabController
      :tabArr="tabArr"
      @tabClick="tabClick"
      v-show="isTabFixed"
      class="tabcontroller"
      ref="tab"
    ></TabController>
    <Scroll ref="scroll" @scroll="scroll" class="content" @pullingUp="pullingUp" :pullUpLoad="true">
      <!-- 轮播图 -->
      <HomeSwiper :bannerImage="bannerImage"></HomeSwiper>
      <!-- 推荐 -->
      <HomeRecommend></HomeRecommend>
      <TabController ref="tabcontroll" :tabArr="tabArr" @tabClick="tabClick"></TabController>
      <GoodsList :goodsList="goodsList"></GoodsList>
    </Scroll>
    <div v-show="backTopShow">
      <BackTop @click.native="toTop"></BackTop>
    </div>
  </div>
</template>

<script>
import { getHomeMuliteData, getGoodsListData } from "@/network/home";
import HomeSwiper from "./homeChild/HomeSwiper";
import NavBar from "@/components/navbar/NavBar";
import HomeRecommend from "./homeChild/HomeRecommend";
import TabController from "@/components/tabController/TabController";
import GoodsList from "@/components/goodsList/GoodsList";
import Scroll from "@/components/scroll/Scroll";
import BackTop from "@/components/backTop/BackTop";
export default {
  data() {
    return {
      banner: [],
      bannerImage: [],
      tabArr: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] }
      },
      currentType: "pop",
      position: 0,
      isTabFixed: false,
      tabOffsetTop: 0,
      showBackTop: false
    };
  },
  computed: {
    goodsList() {
      return this.goods[this.currentType].list;
    },
    backTopShow() {
      return this.position > 1000;
    }
  },
  components: {
    HomeSwiper,
    NavBar,
    HomeRecommend,
    TabController,
    GoodsList,
    Scroll,
    BackTop
  },
  mounted() {
    // if (scroll !== undefined) {
    this.$bus.$on("goodsItemLoadImage", () => {
      //判断一下scroll不为空
      this.$refs.scroll.scroll.refresh;
      console.log(this.$refs.scroll.scroll);
    });
    // },
    getHomeMuliteData().then(res => {
      this.banner = res.data.data.banner.list;
      console.log();
      for (var i = 0; i < this.banner.length; i++) {
        this.bannerImage.push(this.banner[i].image);
      }
      console.log(this.bannerImage);
    }),
      this.getGoodsListData("pop");
    this.getGoodsListData("new");
    this.getGoodsListData("sell");
  },
  methods: {
    //请求获得goods list数据
    getGoodsListData(type) {
      getGoodsListData(type, this.goods[type].page).then(res => {
        console.log(res);
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
      });
    },
    tabClick(index) {
      //分不同的情况，请求数据是pop,new,sell
      switch (index) {
        case (index = 0):
          this.currentType = "pop";
          break;
        case (index = 1):
          this.currentType = "new";
          break;
        case (index = 2):
          this.currentType = "sell";
          break;
      }
      //使覆盖的tab和之前的tab  的index保持一致
      if (this.$refs.tabcontroll.currIndex !== undefined) {
        this.$refs.tabcontroll.currIndex = index;
        this.$refs.tab.currIndex = index;
      }
    },
    //下拉加载更多
    pullingUp() {
      if (scroll !== undefined) {
        this.$refs.scroll.scroll.finishPullUp();
        this.getGoodsListData(this.currentType);
      }
    },
    scroll(pos) {
      this.position = -pos.y;
      // 1.决定tabFixed是否显示
      // this.isTabFixed = pos.y < -this.tabOffsetTop;
      this.isTabFixed = pos.y < -this.$refs.tabcontroll.$el.offsetTop;

      // 2.决定backTop是否显示
      this.showBackTop = pos.y < -1000;
    },
    toTop() {
      // console.log("dainjil")
      if (scroll !== undefined) {
        this.$refs.scroll.scroll.scrollTo(0, 0, 300);
      }
    }
  }
};
</script>

<style scoped>
.content {
  position: absolute;
  top: 44px;
  bottom: 52px;
  left: 0;
  right: 0;
  z-index: -1;
}
.nav {
  background-color: #ff8198;
  color: #ccc;
}
.tabcontroller {
  z-index: 99999;
  background-color: #fff;
}

/* #ff8198 qian*/
/* #ff5777 shen*/
</style>