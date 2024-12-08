<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
  >
    <v-row>
      <v-col
        cols="12"
        lg="6"
      >
        <div class="chart-container">
          <chartist
            type="Pie"
            :data="chartData"
            :options="chartOptions"
          />  
        </div>
        
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'DashboardDashboard',
    computed: {
      ...mapState(['landList']),
    },
    mounted() {
      const data = this.landList.reduce(
        (acc, land) => {
        // Count occurrences
          if (!acc.counts[land.purpose]) {
            acc.counts[land.purpose] = 0;
            acc.uniquePurposes.push(land.purpose); // Add unique purpose
          }
          acc.counts[land.purpose] += 1;

          return acc;
        },
        { counts: {}, uniquePurposes: [] }
      )

      this.chartData.labels = data.uniquePurposes

      for (let purpose of data.uniquePurposes) {
        this.chartData.series.push(data.counts[purpose])
      }

    },
    data () {
      return {
        chartData: {
          labels: [], // Optional, for tooltips or legends
          series: [],
        },
        chartOptions: {
          donut: true, // Enable donut mode
          donutWidth: 100, // Width of the donut
          showLabel: true, // Show labels on the chart
          labelInterpolationFnc: (value, index) => {
            // Display purpose name and count
            return `${value}\n(${this.chartData.series[index]})`;
          },
        },
      }
    },

    methods: {
      complete (index) {
        this.list[index] = !this.list[index]
      },
    },
  }
</script>
<style>
  .chart-container {
    width: 100%;
    height: 100%;
  }
</style>