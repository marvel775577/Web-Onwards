<template>
  <div id="app">
    <div class="content">
      <div class="mobile-menu" v-if="menuVisible">
        <DialogButton
          body="<p><span class='bold'>Chat</span> to an Advisor</p>"
          icon-color="#231f20"
          position="top"
          text-color="#231f20"
          background="#fff"/>
        <DialogButton
          body="<span class='bold'>Log in / Register</span>"
          icon="<i class='fas fa-user-circle'></i>"
          icon-color="#f6c600"
          position="top"
          text-color="#fff"
          background="#231f20"/>
        <div class="links">
          <router-link :to="{name: 'stopping-driving'}" active-class="router-link-active active-stopping-driving">Stopping Driving</router-link>
          <router-link :to="{name: 'cost-of-transport'}" active-class="router-link-active active-cost-of-transport">Cost of Transport</router-link>
          <router-link :to="{name: 'plan-your-travel'}" active-class="router-link-active active-plan-your-travel">Plan Your Travel</router-link>
          <router-link :to="{name: 'how-to-guides'}" active-class="router-link-active active-how-to-guides">How to Guides</router-link>
          <router-link :to="{name: 'family-and-carer-support'}" active-class="router-link-active active-family-and-carer-support">Family & Carer Support</router-link>
        </div>
      </div>
      <div class="header">
        <div class="wrap wrap-header">
          <section class="left">
            <div class="logo" @click="goHome()">
              <h1>Turn To Us</h1>
              <p>
                <span class="bold">Travel support</span> for people with <span class="bold">dementia</span>
              </p>
            </div>
          </section>
          <section class="right">
            <aside>
              <section>
                <DialogButton
                  body="<p><span class='bold'>Chat</span> to an Advisor</p>"
                  icon-color="#231f20"
                  position="top"
                  text-color="#231f20"
                  background="#fff"/>
              </section>
              <section>
                <DialogButton
                  body="<span class='bold'>Log in / Register</span>"
                  icon="<i class='fas fa-user-circle'></i>"
                  icon-color="#f6c600"
                  position="top"
                  text-color="#fff"
                  background="#231f20"/>
              </section>
            </aside>
            <div class="search-field">
              <img src="/icons/Asset_7_2x.png" alt="Search">
              <input type="text" placeholder="Search">
            </div>
          </section>
          <section class="right-mobile" @click="switchMenu">
            <i :class="menuIconClass"></i>
          </section>
        </div>
      </div>
      <div class="wrap">
        <div id="nav">
          <div class="links">
            <router-link :to="{name: 'stopping-driving'}" active-class="router-link-active active-stopping-driving">Stopping Driving</router-link>
            <router-link :to="{name: 'cost-of-transport'}" active-class="router-link-active active-cost-of-transport">Cost of Transport</router-link>
            <router-link :to="{name: 'plan-your-travel'}" active-class="router-link-active active-plan-your-travel">Plan Your Travel</router-link>
            <router-link :to="{name: 'how-to-guides'}" active-class="router-link-active active-how-to-guides">How to Guides</router-link>
            <router-link :to="{name: 'family-and-carer-support'}" active-class="router-link-active active-family-and-carer-support">Family & Carer Support</router-link>
          </div>
          <div class="search-field">
            <img src="/icons/Asset_7_2x.png" alt="Search">
            <input type="text" placeholder="Search">
          </div>
        </div>
      </div>
      <router-view/>
      <div class="push"></div>
    </div>
    <footer class="footer">
      <div class="wrap">
        <div class="links">
          <router-link to="#">About Us</router-link>
          <router-link to="#">Contact Us</router-link>
          <router-link to="#">Terms & conditions</router-link>
          <router-link to="#">Privacy</router-link>
          <router-link to="#">Accessibility</router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import DialogButton from '@/components/DialogButton.vue'

export default {
  name: 'App',
  components: {
    DialogButton
  },
  data () {
    return {
      menuVisible: false
    }
  },
  computed: {
    menuIconClass () {
      return this.menuVisible ? 'fas fa-times' : 'fas fa-bars'
    }
  },
  watch: {
    '$route' () {
      this.menuVisible = false
    }
  },
  methods: {
    goHome () {
      this.$router.push({
        name: 'home'
      })
    },
    switchMenu () {
      this.menuVisible = !this.menuVisible
    }
  }
}
</script>

<style lang="scss">
  // Normalize
  @import "~normalize.css";
  // Font Awesome
  @import url("https://use.fontawesome.com/releases/v5.5.0/css/all.css");
  // Roboto
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

  * {
    font-family: 'Roboto', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  .wrap {
    max-width: 1330px;
    margin: auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  .bold {
    font-weight: 700;
  }

  button {
    cursor:pointer
  }

  html, body {
    height: 100%;
    margin: 0;
    min-height: 100%;
  }

  #app {
    min-height: 100%;
  }

  button {
    cursor: pointer;
  }

  .footer,
  .push {
    height: 50px;
  }

  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: #e6e6e6;
    padding: 0 10px;
    box-sizing: border-box;
    .wrap {
      justify-content: flex-end;
      margin-bottom: 0;
      .links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 50%;
        a {
          font-size: 13px;
        }
      }
    }
  }

  .header {
    height: 165px;
    background-color: #f9c536;
    overflow: hidden;
    .left {
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      height: 100%;
    }
    .right {
      display: flex;
      justify-content: space-between;
      text-align: center;
      flex-direction: column;
      height: 100%;
      aside {
        display: flex;
        justify-content: space-around;
        margin: 0;
      }
      .search-field {
        display: none;
        input {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
      }
      section {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        text-align: center;
        height: 100%;
        &:first-child {
          margin-right: 20px;
        }
      }
    }
  }

  .logo {
    width: 195px;
    height: 110px;
    border: 3px solid #3e3e3d;
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
    cursor: pointer;
    h1 {
      background-color: #fff;
      margin: 0;
      border-bottom: 3px solid #3e3e3d;;
      height: 53px;
      padding: 8px;
      box-sizing: border-box;
      font-size: 36px;
    }
    p {
      padding: 8px 0;
      margin: 0;
      font-size: 18px;
    }
  }

  #nav {
    margin-top: -12px;
    height: 65px;
    padding-bottom: 17px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 1px solid #b3b3b3;
    .links {
      display: flex;
      justify-content: space-between;
      width: 910px;
      a {
        color: #242021;
        font-size: 20px;
      }
    }
  }

  .search-field {
    position: relative;
    input {
      border: none;
      border-radius: 10px;
      color: #3c3c3a;
      background-color: #e5e5e5;
      padding: 5px 25px 5px 15px;
      outline: none;
      width: 260px;
    }
    img {
      position: absolute;
      right: 0;
      padding: 6px 12px;
      pointer-events: none;
      height: 15px;
    }
  }
  .right-mobile {
    display: none;
  }

  .mobile-menu {
    display: none;
  }

  .router-link-active {
    padding-bottom: 20px;
    box-sizing: border-box;
    margin-bottom: -19px;
  }

  @media all and (max-width: 1330px) {
    .wrap-resp {
      justify-content: space-around;
    }
    .wrap {
      padding: 0 10px;
    }
    #nav {
      margin-top: 0;
      .links {
        max-width: 910px;
        width: auto;
        a {
          margin-left: 10px;
        }
      }
    }
  }

  @media all and (max-width: 1224px) {
    .header {
      .right {
        .search-field {
          display: block;
        }
      }
    }
    #nav {
      .links {
        width: 100%;
        max-width: 1185px;
      }
      .search-field {
        display: none;
      }
    }
  }

  @media all and (max-width: 891px) {
    .wrap {
      width: 320px;
      .right {
        display: none;
      }
    }
    footer {
      padding: 0 5px;
      .wrap {
        .links {
          width: 100%;
          a {
            font-size: 10px;
          }
        }
      }
    }
    #nav {
      margin: 0;
      height: auto;
      padding: 10px 0;
      .links {
        display: none;
      }
      .search-field {
        padding: 0;
        margin: auto;
      }
    }
    .right-mobile {
      display: flex;
      align-items: center;
      i {
        margin-top: -50px;
        font-size: 40px;
      }
    }
    .mobile-menu {
      display: block;
      position: fixed;
      width: 100%;
      height: 100%;
      background: #f9c536;
      z-index: 100;
      top: 150px;
      .router-link-active {
        background: #fff;
        padding: 5px 0;
        width: 100%;
      }
      .links {
        display: flex;
        flex-direction: column;
        margin: 25px auto 0;
        box-sizing: border-box;
        font-size: 20px;
        a {
          margin-bottom: 15px;
          padding: 5px 40px;
        }
      }
    }
    .wrap-header {
      width: 90%;
    }
  }
</style>
