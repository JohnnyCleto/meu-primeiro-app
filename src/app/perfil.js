import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function Perfil() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        style={styles.scrollArea}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.backArrow}>‹</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingsButton}>
            <Text style={styles.settingsIcon}>⚙️</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.pageTitle}>Meu perfil</Text>

        <Text style={styles.pageSubtitle}>
          Gerencie seus dados e preferências
        </Text>

        <TouchableOpacity style={styles.profileCard}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatar}>
              <Text style={styles.avatarEmoji}>🧑</Text>
            </View>

            <View style={styles.cameraBadge}>
              <Text style={styles.cameraIcon}>📷</Text>
            </View>
          </View>

          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>João</Text>

            <Text style={styles.profileLocation}>
              📍 Maricá - RJ
            </Text>

            <View style={styles.clientBadge}>
              <Text style={styles.clientBadgeText}>
                👑 Cliente FoodGo
              </Text>
            </View>
          </View>

          <Text style={styles.cardArrow}>›</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
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

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 10,
  },

  backArrow: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1a1a1a",
  },

  settingsButton: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },

  settingsIcon: {
    fontSize: 20,
  },

  pageTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginHorizontal: 20,
    marginTop: 4,
  },

  pageSubtitle: {
    fontSize: 14,
    color: "#777777",
    marginHorizontal: 20,
    marginTop: 4,
    marginBottom: 16,
  },

  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginHorizontal: 20,
    borderRadius: 14,
    padding: 14,
  },

  avatarWrapper: {
    width: 60,
    height: 60,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fbe2e2",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarEmoji: {
    fontSize: 28,
  },

  cameraBadge: {
    position: "absolute",
    bottom: -2,
    right: -2,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#e63946",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#ffffff",
  },

  cameraIcon: {
    fontSize: 10,
  },

  profileInfo: {
    flex: 1,
    marginLeft: 14,
  },

  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a1a1a",
  },

  profileLocation: {
    fontSize: 13,
    color: "#777777",
    marginTop: 3,
  },

  clientBadge: {
    flexDirection: "row",
    alignSelf: "flex-start",
    backgroundColor: "#fbe2e2",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginTop: 8,
  },

  clientBadgeText: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#e63946",
  },

  cardArrow: {
    fontSize: 24,
    color: "#cccccc",
    fontWeight: "bold",
  },
});
