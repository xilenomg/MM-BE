const CPFController = require('../controllers/CPFController')

const ConsultaRequestController = {
  get: (request, response) => {
    const { cpf } = request.query;
    response.json(CPFController.getCPF(cpf));
  }
};

module.exports = ConsultaRequestController;