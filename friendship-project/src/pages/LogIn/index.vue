<script setup lang="ts">
import { reactive, ref } from 'vue';
import { SingUp } from '@/services/auth';
const form = reactive({
  name: '',
  password: '',
});
const obj = ref({
  visible: false,
  currentStatus: '',
});

const onLogin = () => {

};

const onRegister = async() => {
    console.log('register', form.name);
    const params = {
        username: form.name,
        password: form.password,
    }
    const data: any = await SingUp(params);
    if (data.status === 200) {
      obj.value.visible = true;
      console.log('data.message', data.message)
      obj.value.currentStatus = data.message;
    }
    console.log('data', data);
}
</script>
<template>
  <!-- <div>
    <el-alert :title="`当前成功调用了接口` + obj.currentStatus" type="success" :closable="false" v-if="obj.visible" />
  </div>
  <div class="login-box">
    <el-form :model="form" label-width="auto" class="form" style="max-width: 600px">
    <el-form-item>
      <el-input v-model="form.name" placeholder="账号 / 手机号" style="width: 100%;" />
    </el-form-item>
    <el-form-item>
      <el-input v-model="form.password" placeholder="密码"/>
    </el-form-item>
    <el-button type="primary" @:click="onLogin">登录</el-button>
    <el-button type="primary" @:click="onRegister">注册</el-button>
    </el-form>
  </div> -->
  <div class="container">
    <div class="content">
      <div class="share-img">
        <img src="@/assets/img/home-share.svg" />
        <div class="share-img-title">享受生活</div>
      </div>
      <div class="box">
          <van-button type="danger" class="home-btn">登陆</van-button>
          <van-button type="default" class="home-btn">先去逛逛</van-button>
      </div>
    </div>
  </div>

</template>

<style scoped>

.container {
  background-image: url(@/assets/img/home-bg.svg);
  width: 100vw;
  height: 100vh;
}
.content {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
}
.share-img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
}
.share-img-title {
  font-size: 1rem;
  color: #fff;
  margin-top: 0.4rem;
}
.box {
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
.login-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    /* background-img: url(../assets/img/bg.jpeg); */
    /* background-image: url("@/assets/img/bg.jpeg"); */
    background-size: 100% 100%;
}
.form {
    width: 300px;
}
</style>