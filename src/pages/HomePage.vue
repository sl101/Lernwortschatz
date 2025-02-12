<script setup lang="ts">
import lectionWorts from '../assets/lections/lection_1'

import { ref } from 'vue';
import Header from '../components/Header.vue'

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
	<div class="container">
		<Header/>
		<div class="card" v-if="currentCard">
			<p>
				<span>{{ `${currentIndex+1} / ${cards.length}` }}</span>
			
			</p>
			<h2>{{ currentCard.title }}
				<!--<span class="subtitle" >{{ currentCard.subtitle }}</span>-->
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
	</div>
</template>


<style scoped>
    .card {
			display: flex;
			flex-direction: column;
			align-items: start;
			gap: 20px;
			background-color: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
			width: clamp(280px, 90vw, 1200px);
			height: auto;
      text-align: start;
    }
		.card span{
			color: #777;
		}
		.content{
			display: flex;
			flex-direction: column;
			align-items: start;
			gap: 20px;
		}

		.beispiele{
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
			gap: 30px;
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
