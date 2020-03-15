import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  text-align: center;
  margin: 0 auto 0 auto;
`
export const Title = styled.h1`
  font-size: 1em;
`
export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => (
    props.inputColor || "palevioletred"
  )};
  background: white;
  border: solid 0.1em;
  border-radius: 3px;
`