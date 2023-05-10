import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert, View } from "react-native";

import { Header } from "../../components/Header";
import { Card } from "../Home";
import { ActionCard } from "./components/ActionCard";
import { CardInfo } from "./components/CardInfo";

import { httpStatus } from "../../constants/httpStatus";
import { api } from "../../services/api";

import styles from "./styles";

interface CardDetailsParams {
  cardId: string;
}

export function CardDetails() {
  const route = useRoute();
  const [cards, setCards] = useState<Card>();

  const { cardId } = route.params as CardDetailsParams;

  const handleToggleCard = async () => {
    if (!cards) {
      return Alert.alert("Cartão inválido!");
    }

    try {
      const { status } = await api.patch(`cards/${cardId}`, {
        status: !cards.status,
      });

      if (status === httpStatus.CREATED || status === httpStatus.SUCCESS) {
        setCards((prevState) => {
          return {
            ...prevState,
            status: !prevState.status,
          };
        });
      }
    } catch (error) {
      throw new Error(`Erro ao alterar o status do cartão: ${error.message}`);
    }
  };

  const fetchCardById = async () => {
    try {
      const { data } = await api.get<Card>(`cards/${cardId}`);

      setCards(data);
    } catch (error) {
      throw new Error(
        `Erro ao buscar o cartão com id ${cardId}: ${error.message}`
      );
    }
  };

  useEffect(() => {
    fetchCardById();
  }, []);

  if (!cards) return;

  return (
    <View style={styles.container}>
      <Header title="Detalhes" />

      <View style={styles.infoBackground}>
        <CardInfo card={cards} />
      </View>

      <View style={styles.actionCard}>
        <ActionCard
          icon="lock-closed"
          title="Bloquear"
          isActive={cards.status}
          onPress={handleToggleCard}
        />
        <ActionCard
          icon="lock-open"
          title="Desbloquear"
          isActive={!cards.status}
          onPress={handleToggleCard}
        />
      </View>
    </View>
  );
}
