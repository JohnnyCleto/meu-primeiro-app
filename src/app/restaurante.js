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

export default function Restaurante() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollArea}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <Image
            source={require("../../assets/images/burger2.jpeg")}
            style={styles.heroImage}
          />

          <SafeAreaView edges={["top"]} style={styles.heroTopRow}>
            <TouchableOpacity
              style={styles.heroIconButton}
              onPress={() => router.back()}
            >
              <Text style={styles.heroIconText}>←</Text>
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

          <View style={styles.storeNameRow}>
            <View style={styles.storeLogo}>
              <Text style={styles.storeLogoIcon}>🍔</Text>
            </View>

            <View style={styles.storeNameTextArea}>
              <Text style={styles.storeName}>Burger House</Text>

              <Text style={styles.storeSubtitle}>
                Hambúrgueres, batatas e bebidas.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.infoBar}>
          <Text style={styles.infoText}>⭐ 4.8 (1,2k)</Text>

          <Text style={styles.infoDivider}>|</Text>

          <Text style={styles.infoText}>🕐 30-45 min</Text>

          <Text style={styles.infoDivider}>|</Text>

          <Text style={styles.infoText} numberOfLines={1}>
            📍 Entrega a partir de R$ 10,00
          </Text>
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

  scrollArea: {
    flex: 1,
  },

  hero: {
    width: "100%",
    height: 280,
    backgroundColor: "#1a1a1a",
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
    paddingHorizontal: 16,
    paddingTop: 10,
  },

  heroActions: {
    flexDirection: "row",
    gap: 10,
  },

  heroIconButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },

  heroIconText: {
    fontSize: 17,
    color: "#ffffff",
  },

  storeNameRow: {
    position: "absolute",
    left: 20,
    bottom: 16,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  storeLogo: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#e63946",
    borderWidth: 2,
    borderColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },

  storeLogoIcon: {
    fontSize: 24,
  },

  storeNameTextArea: {
    flex: 1,
    minWidth: 0,
    marginLeft: 12,
  },

  storeName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
  },

  storeSubtitle: {
    fontSize: 13,
    color: "#f0f0f0",
    marginTop: 2,
  },

  infoBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
    paddingVertical: 14,
  },

  infoText: {
    fontSize: 12,
    color: "#333333",
    fontWeight: "bold",
    flexShrink: 1,
  },

  infoDivider: {
    fontSize: 12,
    color: "#cccccc",
    marginHorizontal: 8,
  },
});
