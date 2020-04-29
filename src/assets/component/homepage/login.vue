<template>
  <div class="login-page">
    <app-header></app-header>
    <div class="login-con">
      <h1>Login Into Your Account</h1>
      <div class="form-con">
        <form class="login-form">
          <label for="email">Your Email Address</label>
          <input placeholder="jed@frontend.geng" type="email" name="email" />
          <label for="password">Your Password</label>
          <input type="password" name="password" />
          <button>Sign In</button>
        </form>
      </div>
      <div class="switch-con">
        <p class="switch-heading">
          New Here?<br />
          Register and Join the Geng😋 !
        </p>
        <div class="signup-con">
            <img src="../../img/arrow.png">
            <div class="signup-switch-con">
            <div class="signup-switch"></div>
        </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./header";
export default {
  components: {
    appHeader: Header
  }
};
</script>

<style scoped>

</style>
