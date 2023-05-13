import { View } from "react-native";

import { Modal } from "../../../../components/Modal";

interface MovimentModalProps {
  modalVisible: boolean;
  cardId: string;
  toggleModal: () => void;
  getAllMoviments: () => void;
}

import { Form } from "./Form";
import styles from "./styles";

export function MovimentModal({
  modalVisible,
  cardId,
  toggleModal,
  getAllMoviments,
}: MovimentModalProps) {
  return (
    <Modal
      modalVisible={modalVisible}
      headerTitle="Cadastrar Movimentação"
      onClose={toggleModal}
    >
      <View style={styles.container}>
        <Form cardId={cardId} getAllMoviments={getAllMoviments} />
      </View>
    </Modal>
  );
}
