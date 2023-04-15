import { useRef, useState } from "react";
import { TextInput, View } from "react-native";

import { Input } from "../../../../../components/Input";

interface Moviment {
  establishment: string;
  date: string;
  category: string;
  value: string;
}

import styles from "./styles";

export function Form() {
  const initialMoviment = {
    establishment: "",
    date: "",
    category: "",
    value: "",
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
    </View>
  );
}
