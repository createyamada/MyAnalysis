<template>
    <canvas id="circle"></canvas>
</template>

<script setup>

import Chart from 'chart.js/auto'
import { onMounted } from 'vue'

const props = defineProps({
    Id : String,
    CircleDatas : Array,
    BackgroundColor : Array,
    LabelDatas : Array,
})

onMounted(() => {
    renderChart()
})

const renderChart = () => {
    let ctx = document.getElementById('circle').getContext('2d')
    new Chart(ctx, {
        type : 'doughnut',
        data : {
            labels : props.LabelDatas,
            datasets : [
                {
                    type : 'doughnut',
                    label : '趣味',
                    data : props.CircleDatas,
                    fill : false,
                    backgroundColor : props.backgroundColor,
                }
            ]
        }
    })
}

</script>