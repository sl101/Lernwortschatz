<script setup lang="ts">
import { useWordStore } from "../store/wortschatzStore";

const wordStore = useWordStore();

const handleToggleCard = () => {
	wordStore.toggleTranslate()
}
		
</script>

<template>
	<div :class="['button', { active: wordStore.isTransated }]" @click="handleToggleCard">
	</div>
</template>


<style scoped>
.button{
	flex: 0 0 60px;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	background-color: #fff;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), 0 -1px 6px rgba(0, 0, 0, 0.2);
}

.active{
	background-color: #007BFF;
}
</style>