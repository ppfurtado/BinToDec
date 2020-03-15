import React from 'react'
import { Container, Title, Input, Button } from './style'

const AppComponet = ( {handleClick, handleChange, valueInputDec} ) => (
  <Container>
    <Title>Binary to Decimal</Title>
    <label htmlFor="binario">Binario:</label><Input onChange={ handleChange } />
    <label htmlFor="decimal">Decimal:</label><Input value={valueInputDec} disabled={true} />
    <Button onClick={ handleClick }>Converter</Button>

  </Container>

)

export default AppComponet