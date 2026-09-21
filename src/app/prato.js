import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function Prato() {
  function adicionarCarrinho() {
    router.push("/carrinho");
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollArea}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <Image
            source={require("../../assets/images/burger1.jpeg")}
            style={styles.heroImage}
          />

          <SafeAreaView edges={["top"]} style={styles.heroTopRow}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <Text style={styles.backText}>← Voltar</Text>
            </TouchableOpacity>

            <View style={styles.heroActions}>
              <TouchableOpacity style={styles.heroIconButton}>
                <Text style={styles.heroIconText}>♡</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.heroIconButton}>
                <Text style={styles.heroIconText}>⇪</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>

          <View style={styles.heroBadge}>
            <Text style={styles.heroBadgeText}>
              👑 Mais pedido
            </Text>
          </View>

          <View style={styles.heroDots}>
            <View style={[styles.dot, styles.dotActive]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>
              Classic Burger
            </Text>

            <View style={styles.ratingBadge}>
              <Text style={styles.ratingBadgeText}>
                ⭐ 4.8 (1,2k)
              </Text>
            </View>
          </View>

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
              🛒 Adicionar ao carrinho
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  scrollArea: {
    flex: 1,
  },

  hero: {
    width: "100%",
    height: 340,
    backgroundColor: "#eeeeee",
  },

  heroImage: {
    width: "100%",
    height: "100%",
  },

  heroTopRow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 10,
  },

  backButton: {
    backgroundColor: "rgba(255,255,255,0.9)",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
  },

  backText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1a1a1a",
  },

  heroActions: {
    flexDirection: "row",
    gap: 10,
  },

  heroIconButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "rgba(255,255,255,0.9)",
    justifyContent: "center",
    alignItems: "center",
  },

  heroIconText: {
    fontSize: 17,
    color: "#1a1a1a",
  },

  heroBadge: {
    position: "absolute",
    top: 70,
    left: 16,
    backgroundColor: "#e63946",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },

  heroBadgeText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },

  heroDots: {
    position: "absolute",
    bottom: 14,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "rgba(255,255,255,0.6)",
  },

  dotActive: {
    backgroundColor: "#ffffff",
    width: 16,
  },

  content: {
    padding: 25,
  },

  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  title: {
    flex: 1,
    fontSize: 26,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginRight: 10,
  },

  ratingBadge: {
    backgroundColor: "#fbe2e2",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
  },

  ratingBadgeText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#1a1a1a",
  },

  price: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    color: "#e63946",
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 20,
    color: "#555555",
  },

  button: {
    backgroundColor: "#e63946",
    padding: 17,
    borderRadius: 30,
    marginTop: 30,
    alignItems: "center",
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "bold",
  },
});
