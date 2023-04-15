import { Alert, View } from "react-native";

import { Modal } from "../../../../components/Modal";

interface MovimentModalProps {
  modalVisible: boolean;
  toggleModal: () => void;
}

import { Form } from "./Form";
import styles from "./styles";

export function MovimentModal({
  modalVisible,
  toggleModal,
}: MovimentModalProps) {
  const handleSubmit = () => {
    Alert.alert("Cadastrar");
  };

  return (
    <Modal
      modalVisible={modalVisible}
      buttonTitle="Criar"
      headerTitle="Cadastrar Movimentação"
      onClose={toggleModal}
      onAction={handleSubmit}
    >
      <View style={styles.container}>
        <Form />
      </View>
    </Modal>
  );
}
