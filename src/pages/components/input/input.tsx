import { useState } from "react";
import { Button, Container, InputStyled } from "./input.styles";
import { CaretRight } from "@phosphor-icons/react";

interface IInput {
  onClick: (title: string) => void;
}

export function Input({ onClick }: IInput) {
  const [text, setText] = useState("");

  return (
    <Container>
      <InputStyled
        placeholder="Adicione uma tarefa"
        onChange={(event) => setText(event.target.value)}
      />
      <Button onClick={() => onClick(text)} disabled={text === ""}>
        <CaretRight color="#B2B2B2" weight="light" size={24} />
      </Button>
    </Container>
  );
}
