const serverInfo = require('../model/serverInfo');
const CPFController = require('../controllers/CPFController');

const ConsultaRequestController = {
  index: (request, response) => {
    const {
      cpf = '', action = 'search'
    } = request.query;
    let result;
    try {
      switch (action) {
        default:
        case 'search':
          result = CPFController.getCPF(cpf);
          break;
        case 'add':
          result = CPFController.addCPF(cpf);
          break;
        case 'delete':
          result = CPFController.deleteCPF(cpf);
          break;
      }
    } catch (err) {
      result = null
    };

    response.render('index', {
      result
    });
  },

  serverInfo: (request, response) => {
    response.render('status', serverInfo)
  }
};

module.exports = ConsultaRequestController;