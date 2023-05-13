import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

import { Button } from "../../components/Button";
import { EmptyList } from "../../components/EmptyList";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { MovimentItem } from "./components/MovimentItem";
import { MovimentModal } from "./components/MovimentModal";

import { api } from "../../services/api";
export interface MovimentsData {
  id: number;
  establishment: string;
  date: string;
  value: string;
}

interface MovimentsParams {
  cardId: string;
}

import styles from "./styles";

export function Moviments() {
  const route = useRoute();
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [moviments, setMoviments] = useState<MovimentsData[]>([]);

  const { cardId } = route.params as MovimentsParams;

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const filteredMoviments =
    search.length > 0
      ? moviments.filter((movement) =>
          movement.establishment.toUpperCase().includes(search.toUpperCase())
        )
      : [];

  const ItemSeparator = () => <View style={styles.separator} />;

  const getAllMoviments = async () => {
    try {
      const { data } = await api.get<MovimentsData[]>(
        `moviments?cardId=${cardId}`
      );

      setMoviments(data);
    } catch (error) {
      throw new Error(`Erro ao buscar as movimentações: ${error.message}`);
    }
  };

  useEffect(() => {
    getAllMoviments();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Movimentações" />
      <View style={styles.searchContainer}>
        <Search
          placeholder="Pesquisaras..."
          autoCapitalize="none"
          value={search}
          onChangeText={(text: string) => setSearch(text)}
        />
      </View>
      <View style={styles.movimentsList}>
        {search.length > 0 ? (
          <FlatList
            data={filteredMoviments}
            renderItem={({ item }) => (
              <MovimentItem key={item.id} item={item} />
            )}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={ItemSeparator}
            ListEmptyComponent={() => <EmptyList />}
          />
        ) : (
          <FlatList
            data={moviments}
            renderItem={({ item }) => (
              <MovimentItem key={item.id} item={item} />
            )}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={ItemSeparator}
            ListEmptyComponent={() => <EmptyList />}
          />
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Cadastrar" onPress={toggleModal} />
      </View>
      <MovimentModal
        cardId={cardId}
        modalVisible={modalVisible}
        toggleModal={toggleModal}
        getAllMoviments={getAllMoviments}
      />
    </View>
  );
}
