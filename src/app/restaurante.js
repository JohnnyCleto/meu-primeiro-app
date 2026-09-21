import { useState } from "react";
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

const categorias = [
  {
    id: "1",
    nome: "Hambúrgueres",
    ativa: true,
    imagem: require("../../assets/images/burger2.jpeg"),
  },
  {
    id: "2",
    nome: "Batatas",
    imagem: require("../../assets/images/batatafrita1.jpeg"),
  },
  {
    id: "3",
    nome: "Bebidas",
    imagem: require("../../assets/images/WhatsApp Image 2026-09-21 at 18.02.52.jpeg"),
  },
  {
    id: "4",
    nome: "Porções",
    imagem: require("../../assets/images/batatafritacombife.jpeg"),
  },
  {
    id: "5",
    nome: "Sobremesas",
    imagem: require("../../assets/images/WhatsApp Image 2026-09-21 at 18.02.52 (3).jpeg"),
  },
];

const avaliacoes = [
  {
    id: "1",
    nome: "Marina Silva",
    estrelas: 5,
    comentario:
      "Hambúrguer excelente, chegou quentinho e no prazo certinho!",
    tempo: "há 2 dias",
  },
  {
    id: "2",
    nome: "Pedro Costa",
    estrelas: 4,
    comentario:
      "Muito bom, só achei a batata um pouco salgada dessa vez.",
    tempo: "há 5 dias",
  },
  {
    id: "3",
    nome: "Ana Beatriz",
    estrelas: 5,
    comentario:
      "Meu lanche favorito da região, sempre peço o Classic Burger!",
    tempo: "há 1 semana",
  },
];

const informacoes = [
  {
    id: "1",
    icone: "📍",
    titulo: "Endereço",
    valor: "Av. das Palmeiras, 320 - Centro, Maricá - RJ",
  },
  {
    id: "2",
    icone: "🕐",
    titulo: "Horário de funcionamento",
    valor: "Todos os dias, das 18h às 23h30",
  },
  {
    id: "3",
    icone: "📞",
    titulo: "Telefone",
    valor: "(21) 99876-5432",
  },
  {
    id: "4",
    icone: "💳",
    titulo: "Formas de pagamento",
    valor: "Cartão, Pix e dinheiro",
  },
];

const destaques = [
  {
    id: "1",
    nome: "Classic Burger",
    descricao: "Hambúrguer artesanal com queijo, alface e tomate.",
    preco: "R$ 29,90",
    destaque: true,
    imagem: require("../../assets/images/burger1.jpeg"),
  },
  {
    id: "2",
    nome: "Batata Crocante",
    descricao: "Porção de batatas fritas.",
    preco: "R$ 14,90",
    imagem: require("../../assets/images/batatafrita2.jpeg"),
  },
];

export default function Restaurante() {
  const [abaAtiva, setAbaAtiva] = useState("cardapio");
  const [categoriaAtiva, setCategoriaAtiva] = useState("1");

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

        <View style={styles.tabsCard}>
          <View style={styles.tabsRow}>
            <TouchableOpacity
              style={[
                styles.tab,
                abaAtiva === "cardapio" && styles.tabActive,
              ]}
              onPress={() => setAbaAtiva("cardapio")}
            >
              <Text
                style={[
                  styles.tabText,
                  abaAtiva === "cardapio" && styles.tabTextActive,
                ]}
              >
                Cardápio
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.tab,
                abaAtiva === "avaliacoes" && styles.tabActive,
              ]}
              onPress={() => setAbaAtiva("avaliacoes")}
            >
              <Text
                style={[
                  styles.tabText,
                  abaAtiva === "avaliacoes" && styles.tabTextActive,
                ]}
              >
                Avaliações
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.tab,
                abaAtiva === "informacoes" && styles.tabActive,
              ]}
              onPress={() => setAbaAtiva("informacoes")}
            >
              <Text
                style={[
                  styles.tabText,
                  abaAtiva === "informacoes" && styles.tabTextActive,
                ]}
              >
                Informações
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tabsDivider} />

          {abaAtiva === "cardapio" && (
            <>
              <View style={styles.sectionHeader}>
                <View>
                  <Text style={styles.sectionTitle}>Destaques</Text>

                  <Text style={styles.sectionSubtitle}>
                    Os mais pedidos da casa
                  </Text>
                </View>

                <Text style={styles.sectionLink}>Ver todos ›</Text>
              </View>

              {destaques.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.foodCard}
                  onPress={() => router.push("/prato")}
                >
                  <View>
                    <Image
                      source={item.imagem}
                      style={styles.foodImage}
                    />

                    {item.destaque && (
                      <View style={styles.foodBadge}>
                        <Text style={styles.foodBadgeText}>
                          👑 Mais pedido
                        </Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.foodInfo}>
                    <Text style={styles.foodName}>
                      {item.nome}
                    </Text>

                    <Text
                      style={styles.foodDescription}
                      numberOfLines={2}
                    >
                      {item.descricao}
                    </Text>

                    <Text style={styles.price}>{item.preco}</Text>
                  </View>

                  <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => router.push("/prato")}
                  >
                    <Text style={styles.addButtonText}>+</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              ))}

              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Categorias</Text>

                <Text style={styles.sectionLink}>Ver todas ›</Text>
              </View>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesContent}
              >
                {categorias.map((categoria) => (
                  <TouchableOpacity
                    key={categoria.id}
                    style={styles.categoryItem}
                    onPress={() => setCategoriaAtiva(categoria.id)}
                  >
                    <View
                      style={[
                        styles.categoryCircle,
                        categoriaAtiva === categoria.id &&
                          styles.categoryCircleActive,
                      ]}
                    >
                      <Image
                        source={categoria.imagem}
                        style={styles.categoryImage}
                      />
                    </View>

                    <Text
                      style={[
                        styles.categoryName,
                        categoriaAtiva === categoria.id &&
                          styles.categoryNameActive,
                      ]}
                    >
                      {categoria.nome}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>

              <View style={styles.scrollBottomSpace} />
            </>
          )}

          {abaAtiva === "avaliacoes" && (
            <View style={styles.avaliacoesList}>
              <View style={styles.avaliacoesSummary}>
                <Text style={styles.avaliacoesSummaryScore}>
                  4.8
                </Text>

                <View>
                  <Text style={styles.avaliacoesSummaryStars}>
                    ⭐⭐⭐⭐⭐
                  </Text>

                  <Text style={styles.avaliacoesSummaryCount}>
                    Baseado em 1.200 avaliações
                  </Text>
                </View>
              </View>

              {avaliacoes.map((avaliacao) => (
                <View key={avaliacao.id} style={styles.reviewCard}>
                  <View style={styles.reviewHeader}>
                    <Text style={styles.reviewName}>
                      {avaliacao.nome}
                    </Text>

                    <Text style={styles.reviewTempo}>
                      {avaliacao.tempo}
                    </Text>
                  </View>

                  <Text style={styles.reviewStars}>
                    {"⭐".repeat(avaliacao.estrelas)}
                  </Text>

                  <Text style={styles.reviewComment}>
                    {avaliacao.comentario}
                  </Text>
                </View>
              ))}

              <View style={styles.scrollBottomSpace} />
            </View>
          )}

          {abaAtiva === "informacoes" && (
            <View style={styles.infoList}>
              {informacoes.map((info) => (
                <View key={info.id} style={styles.infoRow}>
                  <View style={styles.infoIconCircle}>
                    <Text style={styles.infoIconText}>
                      {info.icone}
                    </Text>
                  </View>

                  <View style={styles.infoRowTextArea}>
                    <Text style={styles.infoRowTitle}>
                      {info.titulo}
                    </Text>

                    <Text style={styles.infoRowValue}>
                      {info.valor}
                    </Text>
                  </View>
                </View>
              ))}

              <View style={styles.scrollBottomSpace} />
            </View>
          )}
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

  tabsCard: {
    backgroundColor: "#ffffff",
    paddingTop: 16,
    minHeight: 400,
  },

  tabsRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 10,
  },

  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },

  tabActive: {
    backgroundColor: "#e63946",
  },

  tabText: {
    fontSize: 14,
    color: "#777777",
    fontWeight: "bold",
  },

  tabTextActive: {
    color: "#ffffff",
  },

  tabsDivider: {
    height: 1,
    backgroundColor: "#eeeeee",
    marginTop: 16,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 16,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#1a1a1a",
  },

  sectionSubtitle: {
    fontSize: 13,
    color: "#999999",
    marginTop: 2,
  },

  sectionLink: {
    fontSize: 13,
    color: "#e63946",
    fontWeight: "bold",
  },

  foodCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 14,
    padding: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  foodImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },

  foodBadge: {
    position: "absolute",
    top: 6,
    left: 6,
    backgroundColor: "#e63946",
    paddingVertical: 3,
    paddingHorizontal: 7,
    borderRadius: 20,
  },

  foodBadgeText: {
    color: "#ffffff",
    fontSize: 8,
    fontWeight: "bold",
  },

  foodInfo: {
    flex: 1,
    minWidth: 0,
    marginLeft: 12,
  },

  foodName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1a1a1a",
  },

  foodDescription: {
    fontSize: 12,
    color: "#777777",
    marginTop: 4,
    lineHeight: 16,
  },

  price: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginTop: 8,
  },

  addButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#e63946",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },

  addButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },

  categoriesContent: {
    paddingHorizontal: 20,
  },

  categoryItem: {
    alignItems: "center",
    marginRight: 18,
    width: 66,
  },

  categoryCircle: {
    width: 62,
    height: 62,
    borderRadius: 31,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "transparent",
  },

  categoryCircleActive: {
    borderColor: "#e63946",
  },

  categoryImage: {
    width: "100%",
    height: "100%",
  },

  categoryName: {
    fontSize: 12,
    color: "#777777",
    marginTop: 6,
    textAlign: "center",
  },

  categoryNameActive: {
    color: "#e63946",
    fontWeight: "bold",
  },

  scrollBottomSpace: {
    height: 20,
  },

  avaliacoesList: {
    marginTop: 20,
    paddingHorizontal: 20,
  },

  avaliacoesSummary: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fbe2e2",
    borderRadius: 14,
    padding: 18,
    marginBottom: 20,
    gap: 16,
  },

  avaliacoesSummaryScore: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#1a1a1a",
  },

  avaliacoesSummaryStars: {
    fontSize: 14,
  },

  avaliacoesSummaryCount: {
    fontSize: 12,
    color: "#777777",
    marginTop: 4,
  },

  reviewCard: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    shadowColor: "#000000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  reviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  reviewName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1a1a1a",
  },

  reviewTempo: {
    fontSize: 11,
    color: "#999999",
  },

  reviewStars: {
    fontSize: 12,
    marginTop: 4,
  },

  reviewComment: {
    fontSize: 13,
    color: "#555555",
    marginTop: 8,
    lineHeight: 18,
  },

  infoList: {
    marginTop: 20,
    paddingHorizontal: 20,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
  },

  infoIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fbe2e2",
    justifyContent: "center",
    alignItems: "center",
  },

  infoIconText: {
    fontSize: 18,
  },

  infoRowTextArea: {
    flex: 1,
    minWidth: 0,
    marginLeft: 14,
  },

  infoRowTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1a1a1a",
  },

  infoRowValue: {
    fontSize: 12,
    color: "#777777",
    marginTop: 3,
  },
});
