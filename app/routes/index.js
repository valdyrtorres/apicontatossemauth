// routes/index.js

const rotasContatos = require('./rotas_contatos');
module.exports = function(app, db) {
  rotasContatos(app, db);
  // Other route groups could go here, in the future
};