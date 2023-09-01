<template>
    <canvas :id="id" width="100" height="38"></canvas>
</template>

<script setup>

import Chart from 'chart.js/auto'
import { onMounted } from 'vue'

const props = defineProps({
    Id : String,
    BarDatas : Array,
    LabelDatas : Array,
})

onMounted(() => {
    renderChart()
})

const renderChart = () => {
    let ctx = document.getElementById(props.id).getContext('2d')
    new Chart(ctx, {
        type : Object,
        data : {
            labels : props.LabelDatas,
            datasets : [
                {
                    type : 'bar',
                    label : '利用者数',
                    data : props.barDatas,
                    borderColor : red,
                    backgroundColor : black
                }
            ]
        },
    })
}


</script>