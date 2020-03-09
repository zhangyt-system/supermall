<template>
  <Swiper>
      <SwiperItem v-for="(item,index) in bannerArray" :key="index">
          <image :src="item.image"/>
      </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/swiper";
export default {
    props:{
        bannerArray:{
            type:Array,
            default:[]
        }
    },
    components:{
        Swiper,
        SwiperItem
    },
    mounted(){
        // console.log(this.bannerArray)
    }
}
</script>

<style>

</style>