import { defineStore } from 'pinia';
import { api } from "../services/storageService.ts";
import { lectionsMap } from '../assets/lections';

export const useWordStore = defineStore('words',  {

	state: () => ({
		langList: [ 'Eng', 'Ru'],
		currentWordId: 0,
		currentLection: 'lection_1',
		currentLang: 'Eng',
		is_loading: false,
		lectionKeys: Object.keys(lectionsMap('de'))
  }),

	actions: {
		async uploadData() {
			this.is_loading = true;
			try {
				const {currentLection, currentWordId, currentLang} = await api.fetchData();
				this.currentLection = currentLection;
				this.currentWordId = currentWordId;
				this.currentLang = currentLang;
			} catch (error) {
				console.error("Failed to fetch data:", error);
			} finally {
				this.is_loading = false;
			}
		},
		async	setCurrentWordId(wordId: number){
			try {
				const {currentWordId } = await api.updateData(this.currentLection, wordId, this.currentLang);
				this.currentWordId = currentWordId;
			} catch (error) {
				console.error("Failed to save data:", error);
			}
    },

		async	setCurrentLection(lection: string){
			try {
				const {currentLection, currentWordId} = await api.updateData(lection, 0, this.currentLang);
				this.currentWordId = currentWordId;
				this.currentLection = currentLection;
			} catch (error) {
				console.error("Failed to save data:", error);
			}
    },

		async	setCurrentLang(lang: string){
			try {
				const {currentLang} = await api.updateData(this.currentLection, this.currentWordId, lang);
				this.currentLang = currentLang;
			} catch (error) {
				console.error("Failed to save data:", error);
			}
    },
	}
});