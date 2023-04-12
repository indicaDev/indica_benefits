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

  const filteredMoviments =
    search.length > 0
      ? moviments.filter((movement) =>
          movement.establishement.toUpperCase().includes(search.toUpperCase())
        )
      : [];

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
        <Button title="Cadastrar" onPress={() => {}} />
      </View>
    </View>
  );
}
