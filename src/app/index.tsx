import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá! 👋</Text>
        <Text style={styles.subtitle}>Bem-vindo ao seu aplicativo</Text>
      </View>

      {/* Card principal */}
      <View style={styles.card}>
        <View style={styles.icon}>
          <Text style={styles.iconText}>🚀</Text>
        </View>

        <Text style={styles.cardTitle}>Comece por aqui</Text>

        <Text style={styles.cardDescription}>
          Este é o início do seu aplicativo. Você pode personalizar esta
          tela e adicionar novas funcionalidades.
        </Text>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Começar</Text>
        </Pressable>
      </View>

      {/* Rodapé */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Meu primeiro aplicativo
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 30,
  },

  header: {
    marginBottom: 32,
  },

  greeting: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 6,
  },

  subtitle: {
    color: '#aeb4ba',
    fontSize: 16,
  },

  card: {
    backgroundColor: '#30363d',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3d444d',
  },

  icon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#3b82f6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  iconText: {
    fontSize: 30,
  },

  cardTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
  },

  cardDescription: {
    color: '#b8bec5',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 24,
  },

  button: {
    width: '100%',
    backgroundColor: '#3b82f6',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonPressed: {
    opacity: 0.7,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  footerText: {
    color: '#6f767e',
    fontSize: 13,
  },
});