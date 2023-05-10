import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { Card } from "./components/Card";
import { Header } from "./components/Header";

export interface Card {
  id: number;
  number: string;
  surname: string;
  category: string;
  value: number;
  status: boolean;
}

import { api } from "../../services/api";
import { formatToBrazilianCurrency } from "../../utils/currency";

import styles from "./styles";

export function Home() {
  const navigation = useNavigation();

  const [hideBalances, setHideBalances] = useState(false);
  const [cards, setCards] = useState<Card[]>([]);

  const availableValue = cards.reduce(
    (accumulator, currentValue) => accumulator + currentValue.value,
    0
  );

  const toggleBalances = () => {
    setHideBalances(!hideBalances);
  };

  const handleCardDetails = (cardId: number) => {
    navigation.navigate("cardDetails", {
      cardId,
    });
  };

  const handleExtract = () => {
    navigation.navigate("extract");
  };

  const getAllCards = async () => {
    try {
      const { data } = await api.get<Card[]>("cards");

      setCards(data);
    } catch (error) {
      Alert.alert("Erro ao carregar os cartões");
    }
  };

  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Header />

      <Text style={styles.balanceAvailable}>
        {`Você possui ${
          hideBalances ? "* * *" : formatToBrazilianCurrency(availableValue)
        } disponível no seu cartão.`}
      </Text>
      <TouchableOpacity style={styles.seeExtractButton} onPress={handleExtract}>
        <Text style={styles.seeExtractTitle}>Ver meu extrato</Text>
        <Ionicons name="ios-arrow-forward" size={30} color="#5D5FEF" />
      </TouchableOpacity>
      <View style={styles.balances}>
        <Text style={styles.balancesText}>Saldos</Text>
        <TouchableOpacity onPress={toggleBalances}>
          <Ionicons
            name={hideBalances ? "md-eye" : "md-eye-off"}
            size={30}
            color="#5D5FEF"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.cardsList}>
        {cards.map((item, _) => (
          <Card
            key={item.id}
            {...item}
            hideBalance={hideBalances}
            onPress={() => handleCardDetails(item.id)}
          />
        ))}
      </View>
    </ScrollView>
  );
}
