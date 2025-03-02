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
