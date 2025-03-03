<script setup lang="ts">
import { useWordStore } from "../store/wortschatzStore";
import { type Card } from "../types/Card.ts";
const wordStore = useWordStore();

const props = defineProps<{
	currentCard: Card;
	lectionLength: number;
	currentIndex: number;
}>();

const nextCard = () => {
	if (props.currentIndex < props.lectionLength) {
		wordStore.setCurrentWordId(++wordStore.currentWordId)
	}
};

const prevCard = () => {
	if (props.currentIndex > 0) {
		wordStore.setCurrentWordId(--wordStore.currentWordId)
}
	}
</script>

<template>
	<div class="card-content" >
		<h2>
					{{ currentCard.title }}
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
					<button @click="prevCard" :disabled="wordStore.currentWordId === 0">Zurück</button>
					<button @click="nextCard" :disabled="lectionLength === lectionLength - 1">Weiter</button>
				</div>
	</div>
</template>



<style scoped>
.card-content {
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 15px;
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