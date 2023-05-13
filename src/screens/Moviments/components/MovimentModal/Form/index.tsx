import { useRef, useState } from "react";
import { Alert, TextInput, View } from "react-native";

import { Button } from "../../../../../components/Button";
import { Input } from "../../../../../components/Input";

import { httpStatus } from "../../../../../constants/httpStatus";
import { api } from "../../../../../services/api";

import { CardData } from "../../../../RechargeCard/components/Form";

interface FormProps {
  cardId: string;
  getAllMoviments: () => void;
}

interface Moviment {
  establishment: string;
  date: string;
  category: string;
  value: string;
}

import styles from "./styles";

export function Form({ cardId, getAllMoviments }: FormProps) {
  const initialMoviment = {
    establishment: "",
    date: "",
    category: "",
    value: "",
    cardId: cardId,
  };

  const [moviment, setMoviment] = useState(initialMoviment);

  const nameRef = useRef<TextInput>(null);
  const dateRef = useRef<TextInput>(null);
  const categoryRef = useRef<TextInput>(null);
  const valueRef = useRef<TextInput>(null);

  const handleChange = (name: keyof Moviment, value: string) => {
    setMoviment((prevState) => ({ ...prevState, [name]: value }));
  };

  const resetForm = () => {
    setMoviment(initialMoviment);
  };

  const payWithTheCard = async () => {
    try {
      const { data: card } = await api.get<CardData[]>("cards", {
        params: {
          id: cardId,
        },
      });

      if (cardId.length === 0) {
        throw new Error("Cartão não encontrado!");
      }
      const updatedCard: CardData = {
        ...card[0],
        value: String(Number(card[0].value) - Number(moviment.value)),
      };

      await api.put(`cards/${cardId}`, updatedCard);

      return true;
    } catch (error) {
      Alert.alert("Erro ao pagar com o cartão!");
      return false;
    }
  };

  const createPartners = async () => {
    try {
      const { status } = await api.post("partners", {
        establishment: moviment.establishment,
        category: moviment.category,
      });

      if (status === httpStatus.SUCCESS || status === httpStatus.CREATED) {
        return true;
      }
    } catch (error) {
      Alert.alert("Erro ao criar parceiros!");
      return false;
    }
  };

  const handleSubmit = async () => {
    if (
      !moviment.establishment ||
      !moviment.date ||
      !moviment.category ||
      !moviment.value
    ) {
      return Alert.alert("Preencha todos os campos!");
    }

    try {
      const { status } = await api.post("moviments", moviment);

      if (status === httpStatus.SUCCESS || status === httpStatus.CREATED) {
        if (payWithTheCard() && createPartners()) {
          getAllMoviments();
          return Alert.alert("Movimentação cadastrada com sucesso!");
        }
        return Alert.alert(
          "Ops, confira se o cadastro foi realizado corretamente!"
        );
      }
    } catch (error) {
      Alert.alert("Erro ao cadastrar a movimentação!");
    } finally {
      resetForm();
    }
  };

  return (
    <View style={styles.form}>
      <View style={styles.input}>
        <Input
          name="Nome"
          placeholder="Digite o seu nome do estabelecimento"
          autoCapitalize="words"
          keyboardType="default"
          value={moviment.establishment}
          onChangeText={(value) => handleChange("establishment", value)}
          inputRef={nameRef}
        />
      </View>
      <View style={styles.input}>
        <Input
          name="Data"
          placeholder="Selecione a data"
          autoCapitalize="none"
          keyboardType="numeric"
          value={moviment.date}
          onChangeText={(value) => handleChange("date", value)}
          inputRef={dateRef}
        />
      </View>
      <View style={styles.input}>
        <Input
          name="Categoria"
          placeholder="Digite a categoria"
          autoCapitalize="words"
          keyboardType="default"
          value={moviment.category}
          onChangeText={(value) => handleChange("category", value)}
          inputRef={categoryRef}
        />
      </View>
      <View style={styles.input}>
        <Input
          name="Valor"
          placeholder="Digite o valor"
          autoCapitalize="none"
          keyboardType="numeric"
          value={moviment.value}
          onChangeText={(value) => handleChange("value", value)}
          inputRef={valueRef}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Cadastrar" onPress={handleSubmit} />
      </View>
    </View>
  );
}
