<template>
  <div class="homepage">
    <div class="landing-page">
      <app-header></app-header>
      <div class="landing-page-content">
        <p>
          Send Money
          <span :style="{ color: '#FFB4C4' }">Seamlessly.</span>
        </p>
        <p>
          Pay Bills
          <span :style="{ color: '#FBD334' }">Tirelessly.</span>
        </p>
        <p>
          Flex Life
          <span :style="{ color: '#0098FF' }">Limitlessly.</span>
        </p>
        <div>
           <form>
          <input placeholder="Email Address" class="know-better-input" />
          <button class="know-better-submit" type="submit">Know Better</button>
        </form>
        </div>
       
      </div>
    </div>
    <div class="about-con">
      <div class="more-info-con">
        <img src="../../img/about-illustration.svg" />
        <div class="more-info-details">
          <h1>
            The payment platform
            <br />that fit you and satisfy
            <br />your needs.
          </h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br />eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim
            <br />ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut
            <br />aliquip ex ea commodo consequat. Duis aute
            irure dolor in
            <br />reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla
            <br />pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in
            <br />culpa qui officia deserunt
            mollit anim id est laborum."
          </p>
        </div>
      </div>
      <div class="features-con">
        <h1 class="features-con-heading">Features</h1>
        <div class="features">
          <div class="feature">
            <img src="../../img/feature-1.svg" />
            <div>
              <h1>
                Spend in different
                <br />currenecies
              </h1>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <br />eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim
                <br />ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut
                <br />aliquip ex ea commodo consequat.
                Duis aute irure dolor in
                <br />reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla
                <br />pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in
                <br />culpa qui
                officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>
          <div class="feature">
            <div>
              <h1>
                Spend in different
                <br />currenecies
              </h1>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <br />eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim
                <br />ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut
                <br />aliquip ex ea commodo consequat.
                Duis aute irure dolor in
                <br />reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla
                <br />pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in
                <br />culpa qui
                officia deserunt mollit anim id est laborum."
              </p>
            </div>
            <img src="../../img/feature-2.png" />
          </div>
        </div>
      </div>
      <div class="security-con">
        <h1 class="security-heading">Security</h1>
        <div>
          <p>
            <span>Superior Security.</span> Secure your money
            <br />safely with
            360Pay Three-factor authentication
            <br />and sleep tight every
            night.
          </p>
          <p>
            <span>Fraud Loss.</span> We understand your business and
            <br />personal needs, so We help protect your
            <br />funds from Cyber
            criminals.
          </p>
        </div>
      </div>
      <div class="note">
        <h1>
          Your
          <br />New Bank.
        </h1>
      </div>
      <div class="footer">
        <div class="footer-child">
          <img src="../../img/logo.svg" class="app-logo" />
          <div class="icon-con">
            <img src="../../img/twitter.svg" />
            <img src="../../img/medium.svg" />
            <img src="../../img/facebook.svg" />
            <img src="../../img/instagram.svg" />
          </div>
        </div>
        <div class="footer-child">
          <p>
            Home
            <br />Pricing
            <br />Features
            <br />About us
            <br />
          </p>
        </div>
        <div class="footer-child">
          <p>
            Career
            <br />Community
            <br />Privacy Policy
          </p>
        </div>
        <div class="footer-child">
          <p>
            Sign In
            <br />Regsiter
            <br />Know more
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
    <script>
  import Header from "./header.vue";
  export default {
    components: {
      appHeader: Header
    },
    data() {
      return {};
    }
  };
    </script>

    <style scoped>
  
 

    </style>
  </div>
</template
>
