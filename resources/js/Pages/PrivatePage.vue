<template>

    <input type="bitton" value="ファイル出力" @click="getfile()">
    <div>
        <h1>私の幸福度</h1>
        <div>
            <BarGraph
            :BarDatas = barDatas
            :LabelDatas = labelDatas
            />
        </div>
    </div>

    <div class="dataTable">
        <!-- TODO：テーブル作成 -->
    </div>

    <h1>私の脳内</h1>
    <div class="circleGraph">
        <CircleGraph
        :CircleDatas = circleDatas
        :BackgroundColor = backgroundColor
        :LabelDatas = circleLabel
        />

    </div>
</template>


<script setup>

import { ref } from 'vue'
import BarGraph from '../Component/Graph/BarGraph.vue'
import CircleGraph from '../Component/Graph/CircleGraph.vue'


// TODO:グラフに渡すモックデータ

// TODO:棒グラフ
const barDatas = ref([52,56,12,78,5,98,45])
const labelDatas = ref(['1歳','2歳','3歳','4歳','5歳','6歳'])
// TODO:棒グラフ

// TODO: 円グラフ
const circleDatas = ref([30,20,10,5,5,5])
const backgroundColor = ref(['red','yellow','green','blue','white','black'])
const circleLabel = ref(['宇宙','ランニング','筋トレ','プログラミング','ゲーム','読書'])
// TODO: 円グラフ


// TODO:グラフに渡すモックデータ

const getfile = async () => {
    // await request.getfile()
}

</script>

<style scoped>

    .circleGraph{
        width: 50%!important;
        height: 20%!important;
        margin: 0;
    }

    .circleGraph canvas {
        justify-content: center;
    }

    

</style>