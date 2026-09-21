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
    nome: "Lanches",
    imagem: require("../../assets/images/burger1.jpeg"),
  },
  {
    id: "2",
    nome: "Pizza",
    imagem: require("../../assets/images/pizza1.jpeg"),
  },
  { id: "3", nome: "Japonesa", emoji: "🍣" },
  { id: "4", nome: "Doces", emoji: "🍰" },
  { id: "5", nome: "Bebidas", emoji: "🥤" },
];

const maisPedidos = [
  {
    id: "1",
    nome: "Classic Burger",
    preco: "R$ 29,90",
    avaliacao: "4.8",
    avaliacoes: "1,2k",
    destaque: true,
    imagem: require("../../assets/images/burger1.jpeg"),
  },
  {
    id: "2",
    nome: "Batata Crocante",
    preco: "R$ 14,90",
    avaliacao: "4.6",
    avaliacoes: "856",
    imagem: require("../../assets/images/batatafrita2.jpeg"),
  },
  {
    id: "3",
    nome: "Pizza da Casa",
    preco: "R$ 39,90",
    avaliacao: "4.7",
    avaliacoes: "632",
    imagem: require("../../assets/images/pizza2.jpeg"),
  },
];

const restaurantes = [
  {
    id: "1",
    nome: "Burger House",
    categoria: "Hambúrguer • Lanches",
    avaliacao: "4.8",
    tempo: "30-40 min",
    imagem: require("../../assets/images/burger2.jpeg"),
  },
  {
    id: "2",
    nome: "Pizza Bella",
    categoria: "Pizza • Italiana",
    avaliacao: "4.6",
    tempo: "35-50 min",
    imagem: require("../../assets/images/pizza1.jpeg"),
  },
  {
    id: "3",
    nome: "Sushi Kimura",
    categoria: "Japonesa • Sushi",
    avaliacao: "4.9",
    tempo: "40-55 min",
    emoji: "🍣",
  },
];

export default function Home() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Olá, João 👋</Text>

            <TouchableOpacity style={styles.locationRow}>
              <Text style={styles.locationText}>
                📍 Maricá - RJ  ⌄
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.iconButtonText}>🔔</Text>

              <View style={styles.notificationDot} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => router.push("/perfil")}
            >
              <Text style={styles.iconButtonText}>👤</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>

          <Text style={styles.searchPlaceholder}>
            Buscar restaurantes, pratos...
          </Text>
        </View>

        <View style={styles.banner}>
          <View style={styles.bannerTextArea}>
            <View style={styles.bannerTag}>
              <Text style={styles.bannerTagText}>
                ⚡ Oferta especial
              </Text>
            </View>

            <Text style={styles.bannerTitle}>
              20% OFF
            </Text>

            <Text style={styles.bannerSubtitle}>
              no seu primeiro pedido
            </Text>

            <TouchableOpacity style={styles.bannerButton}>
              <Text style={styles.bannerButtonText}>
                Pedir agora  ›
              </Text>
            </TouchableOpacity>
          </View>

          <Image
            source={require("../../assets/images/burger2.jpeg")}
            style={styles.bannerImage}
          />
        </View>

        <View style={styles.bannerDots}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesScroll}
          contentContainerStyle={styles.categoriesContent}
        >
          {categorias.map((categoria) => (
            <TouchableOpacity
              key={categoria.id}
              style={styles.categoryItem}
            >
              <View style={styles.categoryCircle}>
                {categoria.imagem ? (
                  <Image
                    source={categoria.imagem}
                    style={styles.categoryImage}
                  />
                ) : (
                  <Text style={styles.categoryEmoji}>
                    {categoria.emoji}
                  </Text>
                )}
              </View>

              <Text style={styles.categoryName}>
                {categoria.nome}
              </Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={styles.categoryItem}>
            <View style={styles.categoryCircleMuted}>
              <Text style={styles.categoryArrow}>›</Text>
            </View>

            <Text style={styles.categoryName}>
              Ver todas
            </Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Mais pedidos
          </Text>

          <Text style={styles.sectionLink}>
            Ver tudo
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.pedidosContent}
        >
          {maisPedidos.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.pedidoCard}
              onPress={() => router.push("/prato")}
            >
              <View>
                <Image
                  source={item.imagem}
                  style={styles.pedidoImage}
                />

                {item.destaque && (
                  <View style={styles.pedidoBadge}>
                    <Text style={styles.pedidoBadgeText}>
                      🔥 Mais pedido
                    </Text>
                  </View>
                )}

                <View style={styles.favoriteButton}>
                  <Text style={styles.favoriteIcon}>♡</Text>
                </View>
              </View>

              <Text style={styles.pedidoNome} numberOfLines={1}>
                {item.nome}
              </Text>

              <Text style={styles.pedidoRating}>
                ⭐ {item.avaliacao} ({item.avaliacoes})
              </Text>

              <Text style={styles.pedidoPreco}>
                {item.preco}
              </Text>

              <TouchableOpacity
                style={styles.addButton}
                onPress={() => router.push("/prato")}
              >
                <Text style={styles.addButtonText}>
                  🛒 Adicionar
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TouchableOpacity style={styles.deliveryBanner}>
          <Text style={styles.deliveryIcon}>🛵</Text>

          <View style={styles.deliveryTextArea}>
            <Text style={styles.deliveryTitle}>
              Entrega rápida e segura
            </Text>

            <Text style={styles.deliverySubtitle}>
              Seu pedido chega quentinho e no prazo!
            </Text>
          </View>

          <Text style={styles.deliveryArrow}>›</Text>
        </TouchableOpacity>

        <Text style={[styles.sectionTitle, styles.sectionTitleSpaced]}>
          Restaurantes perto de você
        </Text>

        {restaurantes.map((restaurante) => (
          <TouchableOpacity
            key={restaurante.id}
            style={styles.card}
            onPress={() => router.push("/restaurante")}
          >
            <View style={styles.imagePlaceholder}>
              {restaurante.imagem ? (
                <Image
                  source={restaurante.imagem}
                  style={styles.restauranteImage}
                />
              ) : (
                <Text style={styles.imageText}>
                  {restaurante.emoji}
                </Text>
              )}
            </View>

            <View style={styles.cardContent}>
              <Text style={styles.restaurantName}>
                {restaurante.nome}
              </Text>

              <Text style={styles.category}>
                {restaurante.categoria}
              </Text>

              <Text style={styles.rating}>
                ⭐ {restaurante.avaliacao} • {restaurante.tempo}
              </Text>
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.scrollBottomSpace} />
      </ScrollView>

      <View style={styles.bottomMenu}>
        <View style={styles.menuButton}>
          <Text style={styles.menuIconActive}>🏠</Text>

          <Text style={styles.menuLabelActive}>Início</Text>

          <View style={styles.menuActiveBar} />
        </View>

        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuIcon}>🔍</Text>

          <Text style={styles.menuLabel}>Busca</Text>
        </TouchableOpacity>

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

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginHorizontal: 20,
    marginTop: 10,
  },

  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a1a",
  },

  locationRow: {
    marginTop: 4,
  },

  locationText: {
    fontSize: 14,
    color: "#777777",
  },

  headerIcons: {
    flexDirection: "row",
    gap: 10,
  },

  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },

  iconButtonText: {
    fontSize: 18,
  },

  notificationDot: {
    position: "absolute",
    top: 9,
    right: 11,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#e63946",
    borderWidth: 1,
    borderColor: "#ffffff",
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
  },

  searchIcon: {
    fontSize: 16,
    marginRight: 10,
  },

  searchPlaceholder: {
    fontSize: 15,
    color: "#999999",
  },

  banner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#b3212b",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 16,
    padding: 20,
    overflow: "hidden",
  },

  bannerTextArea: {
    flex: 1,
  },

  bannerTag: {
    backgroundColor: "rgba(0,0,0,0.25)",
    alignSelf: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginBottom: 10,
  },

  bannerTagText: {
    color: "#ffffff",
    fontSize: 11,
    fontWeight: "bold",
  },

  bannerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
    lineHeight: 34,
  },

  bannerSubtitle: {
    fontSize: 15,
    color: "#ffffff",
    marginTop: 2,
  },

  bannerButton: {
    backgroundColor: "#ffffff",
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 14,
  },

  bannerButtonText: {
    color: "#e63946",
    fontWeight: "bold",
    fontSize: 14,
  },

  bannerImage: {
    width: 130,
    height: 130,
    borderRadius: 12,
    marginLeft: 10,
  },

  bannerDots: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    gap: 5,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#e0b3b6",
  },

  dotActive: {
    backgroundColor: "#e63946",
    width: 16,
  },

  categoriesScroll: {
    marginTop: 24,
  },

  categoriesContent: {
    paddingHorizontal: 20,
  },

  categoryItem: {
    alignItems: "center",
    marginRight: 18,
    width: 64,
  },

  categoryCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fbe2e2",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  categoryCircleMuted: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#eeeeee",
    justifyContent: "center",
    alignItems: "center",
  },

  categoryImage: {
    width: "100%",
    height: "100%",
  },

  categoryEmoji: {
    fontSize: 26,
  },

  categoryArrow: {
    fontSize: 26,
    color: "#777777",
    fontWeight: "bold",
  },

  categoryName: {
    fontSize: 12,
    color: "#444444",
    marginTop: 6,
    textAlign: "center",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 28,
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginHorizontal: 20,
  },

  sectionTitleSpaced: {
    marginTop: 28,
    marginBottom: 14,
  },

  sectionLink: {
    fontSize: 13,
    color: "#e63946",
    fontWeight: "bold",
  },

  pedidosContent: {
    paddingHorizontal: 20,
  },

  pedidoCard: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    paddingBottom: 12,
    marginRight: 14,
    width: 170,
    overflow: "hidden",
  },

  pedidoImage: {
    width: "100%",
    height: 100,
  },

  pedidoBadge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#e63946",
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 20,
  },

  pedidoBadgeText: {
    color: "#ffffff",
    fontSize: 10,
    fontWeight: "bold",
  },

  favoriteButton: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "rgba(255,255,255,0.9)",
    justifyContent: "center",
    alignItems: "center",
  },

  favoriteIcon: {
    fontSize: 15,
    color: "#e63946",
  },

  pedidoNome: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    marginHorizontal: 12,
    color: "#1a1a1a",
  },

  pedidoRating: {
    fontSize: 12,
    color: "#999999",
    marginTop: 4,
    marginHorizontal: 12,
  },

  pedidoPreco: {
    fontSize: 15,
    color: "#1a1a1a",
    fontWeight: "bold",
    marginTop: 6,
    marginHorizontal: 12,
  },

  addButton: {
    backgroundColor: "#e63946",
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 12,
  },

  addButtonText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#ffffff",
    marginHorizontal: 20,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
  },

  imagePlaceholder: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eeeeee",
  },

  imageText: {
    fontSize: 60,
  },

  restauranteImage: {
    width: "100%",
    height: "100%",
  },

  cardContent: {
    padding: 15,
  },

  restaurantName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a1a1a",
  },

  category: {
    fontSize: 14,
    marginTop: 4,
    color: "#777777",
  },

  rating: {
    fontSize: 13,
    marginTop: 8,
    color: "#444444",
  },

  deliveryBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fbe2e2",
    marginHorizontal: 20,
    marginTop: 24,
    padding: 16,
    borderRadius: 12,
  },

  deliveryIcon: {
    fontSize: 26,
    marginRight: 12,
  },

  deliveryTextArea: {
    flex: 1,
  },

  deliveryTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1a1a1a",
  },

  deliverySubtitle: {
    fontSize: 12,
    color: "#777777",
    marginTop: 2,
  },

  deliveryArrow: {
    fontSize: 22,
    color: "#e63946",
    fontWeight: "bold",
  },

  scrollBottomSpace: {
    height: 10,
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
