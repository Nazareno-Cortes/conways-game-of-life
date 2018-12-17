var Modal = {
  accept: null,
  configurations: null,
  cancel: null,
  number: 0,

  getConfiguration: function () {
    return document.getElementById('configuration');
  },

  getAccept: function() {
    return document.getElementById('accept');
  },

  getNumber: function() {
    return document.getElementById('cellnumber').value;
  },

  getCancel: function() {
    return document.getElementById('cancel');
  },

  hideModal: function() {
    document.getElementsByClassName('modalwindow')[0].style.display = 'none';
    Game.showGame();
  },

  showModal: function() {
    document.getElementsByClassName('modalwindow')[0].style.display = 'flex';
    Game.hiddeGame();
  },
  
  begin: function() {
    Modal.accept = Modal.getAccept();
    Modal.accept.onclick = Modal.setStructure;
    Modal.configurations = Modal.getConfiguration();
    Modal.configurations.onclick = Modal.showModal;
    Modal.cancel = Modal.getCancel();
    Modal.cancel.onclick= Modal.hideModal;
    Modal.hideModal();
  },

  setStructure: function() {
    Modal.number = Modal.getNumber();
    var onlyNumbers = Cell_Validation.onlyNumbers(Modal.number);
    var includedNumber = Cell_Validation.includedNumber(5, 25, Modal.number);
    
    if (onlyNumbers && includedNumber) {
      Modal.hideModal();
      Board.rows = Modal.number;
      Board.columns = Modal.number;
      Game.init();
      Game.start();
      Game.showGame();

    } else {
      if (document.getElementsByClassName('validation')[0] === undefined) {
        alert('Enter a number between 5 and 25');
      }
    } // end to else
  } // end to setStructure
}