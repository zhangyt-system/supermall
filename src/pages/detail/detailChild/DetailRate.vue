<template>
  <div>
    <!-- {{detailRate}} -->
    <div class="totalrate">
      <span class="rate">用户评价</span>
      <span class="more">更多 ＞</span>
    </div>
    <div class="user">
      <img class="userImg" :src="detailRate.list[0].user.avatar" />
      <div class="userName">{{detailRate.list[0].user.uname}}</div>
    </div>
    <div class="ratecontent">
        {{detailRate.list[0].content}}
    </div>
    <div class="otherMore">
        <div class="created">{{detailRate.list[0].created | showDate}}</div>
        <div class="style">{{detailRate.list[0].style}}</div>
    </div>
  </div>
</template>

<script>
import {formatDate} from '@/common/utils'
export default {
  props: {
    detailRate: Object
  },
  computed: {
    list() {
      return this.detailRate.list[0];
    }
  },
  filters:{
      showDate:function(value){
          let date = new Date(value*1000);
          return formatDate(date,'yyyy/MM-dd')
      }
  }
};
</script>

<style scoped>
.totalrate {
  display: flex;
  font-size: 14px;
  color: #333;
  border-bottom: 1px solid lightgray;
  margin: 0 12px;
  margin-top: 19px;
}
.rate {
  flex: 1;
  margin-left: 12px;
}
.more {
  width: 20%;
}

.user{
    display: flex;
}
.userImg{
    width: 45%;
  width: 42px;
  height: 45px;
  margin:12px;
  border-radius: 50%;
}
.userName{
    flex: 1;
    text-align: left;
    line-height: 69px;
    color:#444;
}
.ratecontent{
    margin: 0 12px;
    color:#666;
    font-size: 13px;
}
.otherMore{
    display: flex;
    text-align: left;
    height:24px;
    font-size: 12px;
    color:#777;
    margin-left: 12px;
    margin-bottom: 24px;
    margin-top: 5px;
}
.created{
    line-height: 24px;
    flex: 12%;
}
.style{
    line-height: 24px;
    flex: 50%;
}
</style>