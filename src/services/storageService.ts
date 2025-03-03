export const api = {
	async fetchData() {
		const data = localStorage.getItem("data");
		return data ? JSON.parse(data) : { 
			currentLection: 'lection_1', 
			currentWordId: 0, 
			currentLang: 'Eng' 
		};
	},

	async updateData(currentLection: string , currentWordId: number, currentLang: string) {
		localStorage.setItem("data", JSON.stringify({currentLection, currentWordId, currentLang}));
		return {currentLection, currentWordId, currentLang};
	},
};