import React from 'react'
import { Container, Title, Input, Button } from './style'

const AppComponet = () => (
  <Container>
    <Title>Binary to Decimal</Title>
    <label htmlFor="binario">Binario:</label><Input />
    <label htmlFor="decimal">Decimal:</label><Input />
    <Button>Converter</Button>

  </Container>

)

export default AppComponet