import { useEffect, useState } from "react";
import { Alert, View } from "react-native";

import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Select } from "../../../../components/Select";

import { api } from "../../../../services/api";

interface CardResponse {
  label: string;
  value: number;
}

interface CardData {
  number: string;
  surname: string;
  category: string;
  value: string;
  status: boolean;
  id: number;
}

interface CardSelect {
  selectedCard: string;
  selectedValue: string;
}

import styles from "./styles";

export function Form() {
  const initialCard: CardSelect = {
    selectedCard: "",
    selectedValue: "",
  };

  const [selectedCard, setSelectedCard] = useState(initialCard);
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState<CardResponse[]>([]);

  const handleChanges = (name: keyof CardSelect, value: string) => {
    setSelectedCard({ ...selectedCard, [name]: value });
  };

  const resetValues = () => {
    setSelectedCard(initialCard);
  };

  const handleSubmit = async () => {
    if (!selectedCard.selectedCard) {
      return Alert.alert("Selecione um cartão!");
    }

    if (!selectedCard.selectedValue) {
      return Alert.alert("Selecione um valor!");
    }

    setIsLoading(true);

    try {
      const { data: card } = await api.get<CardData[]>("cards", {
        params: {
          id: selectedCard.selectedCard,
        },
      });

      if (card.length === 0) {
        throw new Error("Cartão não encontrado!");
      }

      const updatedCard = {
        ...card[0],
        value: card[0].value + Number(selectedCard.selectedValue),
      };

      await api.put(`cards/${selectedCard.selectedCard}`, updatedCard);
      resetValues();
      Alert.alert("Cartão recarregado com sucesso!");
    } catch (error) {
      console.error("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterSurnameAndId = (cardList: CardData[]): CardResponse[] => {
    return cardList.map((obj) => ({ label: obj.surname, value: obj.id }));
  };

  const getAllCards = async () => {
    try {
      const { data } = await api.get<CardData[]>("/cards");
      const filteredCards = filterSurnameAndId(data);
      setCards(filteredCards);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <View style={styles.form}>
      <View style={styles.input}>
        <Select
          name="Cartão"
          placeholder="Selecione o cartão"
          items={cards}
          value={selectedCard.selectedCard}
          onValueChange={(text) => handleChanges("selectedCard", text)}
        />
      </View>
      <View style={styles.input}>
        <Input
          name="Valor"
          placeholder="Digite o valor"
          autoCapitalize="words"
          keyboardType="numeric"
          value={selectedCard.selectedValue}
          onChangeText={(value) => handleChanges("selectedValue", value)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Recarregar"
          onPress={handleSubmit}
          isLoading={isLoading}
        />
      </View>
    </View>
  );
}
