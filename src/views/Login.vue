<template>
  <div class="login-page">
    <div class="login-from-wrap">
      <div class="login-form-image">
        <img src="@/assets/background.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>

<style scoped>
  .login-page{
    background-color: rgb(210, 224, 217);
    height: 100vh;
    min-height: 780px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-from-wrap{
    width: 100%;
    max-width: 1000px;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    align-items: center;
    height: 600px;
    overflow: hidden;
  }

  .login-form-image{
    height: 100%;
    overflow: hidden;

          background-size: 100%;

  }

</style>
