const Model = require('./model');

async function salvarDados(req, res) {
  try {
    const dados = req.body;
    await Model.salvarDados(dados);
    res.status(200).send('Dados salvos com sucesso!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao salvar os dados.');
  }
}

module.exports = {
  salvarDados
};
