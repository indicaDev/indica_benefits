import { useState } from "react";
import { FlatList, View } from "react-native";

import { Button } from "../../components/Button";
import { EmptyList } from "../../components/EmptyList";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { MovimentItem } from "./components/MovimentItem";

export interface MovimentsData {
  id: number;
  establishement: string;
  date: string;
  value: string;
}

import styles from "./styles";

export function Moviments() {
  const [search, setSearch] = useState("");

  const moviments: MovimentsData[] = [
    {
      id: 1,
      establishement: "Mercado dois irmões",
      date: "10/10/2023",
      value: "R$ 100,00",
    },
    {
      id: 2,
      establishement: "Mercado dois irmões",
      date: "10/10/2023",
      value: "R$ 100,00",
    },
    {
      id: 3,
      establishement: "Mercado dois irmões",
      date: "10/10/2023",
      value: "R$ 100,00",
    },
    {
      id: 4,
      establishement: "Mercado dois irmões",
      date: "10/10/2023",
      value: "R$ 100,00",
    },
    {
      id: 5,
      establishement: "Mercado dois irmões",
      date: "10/10/2023",
      value: "R$ 100,00",
    },
    {
      id: 6,
      establishement: "Mercado dois irmões",
      date: "10/10/2023",
      value: "R$ 100,00",
    },
    {
      id: 7,
      establishement: "Mercado dois irmões",
      date: "10/10/2023",
      value: "R$ 100,00",
    },
    {
      id: 8,
      establishement: "Mercado dois irmões",
      date: "10/10/2023",
      value: "R$ 100,00",
    },
    {
      id: 9,
      establishement: "Mercado dois irmões",
      date: "10/10/2023",
      value: "R$ 100,00",
    },
  ];

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <Header title="Movimentações" />
      <View style={styles.searchContainer}>
        <Search
          placeholder="Pesquisar..."
          autoCapitalize="none"
          value={search}
          onChangeText={(text: string) => setSearch(text)}
        />
      </View>
      <View style={styles.movimentsList}>
        <FlatList
          data={moviments}
          renderItem={({ item }) => <MovimentItem key={item.id} item={item} />}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={ItemSeparator}
          ListEmptyComponent={() => <EmptyList />}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Cadastrar" onPress={() => {}} />
      </View>
    </View>
  );
}
