import { defineStore } from 'pinia';
import { api } from "../services/storageService.ts";
export const useWordStore = defineStore('words',  {

	state: () => ({
		currentWordId: 0,
		is_loading: false,
  }),

	actions: {
		async fetchData() {
			this.is_loading = true;
			try {
				const data = await api.fetchData();
				this.currentWordId = data || 0;
			} catch (error) {
				console.error("Failed to fetch data:", error);
			} finally {
				this.is_loading = false;
			}
		},
		async	setCurrentWordId(wordId: number){
			try {
				const updatedData = await api.updateData(wordId);
				this.currentWordId = updatedData;
			} catch (error) {
				console.error("Failed to save data:", error);
			}
    },
	}
});