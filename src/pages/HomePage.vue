<script setup lang="ts">

import Header from '../components/Header.vue';
import WortschatzCard from "../components/WortschatzCard.vue";
import RevertButton from "../components/RevertButton.vue";

</script>

<template>
	<div class="container">
			<div 
			class="page_content">
			<Header />
			<WortschatzCard />
			<RevertButton/>
		</div>
	</div>
</template>

<style scoped>
.page_content {
	padding-block: 20px;
	position: relative;
	z-index: 10;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
}

</style>
