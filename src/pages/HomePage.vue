<script setup lang="ts">

import Header from '../components/Header.vue';
import WortschatzCard from "../components/WortschatzCard.vue";
import RevertButton from "../components/RevertButton.vue";
//import { useWordStore } from "../store/wortschatzStore";

//const wordStore = useWordStore();
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
	padding-bottom: 80px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
}

</style>
