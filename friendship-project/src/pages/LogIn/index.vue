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
  <div>
    <el-alert :title="`当前成功调用了接口` + obj.currentStatus" type="success" :closable="false" v-if="obj.visible" />
  </div>
  <div class="login-box">
    <!-- <img alt="Vue logo" class="logo" src="@/assets/img/bg.jpeg" width="125" height="125" /> -->
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

  </div>
</template>

<style scoped>
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