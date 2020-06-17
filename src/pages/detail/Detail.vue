<template>
  <div>
    <DetailNav @click></DetailNav>
    <Scroll class="scroll" ref="scroll" @scroll="scroll">
      <!-- 轮播图 -->
      <DetailSwiper :topImages="topImages"></DetailSwiper>
      <!-- 详情页面熟信息 -->
      <DetailDesc :itemDesc="itemDesc"></DetailDesc>
      <!-- 店铺信息 -->
      <DetailShopInfo :shopInfo="shopInfo"></DetailShopInfo>
      <!-- 详情图片 -->
      <DetailPic :detailPic="detailPic"></DetailPic>
      <!-- 详情页参数信息 -->
      <DetailParams :detailParams="detailParams" ref="params"></DetailParams>
      <!-- 用户评价 -->
      <DetailRate :detailRate="detailRate" ref="rate"></DetailRate>
      <!-- 推荐信息 -->
      <DetailRecommend :detailRecommend="detailRecommend" ref="recommend"></DetailRecommend>
    </Scroll>
    <BackTop @click.native="backTopClick" v-show="backTop" :pullUpLoad="false"></BackTop>
    <DetailBottom @toCartClick="toCartClick"></DetailBottom>
  </div>
</template>

<script>
import { getGoodsItemData, getRecommendData, Shop } from "../../network/detail";
import DetailNav from "./detailChild/DetailNav";
import DetailSwiper from "./detailChild/DetailSwiper";
import DetailDesc from "./detailChild/DetailDesc";
import DetailShopInfo from "./detailChild/DetailShopInfo";
import DetailPic from "./detailChild/DetailPic";
import DetailParams from "./detailChild/DetailParams";
import DetailRate from "./detailChild/DetailRate";
import DetailRecommend from "./detailChild/DetailRecommend";
import BackTop from "@/components/backTop/BackTop";
import Scroll from "@/components/scroll/Scroll";
import DetailBottom from "./detailChild/DetailBottom";
export default {
  data() {
    return {
      iid: "",
      topImages: [],
      itemDesc: {},
      shopInfo: {},
      detailPic: {},
      detailParams: {},
      detailRate: {},
      detailRecommend: [],
      position: 0,
      shop: {}
    };
  },
  components: {
    DetailNav,
    DetailSwiper,
    DetailDesc,
    DetailShopInfo,
    DetailPic,
    DetailParams,
    DetailRate,
    DetailRecommend,
    DetailBottom,
    BackTop,
    Scroll
  },
  created() {
    this.iid = this.$route.params.iid;
    // console.log(this.iid);
  },
  mounted() {
    this.getGoodsItemData(this.iid);
    this.getRecommendData();
  },
  computed: {
    backTop() {
      return this.position > 1000;
    }
  },
  updated() {
    // 获取需要的四个offsetTop
    this._getOffsetTops();
  },
  methods: {
    _getOffsetTops() {
      this.themeTops = [];
      this.themeTops.push(this.$refs.base.$el.offsetTop);
      this.themeTops.push(this.$refs.param.$el.offsetTop);
      this.themeTops.push(this.$refs.comment.$el.offsetTop);
      this.themeTops.push(this.$refs.recommend.$el.offsetTop);
      this.themeTops.push(Number.MAX_VALUE);
    },
    getGoodsItemData(iid) {
      getGoodsItemData(iid).then(res => {
        //   console.log(res)
        (this.topImages = res.data.result.itemInfo.topImages),
          (this.itemDesc = res.data.result);
        this.shopInfo = res.data.result.shopInfo;
        this.detailPic = res.data.result;
        this.detailParams = res.data.result.itemParams;
        this.detailRate = res.data.result.rate;
        this.shop = new Shop(res.data);
        console.log(res.data);
      });
    },
    getRecommendData() {
      getRecommendData().then(res => {
        // console.log(res);
        this.detailRecommend = res.data.data.list;
      });
    },
    backTopClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 300);
    },
    scroll(pos) {
      this.position = -pos.y;
    },
    toCartClick() {
      this.$store.commit("addCart", this.shop);
    }
  }
};
</script>

<style scoped>
.scroll {
  position: absolute;
  bottom: 53px;
  top: 44px;
  left: 0px;
  right: 0px;
}
</style>