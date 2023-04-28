import { useState } from "react";
import { Card } from "../components/card/card";
import { Header } from "../components/header/header";
import { Input } from "../components/input/input";
import { Container, Content, InputWrapper } from "./home.styles";
import { faker } from "@faker-js/faker";

interface ICardsState {
  id: string;
  title: string;
  isSelected: boolean;
}

export function Home() {
  const [cards, setCards] = useState<ICardsState[]>([]);

  function renderCards() {
    return cards.map(({ isSelected, title, id }) => {
      return (
        <Card
          selectCard={() => selectCard(id)}
          deleteCard={() => deleteCard(id)}
          isSelected={isSelected}
          title={title}
          key={id}
        />
      );
    });
  }

  function createNewCard(title: string) {
    const card: ICardsState = {
      title: title,
      isSelected: false,
      id: faker.datatype.uuid(),
    };

    setCards((previous) => [...previous, card]);
  }

  function deleteCard(id: string) {
    const newArrayOfCards = cards.filter((card) => card.id !== id);
    setCards(newArrayOfCards);
  }

  function selectCard(id: string) {
    const cardsCopy = cards.slice();

    const objectSelected = cardsCopy.find(
      (card) => card.id === id
    ) as ICardsState;

    if (objectSelected.isSelected === true) {
      objectSelected.isSelected = false;
    } else {
      objectSelected.isSelected = true;
    }

    const updatedCards = cardsCopy.map((card) =>
      card.id === id ? objectSelected : card
    );

    setCards(updatedCards);
  }

  return (
    <Container>
      <Header />

      <Content>
        <InputWrapper>
          <Input onClick={createNewCard} />
        </InputWrapper>
        {renderCards()}
      </Content>
    </Container>
  );
}
