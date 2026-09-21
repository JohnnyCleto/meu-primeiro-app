import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function entrar() {
    router.replace("/home");
  }

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Image
          source={require("../../assets/images/burger2.jpeg")}
          style={styles.heroImage}
        />

        <View style={styles.heroOverlay} />

        <Text style={styles.logo}>FoodGo</Text>

        <Text style={styles.tagline}>Seu pedido, do seu jeito.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.welcome}>Bem-vindo de volta!</Text>

        <Text style={styles.welcomeSubtitle}>
          Entre para continuar seu pedido
        </Text>

        <Text style={styles.label}>E-mail</Text>

        <TextInput
          style={styles.input}
          placeholder="seuemail@exemplo.com"
          placeholderTextColor="#999999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha</Text>

        <TextInput
          style={styles.input}
          placeholder="Sua senha"
          placeholderTextColor="#999999"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>
            Esqueceu a senha?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={entrar}>
          <Text style={styles.buttonText}>Entrar</Text>
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

  hero: {
    height: 300,
    backgroundColor: "#b3212b",
    justifyContent: "center",
    alignItems: "center",
  },

  heroImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(179,33,43,0.72)",
  },

  logo: {
    fontSize: 44,
    fontWeight: "bold",
    color: "#ffffff",
  },

  tagline: {
    fontSize: 16,
    color: "#fbe2e2",
    marginTop: 6,
  },

  card: {
    flex: 1,
    marginTop: -24,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 28,
  },

  welcome: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a1a",
  },

  welcomeSubtitle: {
    fontSize: 14,
    color: "#777777",
    marginTop: 4,
    marginBottom: 26,
  },

  label: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 8,
  },

  input: {
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 15,
    color: "#1a1a1a",
    marginBottom: 18,
  },

  forgotPassword: {
    fontSize: 13,
    color: "#e63946",
    fontWeight: "bold",
    alignSelf: "flex-end",
    marginTop: -6,
  },

  button: {
    marginTop: 28,
    padding: 17,
    borderRadius: 30,
    alignItems: "center",
    backgroundColor: "#e63946",
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
