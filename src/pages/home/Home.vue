<template>
  <div>
    <NavBar>
      <span slot="center">购物街</span>
    </NavBar>
    <HomeSwiper :bannerArray="banner"></HomeSwiper>
    <HomeRecommend></HomeRecommend>
    <TabController :tabArr="tabArr"></TabController>
  </div>
</template>

<script>
import { getHomeMuliteData } from "@/network/home";
import HomeSwiper from './homeChild/HomeSwiper';
import NavBar from '@/components/navbar/NavBar';
import HomeRecommend from './homeChild/HomeRecommend';
import TabController from '@/components/tabController/TabController'
export default {
  data(){
    return{
      banner:[],
      tabArr:["流行","新款","精选"]
    }
  },
  components:{
    HomeSwiper,
    NavBar,
    HomeRecommend,
    TabController
  },
  mounted(){
    getHomeMuliteData().then((res)=>{
      console.log(res.data.data.banner.list);
      this.banner=res.data.data.banner.list
      console.log(this.banner)
    })
  }
};
</script>

<style>
/* #ff8198 */
/* #ff5777 */
</style>