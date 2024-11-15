module.exports = {
    apps: [
      {
        name: 'pocketstore-docs', // Name der App in PM2
        script: 'build/index.js', // Einstiegspunkt der App
        cwd: './', // Arbeitsverzeichnis
        instances: 'max', // Für Clustering (maximale CPU-Kerne verwenden)
        exec_mode: 'cluster', // oder 'fork', je nach Bedarf
        env: {
          PORT: '5000',
          NODE_ENV: 'production', // Umgebungsvariable für den Produktionsmodus
        },
      },
    ],
  };