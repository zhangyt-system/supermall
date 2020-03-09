<template>
  <div>
    <div @click="goodsItemClick">
    <img :src="goodsItem.show.img" @load="goodsItemLoadImage"/>
    <p class="title">{{goodsItem.title}}</p>
    <span>¥{{goodsItem.price}}</span>
    <span>❤{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: Object
  },
  methods:{
    goodsItemLoadImage(){
      this.$bus.$emit('goodsItemLoadImage')
    },
    goodsItemClick(){
      this.$router.push('/detail/'+this.goodsItem.iid)
    }
  }

};
</script>

<style scoped>

img{
  width: 150px;
  margin-left: 6px;
}
.title{
  width: 150px;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 6px;
  overflow: hidden;
  font-size: 14px;

}
span{
  text-align: center;
  margin-left:23px;
  font-size: 13px;
}
</style>