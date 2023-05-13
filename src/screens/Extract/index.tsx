import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

import { EmptyList } from "../../components/EmptyList";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { ExtractItem } from "./components/ExtractItem";

import { api } from "../../services/api";

export interface ExtractsData {
  id: number;
  establishment: string;
  date: string;
  value: string;
}

import styles from "./styles";

export function Extract() {
  const [search, setSearch] = useState("");
  const [extracts, setExtracts] = useState<ExtractsData[]>([]);

  const filteredExtracts =
    search.length > 0
      ? extracts.filter((movement) =>
          movement.establishment.toUpperCase().includes(search.toUpperCase())
        )
      : [];

  const ItemSeparator = () => <View style={styles.separator} />;

  const getAllExtracts = async () => {
    try {
      const { data } = await api.get("moviments");

      setExtracts(data);
    } catch (error) {
      throw new Error(`Erro ao buscar as movimentações: ${error.message}`);
    }
  };

  useEffect(() => {
    getAllExtracts();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Extrato" />
      <View style={styles.searchContainer}>
        <Search
          placeholder="Pesquisar..."
          autoCapitalize="none"
          value={search}
          onChangeText={(text: string) => setSearch(text)}
        />
      </View>
      <View style={styles.extractList}>
        {search.length > 0 ? (
          <FlatList
            data={filteredExtracts}
            renderItem={({ item }) => <ExtractItem key={item.id} item={item} />}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={ItemSeparator}
            ListEmptyComponent={() => <EmptyList />}
          />
        ) : (
          <FlatList
            data={extracts}
            renderItem={({ item }) => <ExtractItem key={item.id} item={item} />}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={ItemSeparator}
            ListEmptyComponent={() => <EmptyList />}
          />
        )}
      </View>
    </View>
  );
}
