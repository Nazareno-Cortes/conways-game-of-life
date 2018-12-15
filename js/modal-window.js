var Modal = {
  accept: null,
  configurations: null,
  number: 0,

  getConfiguration: function () {
    return document.getElementById('configuration');
  },

  getStart: function() {
    return document.getElementById('start');
  },

  getNumber: function() {
    return document.getElementById('cellnumber').value;
  },

  hideModal: function() {
    document.getElementsByClassName('modalwindow')[0].style.display = 'none';
  },

  showModal: function() {
    document.getElementsByClassName('modalwindow')[0].style.display = 'flex';
    Game.hiddeGame();
  },
  
  begin: function() {
    Modal.accept = Modal.getStart();
    Modal.accept.onclick = Modal.setStructure;
    Modal.configurations = Modal.getConfiguration();
    Modal.configurations.onclick = Modal.showModal;
    Modal.hideModal();
  },

  setStructure: function() {
    Modal.number = Modal.getNumber();
    var onlyNumbers = Validation.onlyNumbers(Modal.number);
    var includedNumber = Validation.includedNumber(5, 25, Modal.number);
    
    if (onlyNumbers && includedNumber) {
      Modal.hideModal();
      Board.rows = Modal.number;
      Board.columns = Modal.number;
      Game.init();
      Game.start();

    } else {
      if (document.getElementsByClassName('validation')[0] === undefined) {
        alert('Ingrese un NUMERO entre 5 y 25');
      }
    } // end to else
  } // end to setStructure
}
