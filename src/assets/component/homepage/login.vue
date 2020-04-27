<template>
  <div class="login-page">
    <app-header></app-header>
    <div class="login-con">
      <h1>Login Into Your Account</h1>
      <div class="form-con">
        <form>
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
.login-con {
  color: white;
}
.login-con h1 {
  text-align: center;
  color: #1249be;
  font-size: 2em;
  padding: 1em;
  font-family: "Nunito Sans";
}

form {
  width: 30em;
  margin: auto;
}
label {
  padding: 1em;
  font-family: "Open Sans";
}
form input,
button {
  width: 30em;
  height: 3em;
  margin: 0.5em 0 1.5em 0;
  background-color: transparent;
  border: 0.1em white solid;
  border-radius: 3em;
  padding-left: 1em;
  font-family: "Nunito Sans";
  color: white;
}
form button {
  width: 10em;
  display: block;
  margin: 1.5em auto;
  background-color: white;
  padding: 0;
  color: black;
}
.switch-con {
    text-align: center;
    margin-top: 1em;
}
.switch-heading {
    font-family: 'Open Sans';
    font-size: 1.3em;
    line-height: 2em;
    
}
.signup-con {
    display: flex;
    justify-content: center;
}
.signup-switch-con {
    width: 4em;
    height: 2em;
    border-radius: 2em;
    border: white 0.05em solid;
    background-color: white;
    margin-top: 2em;
}
.signup-switch {
    width: 2em;
    height: 2em;
    border-radius: 2em;
    margin-left: 2em;
    background-color: #262424;
    cursor: pointer;
}
</style>
