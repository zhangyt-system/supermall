<template>
  <Swiper>
    <SwiperItem v-for="(item,index) in bannerImage" :key="index">
      <!-- <h2>{{item}}</h2> -->
      <img :src="item" />
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/swiper";
export default {
  props: {
    bannerImage: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  mounted() {
    console.log(this.bannerImage);
  }
};
</script>

<style>
</style>