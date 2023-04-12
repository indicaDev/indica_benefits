import { Ionicons } from "@expo/vector-icons";
import { PropsWithChildren } from "react";
import { Modal as ModalContainer, Pressable, Text, View } from "react-native";

import { Button } from "../Button";

interface ModalProps {
  modalVisible: boolean;
  headerTitle: string;
  buttonTitle: string;
  onClose: () => void;
  onAction: () => void;
}

import styles from "./styles";

export function Modal({
  modalVisible,
  headerTitle,
  buttonTitle,
  onClose,
  onAction,
  children,
}: PropsWithChildren<ModalProps>) {
  return (
    <ModalContainer
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <View />
            <Text style={styles.headerTitle}>{headerTitle}</Text>
            <Pressable onPress={onClose}>
              <Ionicons name="close" size={30} color="#BDBDBD" />
            </Pressable>
          </View>
          <View>{children}</View>
          <View style={styles.buttonContainer}>
            <Button title={buttonTitle} onPress={onAction} />
          </View>
        </View>
      </View>
    </ModalContainer>
  );
}
