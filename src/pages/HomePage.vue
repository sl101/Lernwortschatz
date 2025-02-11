<script setup lang="ts">
import lectionWorts from '~/assets/lections/lection_1'

import { ref } from 'vue';


const cards = ref(lectionWorts);

const currentIndex = ref(0);
const currentCard = ref(cards.value[currentIndex.value]);

const nextCard = () => {
	if (currentIndex.value < cards.value.length - 1) {
		currentIndex.value++;
		currentCard.value = cards.value[currentIndex.value];
	}
};

const prevCard = () => {
	if (currentIndex.value > 0) {
		currentIndex.value--;
		currentCard.value = cards.value[currentIndex.value];
	}
};

</script>

<template>
	<div>
		<div class="card" v-if="currentCard">
			<h2>{{ currentCard.title }}
				<span class="subtitle" >{{ currentCard.subtitle }}</span>
			</h2>
			<p><strong>Erklärung:</strong> {{ currentCard.erklärung }}</p>
			<p><strong>Beispiele:</strong></p>
			<ul>
				<li v-for="(example, index) in currentCard.beispiele" :key="index">{{ example }}</li>
			</ul>
			<p><strong>Synonyme:</strong> {{ currentCard.synonyme }}</p>
			<p><strong>Antonyme:</strong> {{ currentCard.antonyme }}</p>
			<div class="buttons">
				<button @click="prevCard" :disabled="currentIndex === 0">Назад</button>
				<button @click="nextCard" :disabled="currentIndex === cards.length - 1">Вперед</button>
			</div>
		</div>
	</div>
</template>


<style scoped>

body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
			width: 100vh;
      margin: 0;
    }
    .card {
      background-color: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    	max-width: 80%;
			width: 100%;
      text-align: start;
    }
    .card h2 {
      margin-top: 0;
    }
    .card p {
      margin: 10px 0;
    }
		.card span{
			color: #777;
		}
    .buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
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
    }</style>
