<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{ totalLections: number }>();

const tabs = ref<{ value: string, option: string }[]>([]);
for (let i = 1; i <= props.totalLections; i++) {
	tabs.value.push({
		value: `lection_${i}`,
		option:`Lection ${i}`
	});
}

const selectedLection = ref(tabs.value[0].value);

defineEmits(['update:selectedLection']);
</script>

<template>
	<div class="tabs">
		<select v-model="selectedLection" @change="$emit('update:selectedLection', selectedLection)">
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