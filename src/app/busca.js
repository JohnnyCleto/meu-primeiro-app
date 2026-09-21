import { useState } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const itens = [
  {
    id: "1",
    tipo: "prato",
    nome: "Classic Burger",
    subtitulo: "Burger House • Hambúrguer",
    preco: "R$ 29,90",
    imagem: require("../../assets/images/burger1.jpeg"),
    destino: "/prato",
  },

  {
    id: "2",
    tipo: "prato",
    nome: "Batata Crocante",
    subtitulo: "Burger House • Porção",
    preco: "R$ 14,90",
    imagem: require("../../assets/images/batatafrita2.jpeg"),
    destino: "/prato",
  },

  {
    id: "3",
    tipo: "prato",
    nome: "Pizza da Casa",
    subtitulo: "Pizza Bella • Pizza",
    preco: "R$ 39,90",
    imagem: require("../../assets/images/pizza2.jpeg"),
    destino: "/prato",
  },

  {
    id: "4",
    tipo: "restaurante",
    nome: "Burger House",
    subtitulo: "Hambúrguer • Lanches",
    extra: "⭐ 4.8 • 30-40 min",
    imagem: require("../../assets/images/burger2.jpeg"),
    destino: "/restaurante",
  },

  {
    id: "5",
    tipo: "restaurante",
    nome: "Pizza Bella",
    subtitulo: "Pizza • Italiana",
    extra: "⭐ 4.6 • 35-50 min",
    imagem: require("../../assets/images/pizza1.jpeg"),
    destino: "/restaurante",
  },

  {
    id: "6",
    tipo: "restaurante",
    nome: "Sushi Kimura",
    subtitulo: "Japonesa • Sushi",
    extra: "⭐ 4.9 • 40-55 min",
    imagem: require("../../assets/images/SushiHouse.jpeg"),
    destino: "/restaurante",
  },
];

const buscasRecentes = ["Burger", "Pizza", "Sushi"];

export default function Busca() {
  const [busca, setBusca] = useState("");

  const termo = busca.trim().toLowerCase();

  const resultados = termo
    ? itens.filter(
        (item) =>
          item.nome.toLowerCase().includes(termo) ||
          item.subtitulo.toLowerCase().includes(termo)
      )
    : itens;

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        style={styles.scrollArea}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Buscar</Text>

        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>

          <TextInput
            style={styles.searchInput}
            placeholder="Buscar restaurantes, pratos..."
            placeholderTextColor="#999999"
            value={busca}
            onChangeText={setBusca}
            returnKeyType="search"
          />

          {busca.length > 0 && (
            <TouchableOpacity onPress={() => setBusca("")}>
              <Text style={styles.clearIcon}>✕</Text>
            </TouchableOpacity>
          )}
        </View>

        {!termo && (
          <View style={styles.recentSection}>
            <Text style={styles.recentTitle}>Buscas recentes</Text>

            <View style={styles.recentChips}>
              {buscasRecentes.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={styles.recentChip}
                  onPress={() => setBusca(item)}
                >
                  <Text style={styles.recentChipText}>🕘 {item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        <Text style={styles.resultsTitle}>
          {termo ? `Resultados para "${busca}"` : "Sugestões para você"}
        </Text>

        {resultados.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyEmoji}>🔍</Text>

            <Text style={styles.emptyText}>
              Nenhum resultado encontrado
            </Text>
          </View>
        )}

        {resultados.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.resultCard}
            onPress={() => router.push(item.destino)}
          >
            <Image source={item.imagem} style={styles.resultImage} />

            <View style={styles.resultInfo}>
              <Text style={styles.resultName}>{item.nome}</Text>

              <Text style={styles.resultSubtitle}>
                {item.subtitulo}
              </Text>

              <Text style={styles.resultExtra}>
                {item.preco ?? item.extra}
              </Text>
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.scrollBottomSpace} />
      </ScrollView>

      <View style={styles.bottomMenu}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push("/home")}
        >
          <Text style={styles.menuIcon}>🏠</Text>
          <Text style={styles.menuLabel}>Início</Text>
        </TouchableOpacity>

        <View style={styles.menuButton}>
          <Text style={styles.menuIconActive}>🔍</Text>

          <Text style={styles.menuLabelActive}>Busca</Text>

          <View style={styles.menuActiveBar} />
        </View>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push("/carrinho")}
        >
          <Text style={styles.menuIcon}>🧾</Text>
          <Text style={styles.menuLabel}>Pedidos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push("/perfil")}
        >
          <Text style={styles.menuIcon}>👤</Text>
          <Text style={styles.menuLabel}>Perfil</Text>
        </TouchableOpacity>
      </View>
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

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginHorizontal: 20,
    marginTop: 10,
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginHorizontal: 20,
    marginTop: 16,
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 12,
  },

  searchIcon: {
    fontSize: 16,
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    minWidth: 0,
    fontSize: 15,
    color: "#1a1a1a",
    paddingVertical: 12,
  },

  clearIcon: {
    fontSize: 14,
    color: "#999999",
    marginLeft: 8,
  },

  recentSection: {
    marginTop: 20,
    marginHorizontal: 20,
  },

  recentTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 10,
  },

  recentChips: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  recentChip: {
    backgroundColor: "#ffffff",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
  },

  recentChipText: {
    fontSize: 13,
    color: "#555555",
  },

  resultsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginHorizontal: 20,
    marginTop: 24,
    marginBottom: 14,
  },

  emptyState: {
    alignItems: "center",
    marginTop: 30,
  },

  emptyEmoji: {
    fontSize: 40,
  },

  emptyText: {
    fontSize: 14,
    color: "#999999",
    marginTop: 10,
  },

  resultCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginHorizontal: 20,
    marginBottom: 14,
    borderRadius: 12,
    padding: 10,
  },

  resultImage: {
    width: 64,
    height: 64,
    borderRadius: 10,
  },

  resultInfo: {
    flex: 1,
    minWidth: 0,
    marginLeft: 14,
  },

  resultName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1a1a1a",
  },

  resultSubtitle: {
    fontSize: 12,
    color: "#777777",
    marginTop: 3,
  },

  resultExtra: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#e63946",
    marginTop: 6,
  },

  scrollBottomSpace: {
    height: 20,
  },

  bottomMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#eeeeee",
  },

  menuButton: {
    alignItems: "center",
    paddingTop: 4,
  },

  menuActiveBar: {
    width: 26,
    height: 3,
    borderRadius: 2,
    backgroundColor: "#1a1a1a",
    marginTop: 6,
  },

  menuIcon: {
    fontSize: 20,
    opacity: 0.5,
  },

  menuIconActive: {
    fontSize: 20,
  },

  menuLabel: {
    fontSize: 11,
    marginTop: 4,
    color: "#999999",
  },

  menuLabelActive: {
    fontSize: 11,
    marginTop: 4,
    color: "#e63946",
    fontWeight: "bold",
  },
});