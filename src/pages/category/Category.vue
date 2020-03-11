<template>
  <div>
    <CategoryNav></CategoryNav>
    <div class="totalLayout">
      <div class="layoutTab">
        <CategoryTab :categoryTab="categoryTab" @getMaitkey="getMaitkey"></CategoryTab>
      </div>
      <div class="layoutTiny">
        <CategoryTiny :categoryTiny="categoryTiny"></CategoryTiny>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryNav from "./categoryChild/CategoryNav";
import CategoryTab from "./categoryChild/CategoryTab";
import CategoryTiny from "./categoryChild/CategoryTiny";
import { getCategoryData, getSubcategoryData } from "@/network/category";
export default {
  data() {
    return {
      categoryTab: [],
      maitKey: 3627,
      categoryTiny: [],
      res: {}
    };
  },
  components: {
    CategoryNav,
    CategoryTab,
    CategoryTiny
  },
  methods: {
    getMaitkey(index) {
      // console.log(index);
      this.maitKey = this.res.data.data.category.list[index].maitKey;
      // console.log(this.maitKey);
      getSubcategoryData(this.maitKey).then(res => {
        // console.log(res.data.data.list);
        this.categoryTiny=res.data.data.list
        // console.log(this.categoryTiny)
      });
    }
  },
  mounted() {
    getCategoryData().then(res => {
      console.log(res);
      this.res = res;
      this.categoryTab = res.data.data.category.list;
    });
    getSubcategoryData(this.maitKey).then(res => {
      console.log(res);
      this.categoryTiny=res.data.data.list
      // console.log(this.categoryTiny)
    });
  }
};
</script>

<style scoped>
.totalLayout {
  display: flex;
}
.totalLayout {
  flex: 1;
}
.layoutTiny {
  flex: 1;
}
</style>