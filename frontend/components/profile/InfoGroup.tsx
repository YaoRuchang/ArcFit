import { View, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import React from "react";


interface InfoGroupProps {
  groupName: string;
  children: React.ReactNode;
};

export default function InfoGroup({ groupName, children }: InfoGroupProps) {
  return (
    <View style={styles.container}>
      <ThemedText type="subtitle" style={styles.groupName}>
        {groupName}
      </ThemedText>
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  groupName: {
    marginBottom: 5,
  },
  content: {
    marginTop: 5,
  },
});
