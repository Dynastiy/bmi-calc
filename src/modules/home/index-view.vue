<template>
  <div class="py-4" id="home">
    <div class="container">
      <section>
        <div class="mb-4 d-flex header-area align-items-center justify-content-between">
          <h2>For a start, know your BMI</h2>

          <div>
            <div class="search-field">
              <input type="text" />
              <i-icon icon="ion:search-outline" />
            </div>
          </div>
        </div>
      </section>
      <section class="d-flex main-content" style="gap: 30px">
        <div class="w-100 p-5 rounded-lg bg-white bmi-card form-field">
          <div>
            <label for="">Age</label>
            <div class="d-flex" style="gap: 30px">
              <div class="w-100">
                <el-slider v-model="age" :max="120" :min="2"></el-slider>
              </div>
              <input class="w-25" type="text" name="" v-model="age" id="" />
            </div>
          </div>
          <div>
            <label for="">Gender</label>
            <div class="d-flex" style="gap: 30px">
              <span
                role="button"
                @click="selectGender('male')"
                class="gender"
                :class="{ active: gender === 'male' }"
              >
                <i-icon icon="map:male" />
                Male
              </span>
              <span
                role="button"
                @click="selectGender('female')"
                class="gender"
                :class="{ active: gender === 'female' }"
              >
                <i-icon icon="map:female" />
                Female
              </span>
            </div>
          </div>
          <div class="d-flex form-data" style="gap: 30px">
            <div class="w-100">
              <label for="">Height</label>
              <input type="text" name="" v-model="height" id="" />
            </div>
            <div class="w-100">
              <label for="">Weight</label>
              <input type="text" name="" v-model="weight" id="" />
            </div>
          </div>
          <div class="d-flex justify-content-center" style="gap: 20px">
            <button class="success-btn button">Calculate</button>
            <button class="cancel-btn button">Clear</button>
          </div>
        </div>
        <div class="w-50 p-5 rounded-lg bg-white bmi-card">
          <h3>Result</h3>
        </div>
      </section>
      <section class="mt-3">
        <h3 class="text-center">Health Calculators</h3>
        <section class="d-flex main-content mt-4" style="gap: 30px">
        <div class="w-100 p-5 rounded-lg bg-white bmi-card">
          <h3>All</h3>
        </div>
        <div class="w-100 p-5 rounded-lg bg-white bmi-card">
          <h3>Fitness</h3>
        </div>
        <div class="w-100 p-5 rounded-lg bg-white bmi-card">
          <h3>Pregnancy</h3>
        </div>
      </section>
      </section>

      <!-- <section class="w-100 p-5 rounded-lg bg-white bmi-card">
        <div>
          <h3>Fitness</h3>
        </div>
      </section> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 2,
      gender: "male",
    };
  },
  methods: {
    selectGender(value) {
      this.gender = value;
    },
  },
};
</script>

<style>
#home .gender {
  background: var(--gray-200);
  color: #fff;
  padding: 10px 25px;
  display: block;
  border-radius: 5px;
  font-weight: 500;
  font-size: 18px;
}

#home .gender.active {
  /* color: #fff; */
  background: linear-gradient(90deg, var(--PRIMARY1) 10%, var(--PRIMARY2) 100%);
}

#home label {
  margin-bottom: 0;
  /* font-weight: bold; */
  color: var(--gray-400);
}

#home .form-field {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  flex-direction: column;
  gap: 25px;
}

#home .form-field input[type="text"] {
  display: block;
  width: 100%;
  padding: 8px;
  border: 1px solid var(--gray-300);
  border-radius: 5px;
}

#home h2 {
  font-size: 50px;
}

#home h2, #home h3 {
  font-family: var(--header-font);
  color: var(--PRIMARY1);
  font-weight: bold;
}

#home .bmi-card h3 {
  font-family: var(--header-font);
  color: var(--PRIMARY1);
  font-weight: bold;
}

@media (max-width:990px) {
  .header-area {
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }

  #form .search-field {
    width: 100%;
  }

  .d-flex.main-content, .d-flex.main-content .d-flex.form-data {
    flex-direction: column;
  }

  .d-flex.main-content .w-50 {
    width: 100% !important;
  }
}

</style>
