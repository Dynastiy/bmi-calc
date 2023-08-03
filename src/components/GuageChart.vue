<template>
  <div :id="this.gaugeId" class="vue-gauge-item"></div>
</template>
<script>
let GaugeChart = require("@/assets/bundle.js");

export default {
  name: "vue-gauge",
  props: ["refid", "options", "result"],

  mounted() {
    this.initPlugin(this.options);
  },

  methods: {
    initPlugin(options = {}) {
        let result = this.$route.query.result
      if (this.gaugeId) {
        let config = {
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
          chartWidth: 250,
          needleValue: result,
        };
        config = { ...config, ...options };

        // Element inside which you want to see the chart
        let element = document.querySelector("#" + this.gaugeId);

        // Drawing and updating the chart
        GaugeChart.gaugeChart(element, config.chartWidth, config).updateNeedle(
          Number(config.needleValue)
        );
      }
    },
  },
  computed: {
    gaugeId() {
      if (typeof this.refid != "undefined") {
        return this.refid;
      }
      return "vue-gauge";
    },
  },
};
</script>
