<template>
  <Doughnut :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS, Title, Tooltip, Legend, ArcElement
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

const chartData = {
  labels: ['Donat Cokelat', 'Donat Stroberi', 'Donat Keju'],
  datasets: [{
    label: 'Penjualan',
    data: [40, 25, 35],
    backgroundColor: ['#ec4899', '#facc15', '#34d399']
  }]
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'bottom' }
  }
}
</script>
