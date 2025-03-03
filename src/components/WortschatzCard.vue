<script setup lang="ts">
import { ref, watch } from 'vue';
import { useWordStore } from "../store/wortschatzStore";
import { lectionsMap } from '../assets/lections';
import DeutschContent from "./DeutschContent.vue";
import TranslatedCard from "./TranslatedCard.vue";

const wordStore = useWordStore();

const cardLang = 'de';

const lection = ref(lectionsMap(cardLang)[wordStore.currentLection] || []);
const currentIndex = ref(wordStore.currentWordId)
const currentCard = ref(lection.value[currentIndex.value]);

watch(()=> [wordStore.currentWordId, wordStore.currentLection], 
(newValue) => {
	if(!newValue) return
	currentIndex.value = wordStore.currentWordId;
	lection.value = lectionsMap(cardLang)[wordStore.currentLection];
	currentCard.value = lection.value[currentIndex.value];
	}, {immediate:true})
</script>


<template>
				<div class="card" v-if="currentCard">
				<p>
					<span>{{ `${currentIndex + 1} / ${lection.length}` }}</span>
				</p>
				<DeutschContent v-if="!wordStore.isTransated" :currentCard="currentCard" :currentIndex="currentIndex" :lectionLength="lection.length"/>
				<TranslatedCard v-else/>
			</div>
</template>


<style scoped>
.card {
	display: flex;
	height: 80%;
	width: clamp(280px, 90vw, 1200px);
	flex-direction: column;
	justify-content: space-between;
	align-items: start;
	gap: 15px;
	background-color: white;
	padding: 15px 20px;
	border-radius: 10px;
	box-shadow: 0 4px 8px rgba(83, 81, 81, 0.1);
	text-align: start;
}
</style>