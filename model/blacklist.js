const fs = require('fs');

const BlackListData = [];
const BlacklistModel = {
  add: (cpf) => {
    if (BlacklistModel.search(cpf) === -1){
      BlackListData.push(cpf);
      return true;
    }
    return false;
  },
  search: (cpf) => {
    const cpfPosition = BlackListData.indexOf(cpf);
    return cpfPosition;
  },
  delete: (cpf) => {
    const cpfPosition = BlacklistModel.search(cpf);
    if (cpfPosition !== -1){
      return !!BlackListData.splice(cpfPosition, 1);
    }
    return false
  },
  get: () => {
    return BlackListData;
  }
};

module.exports = BlacklistModel;