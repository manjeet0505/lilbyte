import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { faqItems } from '../src/data';

const COLORS = {
  background: '#05070E',
  foreground: '#E2E8F0',
  muted: '#94A3B8',
  card: '#0F172A',
  border: '#1E293B',
  primary: '#3B82F6',
  primaryForeground: '#05070E',
};

export default function FaqScreen() {
  const router = useRouter();
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.badge}>
          <Ionicons name="help-circle" size={12} color={COLORS.primary} />
          <Text style={styles.badgeText}>FAQ</Text>
        </View>
        <Text style={styles.title}>Frequently Asked Questions</Text>
        <Text style={styles.subtitle}>
          Everything you need to know about working with LilByte.
        </Text>
      </View>

      {/* FAQ Items */}
      {faqItems.map((item) => {
        const isOpen = expanded === item.id;
        return (
          <TouchableOpacity
            key={item.id}
            style={[styles.faqCard, isOpen && styles.faqCardOpen]}
            onPress={() => toggleItem(item.id)}
            activeOpacity={0.7}
          >
            <View style={styles.faqHeader}>
              <Text style={[styles.faqQuestion, isOpen && styles.faqQuestionOpen]}>
                {item.question}
              </Text>
              <Ionicons
                name={isOpen ? 'chevron-up' : 'chevron-down'}
                size={20}
                color={isOpen ? COLORS.primary : COLORS.muted}
              />
            </View>
            {isOpen && (
              <View style={styles.faqAnswerContainer}>
                <View style={styles.faqDivider} />
                <Text style={styles.faqAnswer}>{item.answer}</Text>
              </View>
            )}
          </TouchableOpacity>
        );
      })}

      {/* Still have questions */}
      <View style={styles.ctaCard}>
        <Ionicons name="chatbubble-ellipses-outline" size={32} color={COLORS.primary} />
        <Text style={styles.ctaTitle}>Still have questions?</Text>
        <Text style={styles.ctaDesc}>
          We're happy to help. Reach out and we'll get back to you within 24 hours.
        </Text>
        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => router.push('/contact')}
          activeOpacity={0.8}
        >
          <Text style={styles.ctaButtonText}>Contact Us</Text>
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

  // FAQ
  faqCard: {
    marginHorizontal: 16,
    marginBottom: 10,
    backgroundColor: COLORS.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 18,
  },
  faqCardOpen: {
    borderColor: COLORS.primary + '40',
  },
  faqHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  faqQuestion: {
    flex: 1,
    color: COLORS.foreground,
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 20,
  },
  faqQuestionOpen: {
    color: COLORS.primary,
  },
  faqAnswerContainer: {
    marginTop: 14,
  },
  faqDivider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginBottom: 14,
  },
  faqAnswer: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 22,
  },

  // CTA
  ctaCard: {
    marginHorizontal: 16,
    marginTop: 12,
    backgroundColor: COLORS.card,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.primary + '25',
    padding: 28,
    alignItems: 'center',
    gap: 10,
  },
  ctaTitle: {
    color: COLORS.foreground,
    fontSize: 20,
    fontWeight: '700',
  },
  ctaDesc: {
    color: COLORS.muted,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 8,
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
