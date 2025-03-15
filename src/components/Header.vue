<script setup lang="ts">
import Search from "./Search.vue";
import ToggleLang from "./ToggleLang.vue";
import ToggleLection from "./ToggleLection.vue";
</script>

<template>
	<div class="header">
		<Search/>
		<div class="header-bottom">
			<ToggleLection />
			<ToggleLang />
		</div>
	</div>
</template>


<style scoped>

.header{
	width: 100%;
}
.header-bottom{
	margin-top: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
}
</style>