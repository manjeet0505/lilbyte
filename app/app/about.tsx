import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const COLORS = {
  background: '#05070E',
  foreground: '#E2E8F0',
  muted: '#94A3B8',
  card: '#0F172A',
  border: '#1E293B',
  primary: '#3B82F6',
  cyan: '#22D3EE',
};

const VALUES = [
  {
    title: 'Ship Fast',
    desc: 'We believe in getting products to market quickly. Speed matters in the startup world.',
    icon: 'rocket-outline' as const,
    color: '#3B82F6',
  },
  {
    title: 'Build Smart',
    desc: 'Every line of code is intentional. We write clean, maintainable, scalable systems.',
    icon: 'bulb-outline' as const,
    color: '#22D3EE',
  },
  {
    title: 'Think AI-First',
    desc: 'AI isn\'t an add-on — it\'s a core part of how we design and build products.',
    icon: 'hardware-chip-outline' as const,
    color: '#38BDF8',
  },
  {
    title: 'Stay Transparent',
    desc: 'No hidden fees, no surprises. You always know where your project stands.',
    icon: 'eye-outline' as const,
    color: '#22C55E',
  },
];

const PROCESS = [
  { step: '1', title: 'You share your idea', desc: 'Tell us about your vision, target audience, and goals.' },
  { step: '2', title: 'We plan together', desc: 'We create a roadmap with features, timeline, and milestones.' },
  { step: '3', title: 'We build in sprints', desc: 'Agile development with regular check-ins and demos.' },
  { step: '4', title: 'We launch & support', desc: 'We handle deployment and provide ongoing support.' },
];

export default function AboutScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.badge}>
          <Ionicons name="information-circle" size={12} color={COLORS.primary} />
          <Text style={styles.badgeText}>About Us</Text>
        </View>
        <Text style={styles.title}>We're LilByte</Text>
        <Text style={styles.subtitle}>
          A small, focused tech studio that builds AI-powered digital products for startups.
        </Text>
      </View>

      {/* Story */}
      <View style={styles.storyCard}>
        <Text style={styles.storyTitle}>Our Story</Text>
        <Text style={styles.storyText}>
          LilByte started with a simple belief: startups deserve technology partners, not vendors.
          We're a team of engineers, designers, and builders who understand both business and technology.
        </Text>
        <Text style={styles.storyText}>
          We don't just write code — we think about your product, your users, and your growth.
          Every system we build is designed to scale with you.
        </Text>
      </View>

      {/* Mission */}
      <View style={styles.missionCard}>
        <LinearGradient
          colors={[COLORS.primary + '20', COLORS.cyan + '10', 'transparent']}
          style={styles.missionGradient}
        >
          <Ionicons name="flag-outline" size={28} color={COLORS.primary} />
          <Text style={styles.missionTitle}>Our Mission</Text>
          <Text style={styles.missionText}>
            To empower startups with AI-powered technology that turns ideas into scalable,
            production-ready products — fast, affordable, and built to last.
          </Text>
        </LinearGradient>
      </View>

      {/* Values */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What We Stand For</Text>
        {VALUES.map((value) => (
          <View key={value.title} style={styles.valueCard}>
            <View style={[styles.valueIcon, { backgroundColor: value.color + '15' }]}>
              <Ionicons name={value.icon} size={24} color={value.color} />
            </View>
            <View style={styles.valueContent}>
              <Text style={styles.valueTitle}>{value.title}</Text>
              <Text style={styles.valueDesc}>{value.desc}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Process */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>How It Works</Text>
        {PROCESS.map((item, index) => (
          <View key={item.step} style={styles.processItem}>
            <View style={styles.processStepContainer}>
              <View style={styles.processStep}>
                <Text style={styles.processStepText}>{item.step}</Text>
              </View>
              {index < PROCESS.length - 1 && <View style={styles.processLine} />}
            </View>
            <View style={styles.processContent}>
              <Text style={styles.processTitle}>{item.title}</Text>
              <Text style={styles.processDesc}>{item.desc}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Stats */}
      <View style={styles.statsGrid}>
        {[
          { value: '50+', label: 'Projects Delivered' },
          { value: '30+', label: 'Happy Clients' },
          { value: '99.9%', label: 'Uptime SLA' },
          { value: '24h', label: 'Avg Response' },
        ].map((stat) => (
          <View key={stat.label} style={styles.statCard}>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
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
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: COLORS.muted,
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
    maxWidth: 320,
  },

  // Story
  storyCard: {
    marginHorizontal: 16,
    backgroundColor: COLORS.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 24,
    marginBottom: 16,
  },
  storyTitle: {
    color: COLORS.foreground,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  storyText: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 10,
  },

  // Mission
  missionCard: {
    marginHorizontal: 16,
    marginBottom: 8,
  },
  missionGradient: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.primary + '25',
    padding: 24,
    alignItems: 'center',
    gap: 10,
  },
  missionTitle: {
    color: COLORS.foreground,
    fontSize: 20,
    fontWeight: '700',
  },
  missionText: {
    color: COLORS.muted,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
  },

  // Section
  section: {
    padding: 24,
  },
  sectionTitle: {
    color: COLORS.foreground,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
  },

  // Values
  valueCard: {
    flexDirection: 'row',
    gap: 14,
    backgroundColor: COLORS.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 16,
    marginBottom: 10,
  },
  valueIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueContent: {
    flex: 1,
  },
  valueTitle: {
    color: COLORS.foreground,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  valueDesc: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 18,
  },

  // Process
  processItem: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  processStepContainer: {
    alignItems: 'center',
    width: 40,
  },
  processStep: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  processStepText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  processLine: {
    width: 2,
    flex: 1,
    backgroundColor: COLORS.border,
    marginVertical: 4,
  },
  processContent: {
    flex: 1,
    paddingLeft: 14,
    paddingBottom: 24,
  },
  processTitle: {
    color: COLORS.foreground,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  processDesc: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 18,
  },

  // Stats
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 12,
  },
  statCard: {
    width: '47%' as any,
    backgroundColor: COLORS.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 20,
    alignItems: 'center',
  },
  statValue: {
    color: COLORS.primary,
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 4,
  },
  statLabel: {
    color: COLORS.muted,
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
});
