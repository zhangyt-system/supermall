<template>
  <div v-if="Object.keys(detailParams).length !== 0">
    <!-- {{detailParams}} -->
    <div class="totalItem">
      <div v-for="(item,index) in detailParams.rule.tables[0]" :key="index" class="row">
        <span v-for="(i,inde) in item" :key="inde" class="item">{{i}}</span>
      </div>
    </div>
    <div class="totalSet">
      <div v-for="(item,inde) in detailParams.info.set" :key="inde" class="set">
        <div class="setrow">
          <span class="key">{{item.key}}</span>
          <span class="value">{{item.value}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailParams: Object
  }
};
</script>

<style scoped>
.totalItem {
  margin: 12px 12px;
  border-bottom: solid 1px lightgray;
}
.row {
  margin: 12px 0;
  font-size: 14px;
}
.item {
  margin: 19px;
  text-align: center;
  color: #555;
  font-size: 14px;
}
.totalSet {
  width: 100%;
}
.set {
  margin-right: 1px;
  font-size: 14px;
  color: #555;
}
.setrow {
  /* width: 100vh; */
  height: 35px;
  /* margin: 1px; */
}
.key {
  margin-right: 39px;
  margin-left: 28px;
  width: 19px;
}
.value {
  flex: 1;
  /* line-height: 34px; */
  color: #ff5777;
}
</style>