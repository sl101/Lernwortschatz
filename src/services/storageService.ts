export const api = {
	async fetchData() {
		const data = localStorage.getItem("data");
		return data ? JSON.parse(data) : null;
	},

	async updateData(data: number) {
		localStorage.setItem("data", JSON.stringify(data));
		return data;
	},
};
