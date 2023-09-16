<template>
    <canvas id="pileup" width="100" height="100"></canvas>
</template>

<script setup>

import Chart from 'chart.js/auto'
import { onMounted } from 'vue'

const props = defineProps({
    PileDatas : Array,
    GuidDatas : Array,
    // GuidDatas : Array,
})

const graphData = []
const backgroundColor = ["red" , "yellow" , "blue" , "green" , "black"]

onMounted (() => {
    // 受け取った配列を指定フォーマットに整形
    for(let i=0;i<props.PileDatas.length;i++) {
        graphData.push({
            type : 'bar',
            label : props.GuidDatas[i],
            fill : false,
            data : props.PileDatas[i],
            backgroundColor : backgroundColor[i],
            lineTension : 0.1,
        })
    }
    // グラフの描画処理呼び出し
    renderChart()
})

const renderChart = () => {
    let ctx = document.getElementById('pileup').getContext('2d')
    new Chart(ctx, {
        type : 'bar',
        data : {
            labels : props.LabelDatas,
            datasets : graphData,
        },
        options : {
            responsive : true,
            scales : {
                x : {
                    position : 'left',
                    stacked : true,
                },
                y : {
                    type : 'linear',
                    position : 'left',
                    stacked : true,
                }
            }
        }

    })
}

</script>