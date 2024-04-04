module.exports = {
  apps: [
    {
      name: "app-santander",
      script: "yarn",
      args: "dev", // Execute o script "dev" definido em package.json usando npm
      interpreter: "/bin/bash", // Caminho do interpretador
    },
  ],
};
