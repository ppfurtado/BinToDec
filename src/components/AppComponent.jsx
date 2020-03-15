import React from 'react'
import { Container, Title, Input, Button } from './style'

const AppComponet = ( {handleClick, handleChange, valueInputBin, valueInputDec} ) => (
  <Container>
    <Title>Binary to Decimal</Title>
    <label htmlFor="binario">Binario:</label><Input value={valueInputBin} onChange={ handleChange } placeholder="Entre com um Binário" />
    <label htmlFor="decimal">Decimal:</label><Input value={valueInputDec} disabled={true} />
    <Button onClick={ handleClick }>Converter</Button>

  </Container>

)

export default AppComponet