import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { pricingPlans } from '../src/data';

const { width } = Dimensions.get('window');

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

export default function PricingScreen() {
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
          <Ionicons name="pricetag" size={12} color={COLORS.primary} />
          <Text style={styles.badgeText}>Pricing</Text>
        </View>
        <Text style={styles.title}>Simple, Transparent Pricing</Text>
        <Text style={styles.subtitle}>
          No hidden fees. Choose a plan that fits your stage and let's build something great.
        </Text>
      </View>

      {/* Pricing Cards */}
      {pricingPlans.map((plan) => (
        <View
          key={plan.id}
          style={[
            styles.planCard,
            plan.highlighted && styles.planCardHighlighted,
          ]}
        >
          {plan.highlighted && (
            <LinearGradient
              colors={[COLORS.primary + '20', 'transparent']}
              style={styles.highlightGradient}
            />
          )}

          {plan.highlighted && (
            <View style={styles.popularBadge}>
              <Ionicons name="star" size={12} color={COLORS.primaryForeground} />
              <Text style={styles.popularText}>Most Popular</Text>
            </View>
          )}

          <Text style={styles.planName}>{plan.name}</Text>
          <Text style={styles.planPrice}>{plan.price}</Text>
          <Text style={styles.planTarget}>{plan.target}</Text>
          <Text style={styles.planDesc}>{plan.description}</Text>

          <View style={styles.featuresList}>
            {plan.features.map((feature) => (
              <View key={feature} style={styles.featureRow}>
                <Ionicons name="checkmark-circle" size={18} color={COLORS.primary} />
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>

          <TouchableOpacity
            style={[
              styles.planButton,
              plan.highlighted ? styles.planButtonPrimary : styles.planButtonOutline,
            ]}
            onPress={() => router.push('/contact')}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.planButtonText,
                plan.highlighted ? styles.planButtonTextPrimary : styles.planButtonTextOutline,
              ]}
            >
              {plan.cta}
            </Text>
          </TouchableOpacity>
        </View>
      ))}

      {/* Payment Terms */}
      <View style={styles.termsCard}>
        <Ionicons name="shield-checkmark-outline" size={24} color={COLORS.primary} />
        <Text style={styles.termsTitle}>Payment Terms</Text>
        <View style={styles.termsList}>
          {[
            '50% upfront, 50% on completion',
            'Invoices due within 30 days',
            'Full source code ownership',
            'No hidden fees or charges',
          ].map((term) => (
            <View key={term} style={styles.termRow}>
              <Ionicons name="checkmark" size={16} color={COLORS.primary} />
              <Text style={styles.termText}>{term}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* CTA */}
      <View style={styles.ctaCard}>
        <Text style={styles.ctaTitle}>Need a custom quote?</Text>
        <Text style={styles.ctaDesc}>
          Every project is unique. Let's discuss your specific requirements.
        </Text>
        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => router.push('/contact')}
          activeOpacity={0.8}
        >
          <Text style={styles.ctaButtonText}>Get Custom Quote</Text>
          <Ionicons name="arrow-forward" size={16} color={COLORS.primaryForeground} />
        </TouchableOpacity>
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

  // Plan Card
  planCard: {
    marginHorizontal: 16,
    marginBottom: 14,
    backgroundColor: COLORS.card,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 24,
    overflow: 'hidden',
  },
  planCardHighlighted: {
    borderColor: COLORS.primary + '50',
  },
  highlightGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 120,
  },
  popularBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    alignSelf: 'flex-start',
    backgroundColor: COLORS.primary,
    borderRadius: 9999,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginBottom: 14,
  },
  popularText: {
    color: COLORS.primaryForeground,
    fontSize: 11,
    fontWeight: '700',
  },
  planName: {
    color: COLORS.foreground,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 6,
  },
  planPrice: {
    color: COLORS.primary,
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 4,
  },
  planTarget: {
    color: COLORS.muted,
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  planDesc: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 18,
  },
  featuresList: {
    gap: 10,
    marginBottom: 20,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  featureText: {
    color: COLORS.foreground,
    fontSize: 14,
    flex: 1,
  },
  planButton: {
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 9999,
  },
  planButtonPrimary: {
    backgroundColor: COLORS.primary,
  },
  planButtonOutline: {
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  planButtonText: {
    fontSize: 15,
    fontWeight: '600',
  },
  planButtonTextPrimary: {
    color: COLORS.primaryForeground,
  },
  planButtonTextOutline: {
    color: COLORS.foreground,
  },

  // Terms
  termsCard: {
    marginHorizontal: 16,
    marginTop: 8,
    backgroundColor: COLORS.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 24,
    alignItems: 'center',
  },
  termsTitle: {
    color: COLORS.foreground,
    fontSize: 18,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 16,
  },
  termsList: {
    gap: 10,
    width: '100%',
  },
  termRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  termText: {
    color: COLORS.muted,
    fontSize: 14,
  },

  // CTA
  ctaCard: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: COLORS.card,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.primary + '25',
    padding: 28,
    alignItems: 'center',
  },
  ctaTitle: {
    color: COLORS.foreground,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  ctaDesc: {
    color: COLORS.muted,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16,
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
