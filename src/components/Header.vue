<script setup lang="ts">
import ToggleLang from "./ToggleLang.vue";
import ToggleLection from "./ToggleLection.vue";
</script>

<template>
	<div class="header">
		<ToggleLection />
		<ToggleLang />
	</div>
</template>


<style scoped>
.header{
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
}
</style>