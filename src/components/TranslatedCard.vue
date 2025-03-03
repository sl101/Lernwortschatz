
<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useWordStore } from "../store/wortschatzStore";
import { lectionsMap } from '../assets/lections';


const wordStore = useWordStore();

const currentLang = computed(()=> wordStore.currentLang.toLocaleLowerCase() as "de" | "ru" | "en");

const lection = computed(()=>lectionsMap(currentLang.value)[wordStore.currentLection] || []);
const currentIndex = computed(()=>wordStore.currentWordId)
const currentCard = computed(()=>lection.value[currentIndex.value]);

watch(()=> wordStore.currentLang , ()=>{

}, {immediate:true})

</script>

<template>
	<h2>
		{{ currentCard.title }}
	</h2>
</template>


<style scoped>

</style>