<template>
  <div class="py-4 px-3" id="home">
    <div class="container">
      <section>
        <div
          class="mb-4 d-flex header-area align-items-center justify-content-between"
        >
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
          <section>
            <div class="d-flex" style="gap: 10px">
              <span
                role="button"
                @click="selectUnit('us')"
                class="units"
                :class="{ active: unit === 'us' }"
              >
                US Units
              </span>
              <span
                role="button"
                @click="selectUnit('metric')"
                class="units"
                :class="{ active: unit === 'metric' }"
              >
                Metric Units
              </span>
            </div>
          </section>
          <hr>
          <div>
            <label for="">Age</label>
            <div class="d-flex" style="gap: 30px">
              <div class="w-100">
                <el-slider
                  v-model="dataObj.age"
                  :max="120"
                  :min="2"
                ></el-slider>
              </div>
              <input
                class="w-25"
                type="text"
                name=""
                v-model="dataObj.age"
                id=""
              />
            </div>
          </div>
          <div>
            <label for="">Gender</label>
            <div class="d-lg-flex" style="gap: 30px">
              <span
                role="button"
                @click="selectGender('male')"
                class="gender"
                :class="{ active: dataObj.gender === 'male' }"
              >
                <i-icon icon="map:male" />
                Male
              </span>
              <span
                role="button"
                @click="selectGender('female')"
                class="gender"
                :class="{ active: dataObj.gender === 'female' }"
              >
                <i-icon icon="map:female" />
                Female
              </span>
            </div>
          </div>
          <div class="d-flex form-data" style="gap: 30px">
            <div class="w-100">
              <label for="">Height(cm)</label>
              <input type="text" class="mb-3" name="" v-model="dataObj.height" id="" />
              <input type="text" name="" v-model="dataObj.height" id="" />
            </div>
            <div class="w-100">
              <label for="">Weight(kg)</label>
              <input type="text" name="" v-model="dataObj.weight" id="" />
              <p>{{ 1500 | units('m', 'km', true) }}</p>
            </div>
          </div>
          <div class="d-flex justify-content-center" style="gap: 20px">
            <button class="success-btn button" @click="submit">
              Calculate
            </button>
            <button class="cancel-btn button">Clear</button>
          </div>
        </div>
        <div class="w-50 p-2 rounded-lg bg-white bmi-card  text-center">
          <h3>Result</h3>
          <guage-chart
            :refid="gaugeId"
            :options="gaugeOptions"
            :result="result"
          />
          <h3>BMI = {{ result }}</h3>
        </div>
      </section>
      <section class="mt-3">
        <h3 class="text-center">Health Calculators</h3>
        <section class="d-flex main-content mt-4" style="gap: 30px">
          <div class="w-100 p-5 rounded-lg bg-white bmi-card">
            <h3>All</h3>
            <div>
              <img src="@/assets/img/fitness.svg" alt="" />
            </div>
          </div>
          <div class="w-100 p-5 rounded-lg bg-white bmi-card">
            <h3>Fitness</h3>
            <div>
              <img src="@/assets/img/fitness-main.svg" alt="" />
            </div>
          </div>
          <div class="w-100 p-5 rounded-lg bg-white bmi-card">
            <h3>Pregnancy</h3>
            <div>
              <img src="@/assets/img/pregnancy.svg" alt="" />
            </div>
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
import GuageChart from "@/components/GuageChart.vue";
export default {
  components: { GuageChart },
  data() {
    return {
      unit: "metric",
      dataObj: {
        age: 2,
        gender: "male",
        height: "",
        weight: "",
      },
      queryParams: {},
      result: 0,
      gaugeId: "gaugeArea",
      gaugeOptions: {
        hasNeedle: true,
        needleColor: "gray",
        needleUpdateSpeed: 1000,
        arcColors: [
          "#ffe400",
          "#008137",
          "#ffe400",
          "#d38888",
          "#bc2020",
          "#8a0101",
        ],
        arcLabels: ["Underwieght", "Normal", "Overweight", "Obesity"],
        arcDelimiters: [37, 50, 60, 70],
        rangeLabel: ["0", "100"],
      },
    };
  },
  methods: {

    selectGender(value) {
      this.dataObj.gender = value;
    },

    selectUnit(value) {
      this.unit = value;
    },

    submit() {
      this.$router
        .replace({
          query: {
            data: JSON.stringify(this.dataObj),
          },
        })
        .catch(() => {});
      this.$request
        .post("/calculate-bmi", this.queryParams)
        .then((res) => {
          console.log(res);
          this.result = res.result;
          this.$router
            .replace({
              query: {
                ...this.$route.query,
                result: res.result,
              },
            })
            .catch(() => {});
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  watch: {
    queryParams: {
      handler(newVal) {
        if (newVal) {
          this.dataObj.age = newVal.age;
          this.dataObj.gender = newVal.gender;
          this.dataObj.height = newVal.height;
          this.dataObj.weight = newVal.weight;
          this.result = this.$route.query.result;
        }
      },
      immediate: true,
    },
  },

  mounted() {
    this.queryParams = JSON.parse(this.$route.query.data);
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
  margin-top: 12px;
}

#home .units {
  background: var(--gray-200);
  color: #fff;
  padding: 6px 15px;
  display: block;
  border-radius: 5px;
  font-weight: 500;
  font-size: 18px;
  margin-top: 12px;
}

#home .gender.active, #home .units.active {
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

#home h2,
#home h3 {
  font-family: var(--header-font);
  color: var(--PRIMARY1);
  font-weight: bold;
}

#home .bmi-card h3 {
  font-family: var(--header-font);
  color: var(--PRIMARY1);
  font-weight: bold;
  margin-bottom: 30px;
}

#home .bmi-card {
  /* text-align: center; */
}

#home .bmi-card img {
  width: 70%;
  height: 150px;
  object-fit: cover;
  object-position: top;
}

@media (max-width: 990px) {
  .header-area {
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }

  #form .search-field {
    width: 100%;
  }

  .d-flex.main-content,
  .d-flex.main-content .d-flex.form-data {
    flex-direction: column;
  }

  .d-flex.main-content .w-50 {
    width: 100% !important;
  }
}
</style>
