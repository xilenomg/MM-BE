const BlackListModel = require('../model/blacklist');
const serverInfo = require('../model/serverInfo');

const CPFController = {
  getCPF: (cpf) => {
    serverInfo.countCheck++;
    const cpfNumberOnly = cpf.replace(/([^\d]+)/g,'');
    if (cpfNumberOnly.length !== 11) {
      throw new Error('CPFLENGHTERROR');
    }
    const searchResult = BlackListModel.search(cpfNumberOnly);

    return {
      type: 'search',
      cpfFound: searchResult !== -1,
      cpfTyped: cpf,
      cpfNumberOnly: cpfNumberOnly
    }
  },
  addCPF: (cpf) => {
    const cpfNumberOnly = cpf.replace(/([^\d]+)/g,'');
    if (cpfNumberOnly.length !== 11) {
      throw new Error('CPFLENGHTERROR');
    }
    const addResult = BlackListModel.add(cpfNumberOnly);

    return {
      type: 'add',
      cpfAdded: addResult,
      cpfTyped: cpf,
      cpfNumberOnly: cpfNumberOnly
    }
  },
  deleteCPF: (cpf) => {
    const cpfNumberOnly = cpf.replace(/([^\d]+)/g,'');
    if (cpfNumberOnly.length !== 11) {
      throw new Error('CPFLENGHTERROR');
    }
    const deleteResult = BlackListModel.delete(cpfNumberOnly);

    return {
      type: 'delete',
      cpfDeleted: deleteResult,
      cpfTyped: cpf,
      cpfNumberOnly: cpfNumberOnly
    }
  }
}

module.exports = CPFController;