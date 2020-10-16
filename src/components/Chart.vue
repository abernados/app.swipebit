<template>
  <div class="o-box">
    <header class="o-box__header v--headline">
      <h3 class="o-box__heading">
        Transaction Fee Collection
      </h3>
    </header>

    <div class="o-box__body u-p-4">
      <apexchart
        width="500"
        type="bar"
        :options="chartOptions"
        :series="series"
      />
    </div>
  </div>
</template>

<script>
export default {
    data: function() {
      return {
        chartOptions: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        }]
      }
    },
};
</script>

<style>
</style>
