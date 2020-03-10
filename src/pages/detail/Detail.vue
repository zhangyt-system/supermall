<template>
  <div>
    <DetailNav></DetailNav>
    <Scroll class="scroll" ref="scroll" @scroll="scroll">
      <DetailSwiper :topImages="topImages"></DetailSwiper>
      <DetailDesc :itemDesc="itemDesc"></DetailDesc>
      <DetailShopInfo :shopInfo="shopInfo"></DetailShopInfo>
      <DetailPic :detailPic="detailPic"></DetailPic>
      <DetailParams :detailParams="detailParams" ref="params"></DetailParams>
      <DetailRate :detailRate="detailRate" ref="rate"></DetailRate>
      <DetailRecommend :detailRecommend="detailRecommend" ref="recommend"></DetailRecommend>
    </Scroll>
    <BackTop @click.native="backTopClick" v-show="backTop" :pullUpLoad="false"></BackTop>
    <DetailBottom/>
  </div>
</template>

<script>
import { getGoodsItemData, getRecommendData } from "../../network/detail";
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
import DetailBottom from './detailChild/DetailBottom'
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
      position:0
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
    console.log(this.iid);
  },
  mounted() {
    this.getGoodsItemData(this.iid);
    this.getRecommendData();
  },
  computed:{
      backTop(){
          return this.position>1000;
      }
  },
  methods: {
    getGoodsItemData(iid) {
      getGoodsItemData(iid).then(res => {
        //   console.log(res)
        (this.topImages = res.data.result.itemInfo.topImages),
          (this.itemDesc = res.data.result);
        this.shopInfo = res.data.result.shopInfo;
        this.detailPic = res.data.result;
        this.detailParams = res.data.result.itemParams;
        this.detailRate = res.data.result.rate;
      });
    },
    getRecommendData() {
      getRecommendData().then(res => {
        console.log(res);
        this.detailRecommend = res.data.data.list;
      });
    },
    backTopClick(){
        this.$refs.scroll.scroll.scrollTo(0,0,300)
    },
    scroll(pos){
        this.position=-pos.y
    }
  }
};
</script>

<style scoped>
.scroll{
    position: absolute;
    bottom:53px;
    top:44px;
    left:0px;
    right:0px;
}
</style>