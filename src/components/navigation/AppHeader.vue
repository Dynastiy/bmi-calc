<template>
  <div>
    <div class="shadow-sm py-3 bg-white" id="app-header">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <span> bodyCalc </span>
          <ul class="mb-0 d-flex align-items-center web-menu" style="gap: 20px">
            <li>
              <router-link to="/">
                <i-icon icon="solar:home-2-outline" />
                Home</router-link
              >
            </li>
            <li>
              <router-link to="/health-calculator">
                <i-icon icon="solar:calculator-broken" />
                Health Calculators</router-link
              >
            </li>
            <li>
              <router-link to="/health-tips">
                <i-icon icon="ic:outline-tips-and-updates" />
                Health tips</router-link
              >
            </li>
            <li>
              <router-link to="/sign-up">
                <button class="button primary-btn">Sign up</button>
              </router-link>
            </li>
          </ul>

          <div class="mobile-menu">
            <span role="button" @click="drawer = true">
              <i-icon icon="mingcute:menu-line" width="25px" />
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <el-drawer size="80%" :visible.sync="drawer" :with-header="false">
      <div class="p-4">
        <div class="mobile-menu-items">
            <span class="d-flex justify-content-end" role="button" @click="drawer=false">
                <i-icon icon="iconamoon:close-fill" width="25px" color="red" />
            </span>
          <ul class="mb-0 d-flex flex-column mt-4" style="gap: 30px">
            <li>
              <router-link to="/">
                <i-icon icon="solar:home-2-outline" />
                Home</router-link
              >
            </li>
            <li>
              <router-link to="/health-calculator">
                <i-icon icon="solar:calculator-broken" />
                Health Calculators</router-link
              >
            </li>
            <li>
              <router-link to="/health-tips">
                <i-icon icon="ic:outline-tips-and-updates" />
                Health tips</router-link
              >
            </li>
            <li>
              <router-link to="/sign-up">
                <button class="button primary-btn">Sign up</button>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style>
#app-header ul li {
  list-style: none;
}

#app-header ul li a {
  color: #000;
}

#app-header ul li a {
  display: block;
}

#app-header ul li .router-link-exact-active {
  position: relative;
  color: var(--PRIMARY1);
}

#app-header ul li .router-link-exact-active:after {
  content: "";
  position: absolute;
  right: 0;
  bottom: -5px;
  height: 2px;
  width: 40%;
  background: linear-gradient(90deg, var(--PRIMARY1) 10%, var(--PRIMARY2) 100%);
  /* background: red; */
}

.mobile-menu {
  display: none;
}

.mobile-menu-items ul li {
    list-style: none;
}

.mobile-menu-items ul li a {
    color: #000;
    display: block;
    padding: 8px;
}

.mobile-menu-items ul li .router-link-exact-active {
    background: linear-gradient(90deg, var(--PRIMARY1) 10%, var(--PRIMARY2) 100%);
    color: #fff;
    border-radius: 6px;
}

@media (max-width: 990px) {
  .web-menu {
    display: none !important;
  }

  .mobile-menu {
    display: block;
  }
}
</style>
