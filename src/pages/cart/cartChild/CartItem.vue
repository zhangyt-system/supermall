<template>
  <div>
    <div v-for="(item,index) in infoData" :key="index" class="totalCart" @click="iconClick">
      <!-- {{item.iid}}  -->
      <span class="iconfont"  v-show="iconShow">&#xe60c;</span>
      <span class="iconfont" v-show="!iconShow">&#xe60d;</span>
      <img :src="item.imgUrl" />
      <div class="cartRight">
        <div class="title">{{item.title}}</div>
        <div class="desc">商品描述:{{item.desc}}</div>
        <span class="price">¥{{item.newPrice}}</span>
        <span class="count">x{{item.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconShow:true
    };
  },
  props: {
    infoData: Array
  },
  methods:{
    iconClick(){
      if(this.iconShow===true){
        this.iconShow=false
      }else if(this.iconShow===false){
        this.iconShow=true
      }
    }
  }
};
</script>

<style scoped>
.iconfont{
  line-height: 100px;
  margin-right: 2px;
  font-size: 18px;
  color:#ff5777;
}
img {
  width: 80px;
  height: 100px;
  border-radius: 9px;
}
.cartRight {
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 6px;
  overflow: hidden;
  font-size: 14px;
}
.totalCart {
  margin: 5px;
  display: flex;
}
.title {
  overflow: hidden;
  line-height: 19px;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 19px;
  margin: 9px;
  font-size: 17px;
  color: #222;
}
.desc {
  height: 25px;
  margin: 9px;
  font-size: 14px;
  color: #666;
}
.price {
  height: 25px;
  margin: 9px;
  color: #ff5777;
  width: 99px;
  text-align: center;
}
.count {
  height: 25px;
}
</style>