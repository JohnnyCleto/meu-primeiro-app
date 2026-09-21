import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const acoesRapidas = [
  {
    id: "1",
    icone: "📋",
    titulo: "Seus pedidos",
    subtitulo: "Acompanhe e veja seu histórico",
  },
  {
    id: "2",
    icone: "📍",
    titulo: "Endereços",
    subtitulo: "Gerencie seus endereços",
  },
  {
    id: "3",
    icone: "💳",
    titulo: "Formas de pagamento",
    subtitulo: "Cartões, pix e vale-refeição",
  },
  {
    id: "4",
    icone: "🎧",
    titulo: "Atendimento",
    subtitulo: "Precisa de ajuda? Fale conosco",
  },
];

const listaOpcoes = [
  {
    id: "1",
    icone: "👤",
    titulo: "Dados pessoais",
    subtitulo: "Nome, e-mail e informações de contato",
  },
  {
    id: "2",
    icone: "📍",
    titulo: "Endereço de entrega",
    subtitulo: "Rua Principal, 100 - Maricá, RJ",
  },
  {
    id: "3",
    icone: "🛍️",
    titulo: "Pedidos anteriores",
    subtitulo: "Veja todos os seus pedidos",
    destino: "/carrinho",
  },
  {
    id: "4",
    icone: "🛡️",
    titulo: "Central de privacidade",
    subtitulo: "Seus dados estão seguros com a gente",
  },
  {
    id: "5",
    icone: "🛵",
    titulo: "Tem um problema com seu pedido?",
    subtitulo: "Resolva aqui de forma rápida e fácil",
    destaque: true,
  },
];

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

        <View style={styles.promoBanner}>
          <View style={styles.promoIconCircle}>
            <Text style={styles.promoIcon}>👑</Text>
          </View>

          <View style={styles.promoTextArea}>
            <Text style={styles.promoTitle}>
              Seja FoodGo Mais
            </Text>

            <Text style={styles.promoSubtitle}>
              Tenha mais benefícios, descontos e muito mais!
            </Text>
          </View>

          <TouchableOpacity style={styles.promoButton}>
            <Text style={styles.promoButtonText}>
              Conhecer
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.quickGrid}>
          {acoesRapidas.map((acao) => (
            <TouchableOpacity
              key={acao.id}
              style={styles.quickCard}
            >
              <View style={styles.quickIconCircle}>
                <Text style={styles.quickIcon}>
                  {acao.icone}
                </Text>
              </View>

              <Text style={styles.quickTitle} numberOfLines={1}>
                {acao.titulo}
              </Text>

              <Text style={styles.quickSubtitle} numberOfLines={2}>
                {acao.subtitulo}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.optionsList}>
          {listaOpcoes.map((opcao) => (
            <TouchableOpacity
              key={opcao.id}
              style={[
                styles.optionRow,
                opcao.destaque && styles.optionRowDestaque,
              ]}
              onPress={() =>
                opcao.destino && router.push(opcao.destino)
              }
            >
              <View
                style={[
                  styles.optionIconCircle,
                  opcao.destaque && styles.optionIconCircleDestaque,
                ]}
              >
                <Text style={styles.optionIcon}>
                  {opcao.icone}
                </Text>
              </View>

              <View style={styles.optionTextArea}>
                <Text style={styles.optionTitle}>
                  {opcao.titulo}
                </Text>

                <Text style={styles.optionSubtitle}>
                  {opcao.subtitulo}
                </Text>
              </View>

              <Text style={styles.optionArrow}>›</Text>
            </TouchableOpacity>
          ))}
        </View>

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

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push("/busca")}
        >
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

        <View style={styles.menuButton}>
          <Text style={styles.menuIconActive}>👤</Text>

          <Text style={styles.menuLabelActive}>Perfil</Text>

          <View style={styles.menuActiveBar} />
        </View>
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

  promoBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fbe2e2",
    marginHorizontal: 20,
    marginTop: 16,
    padding: 14,
    borderRadius: 14,
  },

  promoIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e63946",
    justifyContent: "center",
    alignItems: "center",
  },

  promoIcon: {
    fontSize: 18,
  },

  promoTextArea: {
    flex: 1,
    marginLeft: 12,
  },

  promoTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1a1a1a",
  },

  promoSubtitle: {
    fontSize: 12,
    color: "#777777",
    marginTop: 2,
  },

  promoButton: {
    backgroundColor: "#e63946",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginLeft: 8,
  },

  promoButtonText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },

  quickGrid: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 16,
    gap: 8,
  },

  quickCard: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 10,
  },

  quickIconCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#fbe2e2",
    justifyContent: "center",
    alignItems: "center",
  },

  quickIcon: {
    fontSize: 14,
  },

  quickTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginTop: 8,
  },

  quickSubtitle: {
    fontSize: 10,
    color: "#999999",
    marginTop: 3,
    lineHeight: 13,
  },

  optionsList: {
    marginHorizontal: 20,
    marginTop: 20,
  },

  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },

  optionRowDestaque: {
    backgroundColor: "#fbe2e2",
  },

  optionIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fbe2e2",
    justifyContent: "center",
    alignItems: "center",
  },

  optionIconCircleDestaque: {
    backgroundColor: "#ffffff",
  },

  optionIcon: {
    fontSize: 18,
  },

  optionTextArea: {
    flex: 1,
    marginLeft: 14,
  },

  optionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1a1a1a",
  },

  optionSubtitle: {
    fontSize: 12,
    color: "#777777",
    marginTop: 3,
  },

  optionArrow: {
    fontSize: 20,
    color: "#cccccc",
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
