import React, { Component } from 'react'
import AppComponent from './components/AppComponent'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      value: '',
      valueDec: ''
    }
  }
    
  render(){
    return(
      <AppComponent />
    )
  }
}