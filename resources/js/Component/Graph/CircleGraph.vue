<template>
    <canvas :id="id"></canvas>
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
    let ctx = document.getElementById(props.id).getContext('2d')
    new Chart(ctx, {
        type : 'doughnut',
        data : {
            labels : props.LabelDatas,
            datasets : [
                {
                    type : 'doughnut',
                    label : '趣味',
                    data : props.circleDatas,
                    fill : false,
                    backgroundColor : props.backgroundColor,
                }
            ]
        }
    })
}

</script>