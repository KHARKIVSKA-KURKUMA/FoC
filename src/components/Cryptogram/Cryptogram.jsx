import { useState } from "react";
import CryptoJS from "crypto-js";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  Container,
  Title,
  EncryptedText,
  DecryptedText,
  FieldWrap,
  Description,
  Headline,
  ButtonsWrap,
} from "./Cryptogram.styled";

const Cryptogram = () => {
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const encryptText = () => {
    const encrypted = CryptoJS.DES.encrypt(text, key).toString();
    setEncryptedText(encrypted);
  };

  const decryptText = () => {
    setText(encryptedText);
    const decrypted = CryptoJS.DES.decrypt(encryptedText, key).toString(
      CryptoJS.enc.Utf8
    );
    setDecryptedText(decrypted);
  };

  const resetFields = () => {
    setText("");
    setKey("");
    setDecryptedText("");
    setEncryptedText("");
  };

  return (
    <Container>
      <Title>DES Encryption</Title>
      <FieldWrap>
        <TextField
          label="Enter text:"
          variant="outlined"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <TextField
          label="Enter key:"
          variant="outlined"
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
      </FieldWrap>
      <ButtonsWrap direction="row" spacing={1}>
        <Button
          onClick={encryptText}
          disabled={!text || !key}
          variant="outlined"
        >
          Encrypt
        </Button>
        <Button
          onClick={decryptText}
          disabled={!text || !key || !encryptedText}
          variant="outlined"
        >
          Decrypt
        </Button>
        <Button
          onClick={resetFields}
          variant="outlined"
          disabled={!text && !key}
        >
          Reset
        </Button>
      </ButtonsWrap>
      <EncryptedText>
        <Headline>Encrypted Text:</Headline>
        <Description>{encryptedText}</Description>
      </EncryptedText>
      <DecryptedText>
        <Headline>Decrypted Text:</Headline>
        <Description>{decryptedText}</Description>
      </DecryptedText>
    </Container>
  );
};

export default Cryptogram;
