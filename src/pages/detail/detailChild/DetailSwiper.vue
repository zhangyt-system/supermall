<template>
  <div>
      <!-- <div>DetailSwiper</div> -->
      <Swiper>
          <SwiperItem v-for="(item,index) in topImages" :key="index">
              <img :src='item' class="topImages"/>
          </SwiperItem>
      </Swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from '../../../components/swiper/index'
export default {
    props:{
        topImages:Array
    },
    components:{
        Swiper,
        SwiperItem
    }
}
</script>

<style scoped>
.topImages{
    height:300px;
    overflow: hidden;
    box-sizing: border-box;
    object-fit:cover
}
</style>