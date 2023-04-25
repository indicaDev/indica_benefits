import { useState } from "react";
import { Alert, View } from "react-native";

import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Select } from "../../../../components/Select";

import { CATEGORIES } from "../../constants";

import { httpStatus } from "../../../../constants/httpStatus";
import { api } from "../../../../services/api";

interface CardData {
  number: string;
  surname: string;
  category: string;
  value: number;
  status: boolean;
}

import styles from "./styles";

export function Form() {
  const initialCardInfo: CardData = {
    number: "",
    surname: "",
    category: "",
    value: 0,
    status: true,
  };

  const [card, setCard] = useState(initialCardInfo);

  const handleChanges = (name: keyof CardData, value: string) => {
    setCard({ ...card, [name]: value });
  };

  const resetValues = () => {
    setCard(initialCardInfo);
  };

  const handleSubmit = async () => {
    if (!card.number || !card.surname || !card.category) {
      Alert.alert("Preencha todos os campos!");
      return;
    }

    try {
      const { status } = await api.post<CardData>("/cards", card);

      if (status === httpStatus.SUCCESS || status === httpStatus.CREATED) {
        Alert.alert("Cartão cadastrado com sucesso!");
      }
    } catch (error) {
      Alert.alert("Erro ao cadastrar o cartão!");
    } finally {
      resetValues();
    }
  };

  return (
    <View style={styles.form}>
      <View style={styles.input}>
        <Input
          name="Número"
          placeholder="Digite o número do cartão"
          autoCapitalize="words"
          keyboardType="numeric"
          value={card?.number}
          onChangeText={(value) => handleChanges("number", value)}
        />
      </View>
      <View style={styles.input}>
        <Input
          name="Apelido"
          placeholder="Digite um apelido"
          autoCapitalize="none"
          keyboardType="default"
          autoCorrect={false}
          value={card?.surname}
          onChangeText={(value) => handleChanges("surname", value)}
        />
      </View>
      <View style={styles.input}>
        <Select
          name="Categoria"
          placeholder="Selecione a categoria"
          items={CATEGORIES}
          value={card?.category}
          onValueChange={(text) => handleChanges("category", text)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Cadastrar" onPress={handleSubmit} />
      </View>
    </View>
  );
}
