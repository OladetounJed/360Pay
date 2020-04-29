<template>
  <div class="login-page">
    <app-header></app-header>
    <div class="register-con">
      <h1>Create Your Account</h1>
      <div class="form-con">
        <form class="register-form">
          <div class="form-con-1">
            <div>
              <label for="lastname">Your Last Name(Surname)</label><br />
              <input placeholder="Oladetoun" type="name" name="lastname" />
            </div>
            <div>
              <label for="firstname">Your First Name</label><br />
              <input type="name" name="firstname" placeholder="Temitayo" />
            </div>
          </div>
          <div class="form-con-2">
            <div>
              <label for="email">Your Email Address</label><br />
              <input
                placeholder="jed@frontend.geng"
                type="email"
                name="email"
              />
            </div>
            <div>
              <label for="password">Your Password</label><br />
              <input type="password" name="password" />
            </div>
          </div>

          <button>Sign In</button>
        </form>
      </div>
      <div class="switch-con">
        <p class="switch-heading">
          One of us?<br />
          Just Sign In and start Enjoying!
        </p>
        <div class="signup-con">
          <img src="../../img/arrow-dark.png" />
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
