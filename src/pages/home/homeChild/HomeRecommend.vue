<template>
  <div>
    <!-- <a href="http://act.mogujie.com/zzlx67"> -->
    <img :src="imgURL.src" />
  </div>
</template>

<script>
import recommendPic from '@/assets/img/recommend_bg.jpg'
export default {
  data() {
    return {
        imgURL:{
            src:recommendPic
        }
    };
  }
};
</script>

<style scoped>
img{
    width:100%;
}
</style>