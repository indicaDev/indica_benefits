import { useState } from "react";
import { FlatList, View } from "react-native";

import { EmptyList } from "../../components/EmptyList";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";

export interface PartnersData {
  id: number;
  establishement: string;
  category: string;
}

import { PartnerItem } from "./components/PartnerItem";
import styles from "./styles";

export function Partners() {
  const [search, setSearch] = useState("");

  const partners: PartnersData[] = [
    {
      id: 1,
      establishement: "Mercado dois irmões",
      category: "Supermercado",
    },
    {
      id: 2,
      establishement: "Mercado dois irmões",
      category: "Supermercado",
    },
    {
      id: 3,
      establishement: "Mercado dois irmões",
      category: "Supermercado",
    },
    {
      id: 4,
      establishement: "Mercado dois irmões",
      category: "Supermercado",
    },
    {
      id: 5,
      establishement: "Mercado dois irmões",
      category: "Supermercado",
    },
    {
      id: 6,
      establishement: "Mercado dois irmões",
      category: "Supermercado",
    },
  ];

  const filteredPartners =
    search.length > 0
      ? partners.filter((movement) =>
          movement.establishement.toUpperCase().includes(search.toUpperCase())
        )
      : [];

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <Header title="Parceiros" hasGoBack={false} />
      <View style={styles.searchContainer}>
        <Search
          placeholder="Pesquisar..."
          autoCapitalize="none"
          value={search}
          onChangeText={(text: string) => setSearch(text)}
        />
      </View>
      <View style={styles.partnersList}>
        {search.length > 0 ? (
          <FlatList
            data={filteredPartners}
            renderItem={({ item }) => <PartnerItem key={item.id} item={item} />}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={ItemSeparator}
            ListEmptyComponent={() => <EmptyList />}
          />
        ) : (
          <FlatList
            data={partners}
            renderItem={({ item }) => <PartnerItem key={item.id} item={item} />}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={ItemSeparator}
            ListEmptyComponent={() => <EmptyList />}
          />
        )}
      </View>
    </View>
  );
}
