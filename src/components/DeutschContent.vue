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
		<div class="content">
			<h2 class="title">
				{{ currentCard.title }}
			</h2>
	
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
				<button @click="nextCard" :disabled="wordStore.currentWordId === lectionLength - 1">Weiter</button>
				</div>
	</div>
</template>

<style scoped>
.card-content {
	width: 100%;
	height: 90%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: start;
	gap: 15px;
}

.content {
	height: 100%;
	overflow-y: auto;
	border-top: 1px solid #aaa;
	border-bottom: 1px solid #aaa;
	padding-block: 10px;
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 15px;
}

.title{
	font-size: 1.3em;
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