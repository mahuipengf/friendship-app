<script setup lang="ts">
import { ref } from 'vue';
import { FOOTERBAR_TYPE, FOOTERBAR_SELECTED } from '@/utils/common';

const selected: string = ref('HOME');

const onClickIcon = (type) => {
  selected.value = type;
};

const onSelected = (type) => {
  if (type === selected.value) return FOOTERBAR_SELECTED['CHECKED'];
  else return FOOTERBAR_SELECTED['UNCHECKED'];
}

</script>
<template>
  <div class="footer">




    
    <van-action-bar>
    <van-action-bar-icon icon="wap-home-o" @click="() => onClickIcon('HOME')" :color="onSelected(FOOTERBAR_TYPE['HOME'])" />
    <van-action-bar-icon icon-prefix="iconfont" icon="faxian2"  @click="() => onClickIcon('DISCOVER')" :color="onSelected(FOOTERBAR_TYPE['DISCOVER'])" />
    <van-action-bar-icon icon="add-o" text="" @click="() => onClickIcon('ADD')" :color="onSelected(FOOTERBAR_TYPE['ADD'])" />
    <van-action-bar-icon icon-prefix="iconfont" icon="faxian" @click="() => onClickIcon('STAR')" :color="onSelected(FOOTERBAR_TYPE['STAR'])" />
    <van-action-bar-icon icon-prefix="iconfont" icon="tongzhi2_1" @click="() => onClickIcon('MESSAGE')" :color="onSelected(FOOTERBAR_TYPE['MESSAGE'])" />
    </van-action-bar>
  </div>
</template>

<style scoped>
.footer-bar-tong-zhi {
  font-size: 1.5rem !important;
  color: #f00;
}
.footer .van-action-bar-icon  {
   flex: 1 !important;
}
</style>