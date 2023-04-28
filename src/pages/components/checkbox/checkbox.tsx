import { Container } from "./checkbox.styles";
import { Check } from "@phosphor-icons/react";

interface Props {
  isSelected: boolean;
}

export function Checkbox({ isSelected }: Props) {
  return (
    <Container isSelected={isSelected}>
      {isSelected && <Check color="#fff" weight="light" size={21} />}
    </Container>
  );
}
