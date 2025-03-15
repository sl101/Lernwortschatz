const modules = {
  de: import.meta.glob('./de/lection_*.ts', { eager: true }),
  ru: import.meta.glob('./ru/lection_*.ts', { eager: true }),
  en: import.meta.glob('./en/lection_*.ts', { eager: true }),
} as const;

export const lectionsMap = (lang: "de" | "ru" | "en") => {
  return Object.fromEntries(
    Object.entries(modules[lang]).map(([path, module]) => {
      const key = path.match(/lection_\d+/)?.[0];
      return [key, (module as { default: any }).default];
    })
  );
};

export const wordTitles = () => {
  const titles: {id:number, title:string} []= [];

  Object.values(modules['de']).forEach((module) => {
    const defaultData = (module as { default: any }).default;
    if (Array.isArray(defaultData)) {
      defaultData.forEach((item) => {
        if (item.title) {
          titles.push({
						id: item.id, 
						title: item.title});
        }
      });
    }
  });

  return titles;
};

export const getLectionById = (wordId: number) => {

  const lectionsArray = Object.entries(modules['de']);

  for (let i = 0; i < lectionsArray.length; i++) {
    const [key, module] = lectionsArray[i];
    const defaultData = (module as { default: any }).default;

    if (Array.isArray(defaultData)) {

      const itemIndex = defaultData.findIndex((item) => item.id === wordId);
      if (itemIndex !== -1) {

        return { lectionIndex: i, itemIndex };
      }
    }
  }

  return undefined;
};
