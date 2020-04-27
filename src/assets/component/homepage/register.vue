<template>
  <div class="login-page">
    <app-header></app-header>
    <div class="register-con">
      <h1>Create Your Account</h1>
      <div class="form-con">
        <form>
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

<style>
.register-con h1 {
  text-align: center;
  color: #1249be;
  font-size: 2em;
  padding: 1em;
  font-family: "Nunito Sans";
}
.form-con-1, .form-con-2 {
  display: flex;
  justify-content: center;
}
.form-con-1 div, .form-con-2 div {
    padding: 0 3em;
}

label {
  padding: 1em;
  font-family: "Open Sans";
  color: #716767;
}
form input,
button {
  width: 25em;
  height: 3em;
  margin: 0.5em 0 1.5em 0;
  background-color: #262424;
  border: none;
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
  border: black 0.1em solid;
}
.switch-con {
  text-align: center;
  margin-top: 1em;
}
.switch-heading {
  font-family: "Open Sans";
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
  border: #262424 0.05em solid;
  background-color: white;
  margin-top: 2em;
}
.signup-switch {
  width: 2em;
  height: 2em;
  border-radius: 2em;
  background-color: #262424;
  cursor: pointer;
}
 /* Register Component Mobile Styling*/
@media (max-width: 990px) {
  .form-con-1 , .form-con-2 {
    display: block;
    margin: auto;
    
  }
  form input {
    width: 70%;
    height: 4em;
  }
}
</style>
