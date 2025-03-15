<script setup lang="ts">
import { computed, ref } from "vue";
import { useWordStore } from "../store/wortschatzStore";

const wordStore = useWordStore();

const translatedList = ref(wordStore.wortschatzList);
const  searchString = computed(()=> wordStore.currentTitle);
const filteredList = ref<{ id: number; title: string }[]>([]);

const handleSearchString = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;
	wordStore.setCurrentTitle(value);

  if (value === "") {
    filteredList.value = [];
  } else {
    filteredList.value = translatedList.value.filter(item =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
  }
};

const handleGetWord = (itemId: number) => {
  const selectedItem = translatedList.value.find(item => item.id === itemId);
  if (selectedItem) {
		wordStore.setCurrentTitle(selectedItem.title);
    filteredList.value = []; 
    wordStore.currentWordId = itemId;
    wordStore.setCurrentIndex(itemId);
  }
};

</script>

<template>
	<div class="wrapper">
		<input v-model="searchString" type="search" @input="handleSearchString" @focus="wordStore.clearCurrentTitle" placeholder="search">

		<div v-if="filteredList.length" class="searchList_wrapper" >
			<ul class="list"  >
				<li class="item" v-for="item in filteredList" key="item.id">
					<p @click="()=>handleGetWord(item.id)">{{item.title}}</p>
				</li>
			</ul>
		</div>

	</div>
</template>


<style scoped>
.wrapper{
	width: 100%;
	position: relative;
}

.searchList_wrapper{
	position: absolute;
	width: 100%;
	min-width: 300px;
	z-index: 20;
	background-color: #fff;
	box-shadow: 0 4px 8px rgba(83, 81, 81, 0.1);
	border-radius: 10px;
	padding: 10px;
	top:30px;
	left: 0;
}

.list{
	display: flex;
	flex-direction: column;
	gap: 6px;
	height: 86vh;
	overflow: hidden;
	overflow-y: scroll;
}

.item{
	
	border-bottom: 1px solid #999;
}

.item:last-child{
	border: none;
}

.item p{
	cursor: pointer;
	width: 100%;
  padding-bottom: 4px;
	display: -webkit-box;

  -webkit-box-orient: vertical;
  line-clamp: 1;
  overflow: hidden;
}
</style>