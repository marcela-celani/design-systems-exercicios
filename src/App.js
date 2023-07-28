import { ChakraProvider } from "@chakra-ui/react";
import Pricing from "./Components/Card";
import { useState } from "react";
import styled from "styled-components";

function App() {

  const [db, setDb] = useState(
  [ {
      name: 'Plano Basic',
      price: 69,
      list: ['Vacinas básicas', '03 Consultas veterinárias'],
      cor: '#718096'
    },
    {
      name: 'Plano Standard',
      price: 89,
      list: ['Vacinas básicas', '05 Consultas veterinárias', 'Internação'],
      cor: '#2D3748'
    },
    {
      name: 'Plano Ultra',
      price: 99,
      list: ['Todas as vacinas', 'Consultas veterinárias ilimitadas', 'Cirurgias Gerais', 'Internação'],
      cor: '#171923'
    }
  ])



  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0px 100px;
  `
  const Title = styled.h1`
  align-items: center;
  text-align: center;
  font-size: 60px;
  margin: 80px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: 600;

  span {
    color: #38A169;
    font-weight: 800;
    text-decoration: underline;
  }
  `
  

  return (
    <ChakraProvider>
        <Title>Planos para o seu <span>Pet</span></Title>
      <Container>
        {db.map((item)=>{
          return <Pricing db={item}/>
        })}
      </Container>
    </ChakraProvider>
  );
}

export default App;
