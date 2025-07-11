import { useEffect, useState } from "react";
import { Link } from "expo-router";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const AboutButton = () => {
  return (
    <Link href="/about" asChild>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Course Information</Text>
      </TouchableOpacity>
    </Link>
  );
};

export default AboutButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
