<script setup lang="ts">
import Header from '../components/Header.vue';
import WortschatzCard from "../components/WortschatzCard.vue";
</script>

<template>
	<div class="container">
		<div class="page_content">
			<Header />
			<WortschatzCard />
		</div>
	</div>
</template>

<style scoped>
.page_content {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 20px;
}
</style>
