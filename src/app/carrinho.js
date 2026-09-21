import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { router } from "expo-router";

export default function Carrinho() {
  function finalizarPedido() {
    alert("Pedido realizado com sucesso!");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu carrinho</Text>

      <View style={styles.item}>
        <View>
          <Text style={styles.itemName}>
            Classic Burger
          </Text>

          <Text style={styles.quantity}>
            Quantidade: 1
          </Text>
        </View>

        <Text style={styles.price}>
          R$ 29,90
        </Text>
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>
          Total
        </Text>

        <Text style={styles.total}>
          R$ 29,90
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={finalizarPedido}
      >
        <Text style={styles.buttonText}>
          Finalizar pedido
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push("/home")}
      >
        <Text style={styles.backText}>
          Continuar comprando
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 25,
  },

  item: {
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  itemName: {
    fontSize: 18,
    fontWeight: "bold",
  },

  quantity: {
    marginTop: 6,
    fontSize: 14,
  },

  price: {
    fontSize: 17,
    fontWeight: "bold",
  },

  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },

  totalLabel: {
    fontSize: 20,
    fontWeight: "bold",
  },

  total: {
    fontSize: 20,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#e63946",
    padding: 17,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "bold",
  },

  backButton: {
    alignItems: "center",
    marginTop: 20,
  },

  backText: {
    fontSize: 16,
  },
});