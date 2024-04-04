module.exports = {
  apps: [
    {
      name: "app-santander",
      script: "npm",
      args: "run dev", // Execute o script "dev" definido em package.json usando npm
      interpreter: "/bin/bash", // Caminho do interpretador
    },
  ],
};
