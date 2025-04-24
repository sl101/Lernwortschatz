
<script setup lang="ts">
import { computed, watch } from "vue";
import { useWordStore } from "../store/wortschatzStore";
import { lectionsMap } from '../assets/lections';
import type { Card } from "../types/Card";


const wordStore = useWordStore();

const currentLang = computed(()=> wordStore.currentLang.toLocaleLowerCase() as "de" | "ru" | "en");

const lection = computed(()=>lectionsMap(currentLang.value)[wordStore.currentLectionTitle] || []);
const currentCard = computed(()=>lection.value.find((item: Card) => item.id === wordStore.currentWordId));

watch(()=> wordStore.currentLang , ()=>{

}, {immediate:true})

</script>

<template>
	<h2 class="transated-card" >
		{{ currentCard.title }}
	</h2>
</template>


<style scoped>
.transated-card{
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;align-items: center;
}
</style>