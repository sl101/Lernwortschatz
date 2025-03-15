<script setup lang="ts">
import {  ref } from 'vue';
import { useWordStore } from "../store/wortschatzStore";

const wordStore = useWordStore();

const tabs = ref<{ value: string, option: string }[]>([]);

for (let i = 1; i <= wordStore.lectionKeys.length; i++) {
	tabs.value.push({
		value: `lection_${i}`,
		option:`Lection ${i}`
	});
}

const selectLection = ()=> {
	wordStore.setCurrentLectionTitle(wordStore.currentLectionTitle)
}
</script>

<template>
	<div class="tabs">
		<select v-model="wordStore.currentLectionTitle" @change="selectLection">
			<option v-for="tab in tabs" :key="tab.value" :value="tab.value">
				{{ tab.option }}
			</option>
		</select>
	</div>
</template>


<style scoped>
.tabs{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: start;
	gap: 16px;
}
</style>