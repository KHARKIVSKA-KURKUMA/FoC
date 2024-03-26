import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyles";
import Cryptogram from "./components/Cryptogram/Cryptogram";

const Container = styled.div`
  background-color: #eef5ff;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Cryptogram />
    </Container>
  );
}

export default App;
