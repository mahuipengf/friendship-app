<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter} from 'vue-router';
    const history = useRouter();
    const goToOverview = () => {
        console.log('123123')
        history.push('/overview')
    }
</script>
<template>
  <div class="home-container">
    <div class="home-content">
      <div class="home-share-img">
        <img src="@/assets/img/home-share.svg" />
        <div class="home-share-img-title">享受生活</div>
      </div>
      <div class="home-box">
          <van-button type="danger" class="home-btn">登陆</van-button>
          <van-button type="default" class="home-btn" @click="goToOverview">先去逛逛</van-button>
      </div>
    </div>
  </div>

</template>

<style scoped>

.home-container {
  background-image: url(@/assets/img/home-bg.svg);
  width: 100vw;
  height: 100vh;
}
.home-content {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
}
.home-share-img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
}
.home-share-img-title {
  font-size: 1rem;
  color: #fff;
  margin-top: 0.4rem;
}
.home-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40vh;
}
.home-btn {
  width: 16rem;
  margin-bottom: 2rem;
  border-radius: 2rem;
}

</style>