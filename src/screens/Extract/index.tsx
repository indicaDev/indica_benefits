import { useState } from "react";
import { FlatList, View } from "react-native";

import { EmptyList } from "../../components/EmptyList";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { ExtractItem } from "./components/ExtractItem";

export interface ExtractsData {
  id: number;
  establishement: string;
  date: string;
  value: string;
}

import styles from "./styles";

export function Extract() {
  const [search, setSearch] = useState("");

  const extracts: ExtractsData[] = [
    {
      id: 1,
      establishement: "Mercado dois irmões",
      date: "10/10/2023",
      value: "100,00",
    },
    {
      id: 2,
      establishement: "Mercado principal",
      date: "10/10/2023",
      value: "100,00",
    },
    {
      id: 3,
      establishement: "Loja das crianças",
      date: "10/10/2023",
      value: "100,00",
    },
    {
      id: 4,
      establishement: "Açougue do João",
      date: "10/10/2023",
      value: "100,00",
    },
  ];

  const filteredExtracts =
    search.length > 0
      ? extracts.filter((movement) =>
          movement.establishement.toUpperCase().includes(search.toUpperCase())
        )
      : [];

  const ItemSeparator = () => <View style={styles.separator} />;

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
