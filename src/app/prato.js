import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { router } from "expo-router";

export default function Prato() {
  function adicionarCarrinho() {
    router.push("/carrinho");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backText}>← Voltar</Text>
      </TouchableOpacity>

      <View style={styles.image}>
        <Text style={styles.emoji}>🍔</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>
          Classic Burger
        </Text>

        <Text style={styles.price}>
          R$ 29,90
        </Text>

        <Text style={styles.description}>
          Hambúrguer artesanal preparado com carne,
          queijo, alface, tomate e molho especial
          da casa.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={adicionarCarrinho}
        >
          <Text style={styles.buttonText}>
            Adicionar ao carrinho
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  backButton: {
    marginTop: 55,
    marginLeft: 20,
  },

  backText: {
    fontSize: 17,
  },

  image: {
    height: 300,
    marginTop: 20,
    backgroundColor: "#eeeeee",
    justifyContent: "center",
    alignItems: "center",
  },

  emoji: {
    fontSize: 120,
  },

  content: {
    padding: 25,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
  },

  price: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 20,
  },

  button: {
    backgroundColor: "#e63946",
    padding: 17,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "bold",
  },
});