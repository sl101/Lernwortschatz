const modules = {
  de: import.meta.glob('./de/lection_*.ts', { eager: true }),
  ru: import.meta.glob('./ru/lection_*.ts', { eager: true }),
  en: import.meta.glob('./en/lection_*.ts', { eager: true }),
} as const; // Добавляем `as const`, чтобы TypeScript знал, что ключи фиксированы

export const lectionsMap = (lang: "de" | "ru" | "en") => {
  return Object.fromEntries(
    Object.entries(modules[lang]).map(([path, module]) => {
      const key = path.match(/lection_\d+/)?.[0];
      return [key, (module as { default: any }).default];
    })
  );
};

//const modules = import.meta.glob('./de/lection_*.ts', { eager: true });

//export const lectionsMap = Object.fromEntries(
//  Object.entries(modules).map(([path, module]) => {
//    const key = path.match(/lection_\d+/)?.[0]; 
//    return [key, (module as { default: any }).default];
//  })
//);

