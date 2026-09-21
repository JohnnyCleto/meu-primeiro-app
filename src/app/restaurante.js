import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { router } from "expo-router";

export default function Restaurante() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>← Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Burger House</Text>

        <Text style={styles.description}>
          Hambúrgueres, batatas e bebidas.
        </Text>

        <Text style={styles.sectionTitle}>
          Cardápio
        </Text>

        <TouchableOpacity
          style={styles.foodCard}
          onPress={() => router.push("/prato")}
        >
          <View style={styles.foodImage}>
            <Text style={styles.foodEmoji}>🍔</Text>
          </View>

          <View style={styles.foodInfo}>
            <Text style={styles.foodName}>
              Classic Burger
            </Text>

            <Text style={styles.foodDescription}>
              Hambúrguer artesanal com queijo,
              alface e tomate.
            </Text>

            <Text style={styles.price}>
              R$ 29,90
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.foodCard}>
          <View style={styles.foodImage}>
            <Text style={styles.foodEmoji}>🍟</Text>
          </View>

          <View style={styles.foodInfo}>
            <Text style={styles.foodName}>
              Batata Crocante
            </Text>

            <Text style={styles.foodDescription}>
              Porção de batatas fritas.
            </Text>

            <Text style={styles.price}>
              R$ 14,90
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  backButton: {
    marginTop: 55,
    marginLeft: 20,
  },

  backText: {
    fontSize: 17,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 20,
  },

  description: {
    fontSize: 16,
    marginHorizontal: 20,
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 15,
  },

  foodCard: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 12,
    padding: 12,
  },

  foodImage: {
    width: 100,
    height: 100,
    backgroundColor: "#eeeeee",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  foodEmoji: {
    fontSize: 45,
  },

  foodInfo: {
    flex: 1,
    marginLeft: 12,
  },

  foodName: {
    fontSize: 18,
    fontWeight: "bold",
  },

  foodDescription: {
    fontSize: 13,
    marginTop: 5,
  },

  price: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 8,
  },
});