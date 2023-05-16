import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

import { EmptyList } from "../../components/EmptyList";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { PartnerItem } from "./components/PartnerItem";

import { api } from "../../services/api";

export interface PartnersData {
  id: number;
  establishment: string;
  category: string;
}

import { ActivityIndicator } from "../../components/ActivityIndicator";
import styles from "./styles";

export function Partners() {
  const [search, setSearch] = useState("");
  const [partners, setPartners] = useState<PartnersData[]>([]);
  const [loading, setLoading] = useState(true);

  const filteredPartners =
    search.length > 0
      ? partners.filter((movement) =>
          movement.establishment.toUpperCase().includes(search.toUpperCase())
        )
      : [];

  const ItemSeparator = () => <View style={styles.separator} />;

  // IIFE - Immediately Invoked Function Expression
  useEffect(() => {
    (async () => {
      const { data } = await api.get<PartnersData[]>("partners");
      setPartners(data);
      setLoading(false);
    })();
  }, []);

  if (loading)
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color="#5D5FEF" size="large" />
      </View>
    );

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
