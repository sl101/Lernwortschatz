const modules = import.meta.glob('./lection_*.ts', { eager: true });

export const lectionsMap = Object.fromEntries(
  Object.entries(modules).map(([path, module]) => {
    const key = path.match(/lection_\d+/)?.[0]; 
    return [key, (module as { default: any }).default];
  })
);

