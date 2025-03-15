<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { useWordStore } from "../store/wortschatzStore";
import { lectionsMap } from '../assets/lections';
import { type Card } from '../types/Card.ts';
import DeutschContent from "./DeutschContent.vue";
import TranslatedCard from "./TranslatedCard.vue";

const wordStore = useWordStore();

const cardLang = 'de';

const lection = ref<Card[]>(lectionsMap(cardLang)[wordStore.currentLectionTitle] || []);
const currentId = ref(wordStore.currentWordId)
const currentCard = computed(() => wordStore.lection.find((item: Card) => item.id === wordStore.currentWordId));

watch(()=> [wordStore.currentWordId, wordStore.currentLectionTitle], 
(newValue) => {
	if(!newValue) return
	currentId.value = wordStore.currentWordId;
	lection.value = lectionsMap(cardLang)[wordStore.currentLectionTitle];
	}, {immediate:true})
</script>

<template>
				<div class="card" v-if="wordStore.currentCard">
				<p>
					<span>{{ `${wordStore.currentIndex} / ${wordStore.lection.length}` }}</span>
				</p>
				<DeutschContent v-if="!wordStore.isTransated" :currentCard="currentCard" :lectionLength="lection.length"/>
				<TranslatedCard v-else/>
			</div>
</template>


<style scoped>
.card {
	display: flex;
	height: 80%;
	width: clamp(280px, 86vw, 1200px);
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