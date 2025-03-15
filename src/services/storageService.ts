export const api = {
	async fetchData() {
		const data = localStorage.getItem("data");
		return data ? JSON.parse(data) : { 
			currentLectionTitle: 'lection_1', 
			currentWordId: 1, 
			currentLang: 'En' 
		};
	},

	async updateData(currentLectionTitle: string , currentWordId: number, currentLang: string) {
		localStorage.setItem("data", JSON.stringify({currentLectionTitle, currentWordId, currentLang}));
		return {currentLectionTitle, currentWordId, currentLang};
	},
};