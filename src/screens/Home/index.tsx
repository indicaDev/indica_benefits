import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Header } from "./components/Header";

import styles from "./styles";
import { Card } from "./components/Card";

export function Home() {
  const [hideBalances, setHideBalances] = useState(false);

  const CARDS = [
    {
      title: "Alimentação",
      value: "400,50",
      categoryIcon: "cart-outline" as keyof typeof Ionicons.glyphMap,
      isActive: true,
    },
    {
      title: "Refeição",
      value: "350,00",
      categoryIcon: "cart-outline" as keyof typeof Ionicons.glyphMap,
      isActive: false,
    },
  ];

  const toggleBalances = () => {
    setHideBalances(!hideBalances);
  };

  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.balanceAvailable}>
        {`Você possui R$ ${
          hideBalances ? "* * *" : "700,50"
        } disponível no seu cartão.`}
      </Text>
      <TouchableOpacity
        style={styles.seeExtractButton}
        onPress={() => Alert.alert("Ver o estrato")}
      >
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
        {CARDS.map((item, index) => (
          <Card
            key={index}
            {...item}
            hideBalance={hideBalances}
            onPress={() => Alert.alert("Detalhes do card")}
          />
        ))}
      </View>
    </View>
  );
}
