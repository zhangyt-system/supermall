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
      <div>{{iid}}</div>
  </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar";
import {getGoodsItemData} from '../../network/detail';
import DetailSwiper from './detailChild/DetailSwiper'
export default {
    data(){
        return{
            navArr:['商品','参数','评论','推荐'],
            iid:'',
            topImages:[]
        }
    },
  components: {
    NavBar,
    DetailSwiper
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
              console.log(res.data.result.itemInfo.topImages)
              this.topImages=res.data.result.itemInfo.topImages
              console.log(this.topImages)
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