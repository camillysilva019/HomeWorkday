// Supondo que você esteja utilizando o Mongoose para interagir com o MongoDB
const mongoose = require('mongoose');

const dadosSchema = new mongoose.Schema({
  nome: String,
  data_nasc: String,
  cpf: String,
  sexo: String,
  estado_civil: String,
  email: String,
  telefone: String
});

const Dados = mongoose.model('Dados', dadosSchema);

async function salvarDados(dados) {
  const novoDado = new Dados(dados);
  await novoDado.save();
}

module.exports = {
  salvarDados
};
