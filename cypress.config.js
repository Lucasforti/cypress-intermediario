const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      hideCredentials: true,
      requestMode: true,
    },
    experimentalRunAllSpecs: true, // Este comando permite executar todos os testes de uma vez só na interface gráfica
  },
  fixturesFolder: false,
  video: false,
})




//const { defineConfig } = require('cypress')

//module.exports = defineConfig({
//  e2e: {}
//    baseUrl: 'http://localhost',
//    env: {
//      hideCredentials: true,
//      requestMode: true,
//    },
//  },
//  fixturesFolder: false,
//  video: false,
//})
