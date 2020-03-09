<template>
  <div>
    <NavBar>
      <span slot="center">购物街</span>
    </NavBar>
    <Scroll ref="scroll" @scroll="scroll" class="content" @pullingUp="pullingUp">
      <HomeSwiper :bannerArray="banner"></HomeSwiper>
      <HomeRecommend></HomeRecommend>
      <TabController :tabArr="tabArr" @tabClick="tabClick"></TabController>
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
      tabArr: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] }
      },
      currentType: "pop",
      position:0,
    };
  },
  computed: {
    goodsList() {
      return this.goods[this.currentType].list;
    },
    backTopShow(){
      return this.position>1000;
    }
  },
  components: {
    HomeSwiper,
    NavBar,
    HomeRecommend,
    TabController,
    GoodsList,
    Scroll,
    BackTop,
  },
  mounted() {
    this.$bus.$on('goodsItemLoadImage',()=>{
      this.$refs.scroll.scroll.refresh()
    })
    getHomeMuliteData().then(res => {
      // console.log(res.data.data.banner.list);
      this.banner = res.data.data.banner.list;
      // console.log(this.banner);
    }),
    this.getGoodsListData("pop");
    this.getGoodsListData("new");
    this.getGoodsListData("sell");
  },
  methods: {
    getGoodsListData(type) {
      
      getGoodsListData(type, this.goods[type].page).then(res => {
        console.log(res)
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page+=1
      });
    },
    tabClick(index) {
      console.log(index);
      switch (index) {
        case (index = 0):
          this.currentType = "pop";
          // console.log(this.currentType);
          break;
        case (index = 1):
          this.currentType = "new";
          // console.log(this.currentType);
          break;
        case (index = 2):
          this.currentType = "sell";
          // console.log(this.currentType);
          break;
      }
    },
    pullingUp() {
      console.log("下拉加载更多");
        this.$refs.scroll.scroll.finishPullUp()
      this.getGoodsListData(this.currentType)
    },
    scroll(pos) {
      this.position=-pos.y
  
    },
    toTop() {
      // console.log("dainjil")
      this.$refs.scroll.scroll.scrollTo(0, 0,300);
    }
  }
};
</script>

<style>
.content {
  position: absolute;
  top: 44px;
  bottom: 52px;
  left: 0;
  right: 0;
}

/* #ff8198 */
/* #ff5777 */
</style>