import styled from "styled-components";
import Stack from "@mui/material/Stack";

const Container = styled.div`
  min-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-family: "Rubik Scribble", system-ui;
  font-size: 40px;
`;

const EncryptedText = styled.div`
  margin-top: 20px;
`;

const DecryptedText = styled.div`
  margin-top: 20px;
`;

const Description = styled.p`
  font-family: "Montserrat", sans-serif;
`;

const Headline = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
`;

const FieldWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
  margin-bottom: 20px;
`;
const ButtonsWrap = styled(Stack)`
  display: flex;
  justify-content: center;
  Button {
    min-width: 150px;
    min-height: 50px;
  }
`;

export {
  Container,
  Title,
  EncryptedText,
  DecryptedText,
  FieldWrap,
  ButtonsWrap,
  Description,
  Headline,
};
