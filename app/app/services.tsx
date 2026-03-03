import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { services } from '../src/data';

const COLORS = {
  background: '#05070E',
  foreground: '#E2E8F0',
  muted: '#94A3B8',
  card: '#0F172A',
  border: '#1E293B',
  primary: '#3B82F6',
  primaryForeground: '#05070E',
  cyan: '#22D3EE',
};

export default function ServicesScreen() {
  const router = useRouter();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.badge}>
          <Ionicons name="grid" size={12} color={COLORS.primary} />
          <Text style={styles.badgeText}>What We Build</Text>
        </View>
        <Text style={styles.title}>Services & Capabilities</Text>
        <Text style={styles.subtitle}>
          End-to-end digital product development for startups, powered by AI and modern engineering.
        </Text>
      </View>

      {/* Service Cards */}
      {services.map((service, index) => (
        <View key={service.id} style={styles.serviceCard}>
          <View style={styles.cardHeader}>
            <View style={[styles.iconBox, { backgroundColor: getColor(index) + '15' }]}>
              <Ionicons
                name={service.icon as any}
                size={28}
                color={getColor(index)}
              />
            </View>
            <View style={styles.cardTitleArea}>
              <Text style={styles.cardTitle}>{service.title}</Text>
              <Text style={styles.cardDesc}>{service.description}</Text>
            </View>
          </View>

          <View style={styles.featuresList}>
            {service.features.map((feature) => (
              <View key={feature} style={styles.featureItem}>
                <Ionicons name="checkmark-circle" size={16} color={COLORS.primary} />
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}

      {/* CTA */}
      <View style={styles.ctaCard}>
        <Ionicons name="chatbubbles-outline" size={32} color={COLORS.primary} />
        <Text style={styles.ctaTitle}>Need something custom?</Text>
        <Text style={styles.ctaDesc}>
          We tailor solutions to your exact needs. Let&apos;s discuss your project.
        </Text>
        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => router.push('/contact')}
          activeOpacity={0.8}
        >
          <Text style={styles.ctaButtonText}>Get in Touch</Text>
          <Ionicons name="arrow-forward" size={16} color={COLORS.primaryForeground} />
        </TouchableOpacity>
      </View>

      <View style={{ height: 32 }} />
    </ScrollView>
  );
}

function getColor(index: number): string {
  const colors = ['#3B82F6', '#22D3EE', '#38BDF8', '#22C55E', '#F59E0B', '#8B5CF6'];
  return colors[index % colors.length];
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

  // Service Card
  serviceCard: {
    marginHorizontal: 16,
    marginBottom: 14,
    backgroundColor: COLORS.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitleArea: {
    flex: 1,
  },
  cardTitle: {
    color: COLORS.foreground,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  cardDesc: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 18,
  },
  featuresList: {
    gap: 8,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  featureText: {
    color: COLORS.foreground,
    fontSize: 14,
  },

  // CTA
  ctaCard: {
    marginHorizontal: 16,
    marginTop: 8,
    backgroundColor: COLORS.card,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.primary + '30',
    padding: 28,
    alignItems: 'center',
  },
  ctaTitle: {
    color: COLORS.foreground,
    fontSize: 20,
    fontWeight: '700',
    marginTop: 12,
    marginBottom: 8,
    textAlign: 'center',
  },
  ctaDesc: {
    color: COLORS.muted,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 9999,
  },
  ctaButtonText: {
    color: COLORS.primaryForeground,
    fontSize: 15,
    fontWeight: '600',
  },
});
