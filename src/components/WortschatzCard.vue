<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { useWordStore } from "../store/wortschatzStore";
import { lectionsMap } from '../assets/lections';

const wordStore = useWordStore();

const cards = ref(lectionsMap('de')[wordStore.currentLection] || []);
const currentIndex = ref(wordStore.currentWordId)
const currentCard = ref(cards.value[currentIndex.value]);
		
const nextCard = () => {
	if (currentIndex.value < cards.value.length) {
		wordStore.setCurrentWordId(++wordStore.currentWordId)
	}
};

const prevCard = () => {
	if (currentIndex.value > 0) {
		wordStore.setCurrentWordId(--wordStore.currentWordId)

	}
};

watch(()=> [wordStore.currentWordId, wordStore.currentLection], 
(newValue) => {
	if(!newValue) return
	currentIndex.value = wordStore.currentWordId;
	currentCard.value = cards.value[currentIndex.value];
	}, {immediate:true})
</script>


<template>
				<div class="card" v-if="currentCard">
				<p>
					<span>{{ `${currentIndex + 1} / ${cards.length}` }}</span>
				</p>
				<h2>
					{{ currentCard.title }}
					<span class="subtitle">{{ currentCard.subtitle }}</span>
				</h2>
				<div class="content">
					<p><strong>Erklärung:</strong> {{ currentCard.erklärung }}</p>
					<div class="beispiele">
						<p><strong>Beispiele:</strong></p>
						<ul>
							<li v-for="(example, index) in currentCard.beispiele" :key="index">{{ example }}</li>
						</ul>
					</div>
					<div>
						<p><strong>Synonyme:</strong> {{ currentCard.synonyme }}</p>
						<p><strong>Antonyme:</strong> {{ currentCard.antonyme }}</p>
					</div>
				</div>
				<div class="buttons">
					<button @click="prevCard" :disabled="currentIndex === 0">Zurück</button>
					<button @click="nextCard" :disabled="currentIndex === cards.length - 1">Weiter</button>
				</div>
			</div>
</template>


<style scoped>

.card {
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 15px;
	background-color: white;
	padding: 15px 20px;
	border-radius: 10px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	width: clamp(280px, 90vw, 1200px);
	text-align: start;
}

.card span {
	color: #777;
}

.content {
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 15px;
}

.beispiele {
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 10px;
}

.buttons {
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	gap: 20px;
	margin-top: 10px;
}

button {
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	background-color: #007BFF;
	color: white;
	cursor: pointer;
}

button:disabled {
	background-color: #cccccc;
	cursor: not-allowed;
}
</style>