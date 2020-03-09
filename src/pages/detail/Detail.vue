<template>
  <div>
      <NavBar class="navbar">
          <span class="iconfont" slot='left' @click="backClick">&#xe607;</span>
          <span slot='center' v-for="(item,index) in navArr"
          :key='index'
          class="navItem"
          >{{item}}</span>
      </NavBar>
        <DetailSwiper :topImages='topImages'></DetailSwiper>
        <DetailDesc :itemDesc='itemDesc'></DetailDesc>
  </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar";
import {getGoodsItemData} from '../../network/detail';
import DetailSwiper from './detailChild/DetailSwiper';
import DetailDesc from './detailChild/DetailDesc'
export default {
    data(){
        return{
            navArr:['商品','参数','评论','推荐'],
            iid:'',
            topImages:[],
            itemDesc:{}
        }
    },
  components: {
    NavBar,
    DetailSwiper,
    DetailDesc
  },
  created(){
      this.iid=this.$route.params.iid
      console.log(this.iid)
  },
  mounted(){
      this.getGoodsItemData(this.iid)
  },
  methods:{
      getGoodsItemData(iid){
          getGoodsItemData(iid).then((res)=>{
              console.log(res)
              this.topImages=res.data.result.itemInfo.topImages,
              this.itemDesc=res.data.result
          })
      },
      backClick(){
          this.$router.go(-1)
      }
  }
};
</script>

<style scoped>
.navbar{
    background-color: #fff;
    color:gray;
}
.navItem{
    margin: 8px;
}
</style>