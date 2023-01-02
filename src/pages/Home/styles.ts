import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;

  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 0.5rem;

  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
  color: ${(props) => props.theme['gray-100']};
`

export const CountdownContainer = styled.div`
  display: flex;

  font-size: 10rem;
  line-height: 8rem;
  font-family: 'Roboto Mono', monospace;
  color: ${(props) => props.theme['gray-100']};
  gap: 1rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;

  width: 4rem;
  color: ${(props) => props.theme['green-500']};
  overflow: hidden;
`
