import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Olá! 👋</Text>

        <Text style={styles.subtitle}>
          O que você quer comer hoje?
        </Text>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/restaurante")}
        >
          <View style={styles.imagePlaceholder}>
            <Text style={styles.imageText}>🍔</Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.restaurantName}>
              Burger House
            </Text>

            <Text style={styles.category}>
              Hambúrguer • Lanches
            </Text>

            <Text style={styles.rating}>
              ⭐ 4.8 • 30-40 min
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.bottomMenu}>
        <Text style={styles.menuItem}>🏠 Home</Text>

        <TouchableOpacity
          onPress={() => router.push("/carrinho")}
        >
          <Text style={styles.menuItem}>🛒 Carrinho</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/perfil")}
        >
          <Text style={styles.menuItem}>👤 Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 60,
    marginHorizontal: 20,
  },

  subtitle: {
    fontSize: 18,
    marginHorizontal: 20,
    marginTop: 8,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#ffffff",
    marginHorizontal: 20,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
  },

  imagePlaceholder: {
    height: 160,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eeeeee",
  },

  imageText: {
    fontSize: 70,
  },

  cardContent: {
    padding: 15,
  },

  restaurantName: {
    fontSize: 20,
    fontWeight: "bold",
  },

  category: {
    fontSize: 15,
    marginTop: 5,
  },

  rating: {
    fontSize: 14,
    marginTop: 8,
  },

  bottomMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 18,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
  },

  menuItem: {
    fontSize: 14,
  },
});