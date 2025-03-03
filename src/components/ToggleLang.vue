<script setup lang="ts">
import { ref } from 'vue';
import { useWordStore } from "../store/wortschatzStore";

const wordStore = useWordStore();

const langList = ref(wordStore.langList);
const tabs = ref<{ value: string, option: string }[]>([]);

for (let i = 0; i <= langList.value.length-1; i++) {
	tabs.value.push({
		value: langList.value[i],
		option:langList.value[i]
	});
}

const selectLang = ()=> {
	wordStore.setCurrentLang(wordStore.currentLang)
}
</script>

<template>
	<div class="tabs">
		<select v-model="wordStore.currentLang" @change="selectLang">
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
	align-items: center;
	justify-content: end;
	gap: 16px;
}
</style>