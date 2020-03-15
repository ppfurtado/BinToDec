import React, { Component } from 'react'
import AppComponent from './components/AppComponent'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      valueBin: '',
      valueDec: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)

  }

  handleChange(e){
    this.setState({
      valueBin: e.target.value
    })
  }
  handleClick(){
    const regex = new RegExp('[a-zA-Z2-9]','gi')
    const binarios = this.state.valueBin.match(regex)
    if(binarios !== null){
      return alert("Entre com um valor binário");
    }
    this.setState({
      valueDec: this.state.valueBin.split('').reverse().reduce(function(acc,atl, index){
        return acc + atl*2**index;
      },0)
    })
  }

    
  render(){
    return(
      <AppComponent
      valueInputDec={this.state.valueDec} 
      handleChange={this.handleChange}
      handleClick={this.handleClick} />
    )
  }
}