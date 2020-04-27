<template>
  <div class="header">
    <ul class="app-logo">
      <router-link active-class="active" tag="li" to="/"
        ><a><img :src="appLogo" alt="360Pay Logo" class="logo"/></a></router-link>
    </ul>
   <ul class="header-left">
     <img src="../../img/header-menu-mobile.svg" class="mobile-menu">
      <router-link active-class="active" tag="li" to="/"
        ><a>Features</a></router-link
      >
      <router-link active-class="active" tag="li" to="/register"
        ><a>Register</a></router-link
      >
      <router-link active-class="active" tag="li" to="/login"
        ><a class="login">Log In</a></router-link
      >
    </ul>
  </div>
</template>

<script>
import appLogo from "../../img/logo.svg";
export default {
  data() {
    return {
      appLogo
    };
  }
};
</script>

<style scoped>


.header {
  display: flex;
  justify-content: space-between;
  font-family: "Nunito Sans";
  padding: 1em;
}

.header-left {
  padding-top: 1em;
  display: flex;
}
.mobile-menu {
  display: none;
}


.header-left a {
  margin: 1em 2em 0 6em;
  font-weight: 900;
}
.logo {
  width: 9em;
}
.login {
  padding: 0.4em 2em;
  background-color: white;
  border-radius: 2em;
}
/* Header Component Mobile Styling*/
@media (max-width: 990px) {
  .app-logo {
    padding-top: 1em;

  }
  .logo {
    width: 13em;
  }
  .header-left li {
    display: none;
  }
  .mobile-menu {
    display: block;
    width: 3em;
  }
}
</style>
