<script setup lang="ts">
import { useWordStore } from "../store/wortschatzStore";

const wordStore = useWordStore();

const handleToggleCard = () => {
	wordStore.toggleTranslate()
}
		
</script>

<template>
	<div class="wrapper">
		<div :class="['button', { active: wordStore.isTransated }]" @click="handleToggleCard">
		</div>
	</div>
</template>


<style scoped>
.wrapper{
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
}
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