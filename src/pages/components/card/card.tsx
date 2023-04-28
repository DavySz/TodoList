import { Checkbox } from "../checkbox/checkbox";
import { Container, Label, Wrapper, IconWrapper } from "./card.styles";
import { Trash } from "@phosphor-icons/react";

interface ICard {
  title: string;
  isSelected: boolean;
  deleteCard: () => void;
  selectCard: () => void;
}

export function Card({ isSelected, title, deleteCard, selectCard }: ICard) {
  return (
    <Container>
      <Wrapper onClick={selectCard}>
        <Checkbox isSelected={isSelected} />
        <Label isSelected={isSelected}>{title}</Label>
      </Wrapper>
      <IconWrapper onClick={deleteCard}>
        <Trash color="#B2B2B2" weight="light" size={32} />
      </IconWrapper>
    </Container>
  );
}
