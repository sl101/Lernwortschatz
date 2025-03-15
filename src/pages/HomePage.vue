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
	padding-top: 20px;
	padding-bottom: 40px;
	position: relative;
	z-index: 10;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
}

</style>
