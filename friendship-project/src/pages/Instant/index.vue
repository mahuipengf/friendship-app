<script setup lang="ts">
import { ref } from 'vue';
import Follow from './Follow/index.vue';
import Nearby from './Nearby/index.vue';

const tab: { value: string } = ref('follow');
const visible: { value: boolean } = ref(true);

const getCurTabClass = (tabKey) => {
  if (tab.value === tabKey && tabKey === 'follow') return 'instant-tab-follow instant-tab-checked';
  else if (tab.value === tabKey && tabKey === 'nearby') return 'instant-tab-nearby instant-tab-checked';
  else return 'instant-cursor';
}
const handleChangeTab = (tabKey)=> {
    tab.value = tabKey;
    visible.value = !visible.value;
} 

</script>
<template>
  <div class="instant-container">
    <div class="instant-header">
        <div class="instant-tab">
            <div :class="getCurTabClass('follow')" @click="() => handleChangeTab('follow')">关注</div>
            <div :class="getCurTabClass('nearby')" @click="() => handleChangeTab('nearby')">附近</div>
        </div>
        <div class="instant-search"></div>
    </div>
    <div v-if="visible"><Follow/></div>
    <div v-else><Nearby/></div>
  </div>
</template>

<style scoped>
.instant-header {
    width: 100vw;
    height: 4rem;
}
.instant-tab {
    border: 1px solid #f00;
    width: 8rem;
    display: flex;
    flex-direction: row;
    padding: 1rem 1rem;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 18px;
    color: rgba(120, 123, 134, 1);
    text-align: left;
    vertical-align: top;
    
}
.instant-tab-follow {
    margin-right: 0.5rem;
    cursor: pointer;
}
.instant-tab-nearby {
    margin-left: 0.5rem;
    cursor: pointer;
}

.instant-cursor {
    cursor: pointer;
}

.instant-tab-checked {
    font-size: 1.4rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 1)
}
</style>