import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const PRECO_UNITARIO = 29.9;

function formatarPreco(valor) {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}

export default function Carrinho() {
  const [quantidade, setQuantidade] = useState(1);
  const { width: screenWidth } = useWindowDimensions();
  const itemInfoWidth = screenWidth - 40 - 32 - 90 - 14;

  const subtotal = PRECO_UNITARIO * quantidade;

  function aumentar() {
    setQuantidade((atual) => atual + 1);
  }

  function diminuir() {
    setQuantidade((atual) => Math.max(1, atual - 1));
  }

  function limparCarrinho() {
    setQuantidade(1);
  }

  function finalizarPedido() {
    alert("Pedido realizado com sucesso!");
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        style={styles.scrollArea}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerRow}>
          <View style={styles.headerLeft}>
            <TouchableOpacity onPress={() => router.back()}>
              <Text style={styles.backArrow}>←</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Meu carrinho</Text>
          </View>

          <TouchableOpacity
            style={styles.clearButton}
            onPress={limparCarrinho}
          >
            <Text style={styles.clearButtonText}>
              🗑️ Limpar
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>
          Confira seus itens antes de finalizar
        </Text>

        <View style={styles.itemCard}>
          <TouchableOpacity
            style={styles.trashButton}
            onPress={limparCarrinho}
          >
            <Text style={styles.trashIcon}>🗑️</Text>
          </TouchableOpacity>

          <View style={styles.itemTopRow}>
            <Image
              source={require("../../assets/images/burger1.jpeg")}
              style={styles.itemImage}
            />

            <View style={[styles.itemInfo, { width: itemInfoWidth }]}>
              <View style={styles.itemBadge}>
                <Text style={styles.itemBadgeText}>
                  👑 Mais pedido
                </Text>
              </View>

              <Text style={styles.itemName}>
                Classic Burger
              </Text>

              <Text style={styles.itemDescription} numberOfLines={2}>
                Hambúrguer artesanal preparado com carne,
                queijo, alface, tomate e molho especial da casa.
              </Text>
            </View>
          </View>

          <View style={styles.itemBottomRow}>
            <View style={styles.stepper}>
              <TouchableOpacity
                style={styles.stepperButton}
                onPress={diminuir}
              >
                <Text style={styles.stepperButtonText}>−</Text>
              </TouchableOpacity>

              <Text style={styles.stepperValue}>{quantidade}</Text>

              <TouchableOpacity
                style={styles.stepperButton}
                onPress={aumentar}
              >
                <Text style={styles.stepperButtonText}>+</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.itemPrice}>
              {formatarPreco(subtotal)}
            </Text>
          </View>
        </View>
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

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 10,
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flexShrink: 1,
    minWidth: 0,
  },

  backArrow: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a1a",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1a1a1a",
    flexShrink: 1,
  },

  clearButton: {
    backgroundColor: "#fbe2e2",
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 20,
    flexShrink: 0,
    marginLeft: 8,
  },

  clearButtonText: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#e63946",
  },

  subtitle: {
    fontSize: 14,
    color: "#777777",
    marginHorizontal: 20,
    marginTop: 4,
    marginLeft: 38,
  },

  itemCard: {
    backgroundColor: "#ffffff",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 16,
    padding: 16,
  },

  trashButton: {
    position: "absolute",
    top: 14,
    right: 14,
    zIndex: 1,
  },

  trashIcon: {
    fontSize: 18,
  },

  itemTopRow: {
    flexDirection: "row",
  },

  itemImage: {
    width: 90,
    height: 90,
    borderRadius: 12,
  },

  itemInfo: {
    marginLeft: 14,
    paddingRight: 16,
    overflow: "hidden",
  },

  itemBadge: {
    backgroundColor: "#e63946",
    alignSelf: "flex-start",
    paddingVertical: 3,
    paddingHorizontal: 9,
    borderRadius: 20,
  },

  itemBadgeText: {
    color: "#ffffff",
    fontSize: 10,
    fontWeight: "bold",
  },

  itemName: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginTop: 6,
  },

  itemDescription: {
    fontSize: 12,
    color: "#777777",
    marginTop: 4,
    lineHeight: 16,
  },

  itemBottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },

  stepper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  stepperButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#fbe2e2",
    justifyContent: "center",
    alignItems: "center",
  },

  stepperButtonText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#e63946",
  },

  stepperValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1a1a1a",
  },

  itemPrice: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
});
