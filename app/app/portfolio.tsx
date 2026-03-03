import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { demoProducts } from '../src/data';

const { width } = Dimensions.get('window');

const COLORS = {
  background: '#05070E',
  foreground: '#E2E8F0',
  muted: '#94A3B8',
  card: '#0F172A',
  border: '#1E293B',
  primary: '#3B82F6',
  cyan: '#22D3EE',
};

export default function PortfolioScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.badge}>
          <Ionicons name="briefcase" size={12} color={COLORS.primary} />
          <Text style={styles.badgeText}>Portfolio</Text>
        </View>
        <Text style={styles.title}>What We've Built</Text>
        <Text style={styles.subtitle}>
          Real products and demos showcasing our capabilities in AI, SaaS, and full-stack development.
        </Text>
      </View>

      {/* Product Cards */}
      {demoProducts.map((product) => (
        <View key={product.id} style={styles.productCard}>
          {/* Icon Header */}
          <View style={[styles.productIconArea, { backgroundColor: product.color + '10' }]}>
            <Ionicons name={product.icon as any} size={40} color={product.color} />
          </View>

          <View style={styles.productContent}>
            <Text style={styles.productTitle}>{product.title}</Text>
            <Text style={styles.productDesc}>{product.description}</Text>

            {/* Tags */}
            <View style={styles.tagsRow}>
              {product.tags.map((tag) => (
                <View
                  key={tag}
                  style={[styles.tag, { backgroundColor: product.color + '15', borderColor: product.color + '30' }]}
                >
                  <Text style={[styles.tagText, { color: product.color }]}>{tag}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      ))}

      {/* Capabilities */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Capabilities</Text>
        <View style={styles.capGrid}>
          {[
            { title: 'Frontend', items: ['React', 'Next.js', 'React Native', 'TypeScript'], icon: 'code-outline' as const },
            { title: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'], icon: 'server-outline' as const },
            { title: 'AI & ML', items: ['OpenAI', 'LangChain', 'Custom Models', 'RAG'], icon: 'hardware-chip-outline' as const },
            { title: 'Cloud', items: ['AWS', 'Docker', 'CI/CD', 'Monitoring'], icon: 'cloud-outline' as const },
          ].map((cap) => (
            <View key={cap.title} style={styles.capCard}>
              <Ionicons name={cap.icon} size={24} color={COLORS.primary} />
              <Text style={styles.capTitle}>{cap.title}</Text>
              {cap.items.map((item) => (
                <Text key={item} style={styles.capItem}>• {item}</Text>
              ))}
            </View>
          ))}
        </View>
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingBottom: 40,
  },
  header: {
    padding: 24,
    alignItems: 'center',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: COLORS.primary + '15',
    borderWidth: 1,
    borderColor: COLORS.primary + '30',
    borderRadius: 9999,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginBottom: 16,
  },
  badgeText: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  title: {
    color: COLORS.foreground,
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: COLORS.muted,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    maxWidth: 320,
  },

  // Product Card
  productCard: {
    marginHorizontal: 16,
    marginBottom: 14,
    backgroundColor: COLORS.card,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: 'hidden',
  },
  productIconArea: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productContent: {
    padding: 20,
  },
  productTitle: {
    color: COLORS.foreground,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  productDesc: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 14,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    borderWidth: 1,
    borderRadius: 9999,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
  },

  // Capabilities
  section: {
    padding: 24,
  },
  sectionTitle: {
    color: COLORS.foreground,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
  },
  capGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  capCard: {
    width: (width - 60) / 2,
    backgroundColor: COLORS.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 16,
    gap: 6,
  },
  capTitle: {
    color: COLORS.foreground,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 4,
  },
  capItem: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 18,
  },
});
