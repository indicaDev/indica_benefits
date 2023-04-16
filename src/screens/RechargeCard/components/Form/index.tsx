import { useState } from "react";
import { Alert, View } from "react-native";

import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Select } from "../../../../components/Select";

import { CARDS } from "../../constants";

interface CardData {
  selectedCard: string;
  selectedValue: string;
}

import styles from "./styles";

export function Form() {
  const initialCard: CardData = {
    selectedCard: "",
    selectedValue: "",
  };

  const [selectedCard, setSelectedCard] = useState(initialCard);

  const handleChanges = (name: keyof CardData, value: string) => {
    setSelectedCard({ ...selectedCard, [name]: value });
  };

  const resetValues = () => {
    setSelectedCard(initialCard);
  };

  const handleSubmit = () => {
    Alert.alert("Cartão recarregado com sucesso!");
    resetValues();
  };

  return (
    <View style={styles.form}>
      <View style={styles.input}>
        <Select
          name="Cartão"
          placeholder="Selecione o cartão"
          items={CARDS}
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
        <Button title="Recarregar" onPress={handleSubmit} />
      </View>
    </View>
  );
}
