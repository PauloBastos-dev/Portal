import React, {setState, useState} from 'react'

//import  'bootstrap/dist/css/bootstrap.min.css'

const Portal = () => {

  const [mostraModal, setState] = useState([{showModal: false}]).bind();
  const [escondeModal, setState] = useState([{showModal: false}]).bind();
  mostraModal() {
    setState({showModal: true});
  }

  escondeModal() {
    setState({showModal: false});
  }

    const modal = useState.showModal ? (
      <Modal>
        <div className="modal">
          <div>Olá, eu sou um modal!</div>
          <button onClick={() => setState(escondeModal)}>Hide modal</button>
        </div>
      </Modal>
    ) : null;

    return (
      <div>
        <button onClick={() => setState(mostraModal)}>Show modal</button>
        {modal}
      </div>
    );
  }
}

export default Portal
{/*  constructor(props) {
    super(props);
    this.state = {showModal: false};
    this.mostraModal = this.mostraModal.bind(this);
    this.escondeModal = this.escondeModal.bind(this);
  }*/}
