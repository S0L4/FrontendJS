import React, { Component } from 'react';
import '../../assets/css/style.css';

class Endereco extends Component {
  constructor() {
    super();
    this.state = {
      cep: "",
      logradouro: "",
      complemento: "",
      bairro: "",
      localidade: "",
      uf: ""
    }
  }

  componentDidMount() {
    this.infoCep();
  }

  mudaCep = (event) => {
    this.setState({cep: event.target.value})
  }

  infoCep = () => {

    fetch("https://viacep.com.br/ws/" + this.numeroCep + "/json")
      .then(response => response.json())
      .then(data => this.setState({
        cep: data.cep,
        logradouro: data.logradouro,
        complemento: data.complemento,
        bairro: data.bairro,
        localidade: data.localidade,
        uf: data.uf
      })
    )
  }

  numeroCep(event){
    // console.log(event.target.value)
    this.setState({ cep: event.target.value })
    // console.log(this.state)
  }


 render() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-55">
          <div className="container">
            <form onSubmit={this.infoCep}>
              <div className="border">
                <div className="row">
                  <div className="col-30">

                    <h3>Digite seus dados</h3>

                    <label for="fname"><i className="fa fa-user"></i> Cep</label>
                    <input arial-label="cep" type="text" id="cep" name="cep" placeholder="02611-001" onChange={this.mudarCep} value={this.state.cep}/>

                    <label for="logradouro"><i className="fa fa-envelope"></i> Logradouro</label>
                    <input type="text" id="logradouro" name="logradouro" disabled readOnly="true" defaultValue={this.state.logradouro}/>

                    <label for="adr"><i className="fa fa-address-card-o"></i> Complemento</label>
                    <input type="text" id="complemento" name="complemento" disabled />

                    <label for="city"><i className="fa fa-institution"></i> Bairro</label>
                    <input type="text" id="bairro" name="bairro" disabled />

                    <label for="city"><i className="fa fa-institution"></i> Localidade</label>
                    <input type="text" id="localidade" name="localidade" disabled />

                    <label for="city"><i className="fa fa-institution"></i> Uf</label>
                    <input type="text" id="uf" name="uf" disabled />

                  </div>
                </div>
              </div>
              <input type="submit" value="Enviar" className="btn" id="cadastro" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
 }
}

export default Endereco;
