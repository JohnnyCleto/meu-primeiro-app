import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function Perfil() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Meu perfil</Text>

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>👤</Text>
      </View>

      <Text style={styles.name}>
        João
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Dados pessoais
        </Text>

        <Text style={styles.info}>
          Nome: João
        </Text>

        <Text style={styles.info}>
          E-mail: joao@email.com
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Endereço
        </Text>

        <Text style={styles.info}>
          Rua Principal, 100
        </Text>

        <Text style={styles.info}>
          Maricá - RJ
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Pedidos anteriores
        </Text>

        <Text style={styles.info}>
          🍔 Classic Burger — R$ 29,90
        </Text>

        <Text style={styles.info}>
          🍟 Batata Crocante — R$ 14,90
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
  },

  avatarText: {
    fontSize: 45,
  },

  name: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },

  section: {
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 12,
    marginTop: 20,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 12,
  },

  info: {
    fontSize: 15,
    marginTop: 6,
  },
});