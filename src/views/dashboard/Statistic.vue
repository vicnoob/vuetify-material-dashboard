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
        <h2>Biểu đồ tình trạng pháp lý</h2>
        <div class="chart-container">
          <chartist
            type="Bar"
            ref="chartistChart"
            :data="barChartData"
            :options="barChartOptions"
          />  
        </div>
        
      </v-col>

      <v-col
        cols="12"
        lg="6"
      >
        <h2>Biểu đồ mục đích sử dụng đất</h2>
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

      const complianceCounts = this.landList.reduce((acc, land) => {
        const status = land.complianceStatus;
        if (status) {
          acc[status] = (acc[status] || 0) + 1; // Increment count for each status
        }
        return acc;
      }, {});

      const labels = Object.keys(complianceCounts); // Compliance statuses (categories)
      const series = Object.values(complianceCounts); // Counts for each compliance status
      this.barChartData.labels = labels
      this.barChartData.series = [series]
      this.barChartOptions.high = Math.max(...series) + 1

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
            return `${value}\n(${((this.chartData.series[index] / this.landList.length) * 100).toFixed(2)}%)`;
          },
        },
        barChartData: {
          labels: [],
          series: [],
        },
        barChartOptions: {
          seriesBarDistance: 10, // Distance between bars
          axisX: {
            showGrid: true, // Show grid on x-axis
          },
          low: 0,
          high: 5,
          axisY: {
            onlyInteger: true,
            offset: 20, // Offset on y-axis
            showLabel: true, // Show labels on y-axis
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