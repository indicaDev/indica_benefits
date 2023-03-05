import { useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { Header } from "./components/Header";
import { Card } from "./components/Card";

import styles from "./styles";

export function Home() {
  const navigation = useNavigation();

  const [hideBalances, setHideBalances] = useState(false);

  const CARDS = [
    {
      id: "1",
      title: "Alimentação",
      value: "400,50",
      categoryIcon: "cart-outline" as keyof typeof Ionicons.glyphMap,
      isActive: true,
    },
    {
      id: "2",
      title: "Refeição",
      value: "350,00",
      categoryIcon: "cart-outline" as keyof typeof Ionicons.glyphMap,
      isActive: false,
    },
  ];

  const toggleBalances = () => {
    setHideBalances(!hideBalances);
  };

  const handleCardDetails = (cardId: string) => {
    navigation.navigate("cardDetails", {
      cardId,
    });
  };

  return (
    <ScrollView style={styles.container}>
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
            onPress={() => handleCardDetails(item.id)}
          />
        ))}
      </View>
    </ScrollView>
  );
}
