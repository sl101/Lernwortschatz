import { defineStore } from 'pinia';
import { api } from "../services/storageService.ts";
import { lectionsMap, wordTitles, getLectionById } from '../assets/lections';
import type { Card } from '../types/Card.ts';

export const useWordStore = defineStore('words', {
  state: () => ({
    langList: ['En', 'Ru'],
    currentWordId: 1,
    firstLectionId: 1,
    currentIndex: 1,
    currentLectionTitle: 'lection_1',
    currentLang: 'En',
    lection: lectionsMap('de')['lection_1'] || [],
    currentCard: {} as Card,
    currentTitle: '',
    is_loading: false,
    lectionKeys: Object.keys(lectionsMap('de')),
    wortschatzList: wordTitles(),
    isTransated: false,
  }),

  actions: {
    // Загрузка данных
    async uploadData() {
      this.is_loading = true;
      try {
        const { currentLectionTitle, currentWordId, currentLang } = await api.fetchData();
        this.updateLection(currentLectionTitle || 'lection_1');
        this.updateCurrentCard(currentWordId);
        this.currentLang = currentLang;
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        this.is_loading = false;
      }
    },

    // Установка текущего слова
    async setCurrentWordId(wordId: number) {
      try {
        const { currentWordId } = await api.updateData(this.currentLectionTitle, wordId, this.currentLang);
        this.updateCurrentCard(currentWordId);
      } catch (error) {
        console.error("Failed to save data:", error);
      }
    },

    // Установка текущей лекции
    async setCurrentLectionTitle(lection: string) {
      try {
        const firstLectionId = lectionsMap('de')[lection][0].id;
        const { currentLectionTitle, currentWordId } = await api.updateData(lection, firstLectionId, this.currentLang);
        this.updateLection(currentLectionTitle);
        this.updateCurrentCard(currentWordId);
        this.currentIndex = 1;
        this.clearCurrentTitle();
      } catch (error) {
        console.error("Failed to save data:", error);
      }
    },

    // Установка текущего индекса
    async setCurrentIndex(wordId: number) {
      const result = getLectionById(wordId);
      if (!result) return;

      const { lectionIndex, itemIndex } = result;
      const { currentLectionTitle, currentWordId } = await api.updateData(this.lectionKeys[lectionIndex], wordId, this.currentLang);

      this.updateLection(currentLectionTitle);
      this.updateCurrentCard(currentWordId);
      this.currentIndex = itemIndex + 1;
    },

    // Установка текущего языка
    async setCurrentLang(lang: string) {
      try {
        const { currentLang } = await api.updateData(this.currentLectionTitle, this.currentWordId, lang);
        this.currentLang = currentLang;
      } catch (error) {
        console.error("Failed to save data:", error);
      }
    },

    // Переключение перевода
    toggleTranslate() {
      this.isTransated = !this.isTransated;
    },

    // Увеличение индекса
    increateIndex() {
      if (this.currentIndex >= this.lection.length) return;
      this.currentIndex += 1;
      this.updateCurrentCard(this.lection[this.currentIndex - 1].id);
      this.clearCurrentTitle();
    },

    // Уменьшение индекса
    decreateIndex() {
      if (this.currentIndex === 1) return;
      this.currentIndex -= 1;
      this.updateCurrentCard(this.lection[this.currentIndex - 1].id);
      this.clearCurrentTitle();
    },

    // Установка текущего заголовка
    setCurrentTitle(title: string) {
      this.currentTitle = title;
    },

    // Очистка текущего заголовка
    clearCurrentTitle() {
      this.currentTitle = '';
    },

    // Приватные методы для повторяющейся логики

    // Обновление текущей лекции
    updateLection(lectionTitle: string) {
      this.currentLectionTitle = lectionTitle;
      this.lection = lectionsMap('de')[lectionTitle] || [];
      this.firstLectionId = this.lection[0]?.id || 1;
    },

    // Обновление текущей карточки
    updateCurrentCard(wordId: number) {
      this.currentWordId = wordId;
      this.currentCard = this.lection.find((item: Card) => item.id === wordId) || {} as Card;
    },
  },
});