import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

import { Header } from "../../components/Header";
import { ProfileItem } from "./components/ProfileItem";

import styles from "./styles";

export function Profile() {
  const navigation = useNavigation();

  const handlePersonalInfo = () => {
    navigation.navigate("personalInfo");
  };

  const handleRegisterCard = () => {
    navigation.navigate("registerCard");
  };

  const handleRechargeCard = () => {
    navigation.navigate("rechargeCard");
  };

  const handleGetOut = () => {
    navigation.navigate("signIn");
  };

  const data = [
    {
      id: 1,
      icon: <Ionicons name="person" size={30} color="#9796A1" />,
      desciption: "Informações pessoais",
      onPress: handleGetOut,
    },
    {
      id: 2,
      icon: <Ionicons name="card-outline" size={30} color="#9796A1" />,
      desciption: "Cadastrar cartão",
      onPress: handleRegisterCard,
    },
    {
      id: 3,
      icon: <Ionicons name="cash-outline" size={30} color="#9796A1" />,
      desciption: "Recarregar cartão",
      onPress: handleRechargeCard,
    },
    {
      id: 4,
      icon: <Ionicons name="exit-outline" size={30} color="#9796A1" />,
      desciption: "Sair",
      onPress: handleGetOut,
    },
  ];

  return (
    <View style={styles.container}>
      <Header title="Perfil" hasGoBack={false} />
      <View style={styles.perfilList}>
        {data.map((item) => (
          <ProfileItem key={item.id} {...item} />
        ))}
      </View>
    </View>
  );
}
