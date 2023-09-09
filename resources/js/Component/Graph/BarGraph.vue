<template>
    <canvas id="bar" width="100" height="38"></canvas>
</template>

<script setup>

import Chart from 'chart.js/auto'
import { onMounted } from 'vue'

const props = defineProps({
    BarDatas : Array,
    LabelDatas : Array,
})

onMounted(() => {
    renderChart()
})

const renderChart = () => {
    let ctx = document.getElementById('bar').getContext('2d')
    new Chart(ctx, {
        type : Object,
        data : {
            labels : props.LabelDatas,
            datasets : [
                {
                    type : 'bar',
                    label : '利用者数',
                    data : props.BarDatas,
                    borderColor : 'red',
                    backgroundColor : 'blue'
                }
            ]
        },
    })
}


</script>