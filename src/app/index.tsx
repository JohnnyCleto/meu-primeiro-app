import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Login() {
  function entrar() {
    router.replace("/home");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>FoodGo</Text>

      <Text style={styles.subtitle}>
        Seu pedido, do seu jeito.
      </Text>

      <TouchableOpacity style={styles.button} onPress={entrar}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#ffffff",
  },

  logo: {
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    marginBottom: 40,
  },

  button: {
    width: "80%",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#e63946",
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});