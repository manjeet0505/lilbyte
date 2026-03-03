import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const COLORS = {
  background: '#05070E',
  foreground: '#E2E8F0',
  muted: '#94A3B8',
  card: '#0F172A',
  surface: '#0B1220',
  border: '#1E293B',
  primary: '#3B82F6',
  primaryForeground: '#05070E',
  cyan: '#22D3EE',
};

const QUICK_STATS = [
  { label: 'Projects', value: '50+', icon: 'rocket-outline' as const },
  { label: 'Clients', value: '30+', icon: 'people-outline' as const },
  { label: 'AI Systems', value: '15+', icon: 'hardware-chip-outline' as const },
  { label: 'Uptime', value: '99.9%', icon: 'shield-checkmark-outline' as const },
];

const SERVICES_PREVIEW = [
  { title: 'Startup Websites', icon: 'globe-outline' as const, color: '#3B82F6' },
  { title: 'AI Automation', icon: 'hardware-chip-outline' as const, color: '#22D3EE' },
  { title: 'SaaS Platforms', icon: 'bar-chart-outline' as const, color: '#38BDF8' },
  { title: 'Mobile Apps', icon: 'phone-portrait-outline' as const, color: '#22C55E' },
];

const TECH_STACK = [
  'Next.js', 'React', 'Node.js', 'MongoDB', 'OpenAI', 'Stripe', 'React Native', 'AWS', 'Docker',
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Image
          source={require('../assets/dinosaur-logo.png')}
          style={styles.heroLogo}
          resizeMode="contain"
        />

        <View style={styles.heroBadge}>
          <Ionicons name="sparkles" size={12} color={COLORS.primary} />
          <Text style={styles.heroBadgeText}>AI-Powered Tech Studio</Text>
        </View>

        <Text style={styles.heroTitle}>
          We Build{'\n'}
          <Text style={styles.heroTitleAccent}>Digital Products</Text>
          {'\n'}for Startups
        </Text>

        <Text style={styles.heroSubtitle}>
          From idea to launch — AI-powered SaaS, dashboards, websites, and mobile apps built for growth.
        </Text>

        <View style={styles.heroButtons}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.push('/contact')}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>Start a Project</Text>
            <Ionicons name="arrow-forward" size={16} color={COLORS.primaryForeground} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.outlineButton}
            onPress={() => router.push('/portfolio')}
            activeOpacity={0.7}
          >
            <Text style={styles.outlineButtonText}>View Our Work</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Quick Stats */}
      <View style={styles.statsRow}>
        {QUICK_STATS.map((stat) => (
          <View key={stat.label} style={styles.statItem}>
            <Ionicons name={stat.icon} size={20} color={COLORS.primary} />
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>

      {/* Services Preview */}
      <View style={styles.section}>
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>What We Build</Text>
          <TouchableOpacity onPress={() => router.push('/services')} activeOpacity={0.7}>
            <Text style={styles.seeAll}>See all →</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.servicesGrid}>
          {SERVICES_PREVIEW.map((service) => (
            <TouchableOpacity
              key={service.title}
              style={styles.serviceCard}
              onPress={() => router.push('/services')}
              activeOpacity={0.7}
            >
              <View style={[styles.serviceIcon, { backgroundColor: service.color + '15' }]}>
                <Ionicons name={service.icon} size={24} color={service.color} />
              </View>
              <Text style={styles.serviceTitle}>{service.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Workflow Preview */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>How We Work</Text>
        <Text style={styles.sectionSubtitle}>Our 5-step process from idea to launch</Text>

        {[
          { step: '01', title: 'Product Discovery', desc: 'Understanding your vision and market' },
          { step: '02', title: 'Architecture & Design', desc: 'Planning the technical blueprint' },
          { step: '03', title: 'Agile Development', desc: 'Iterative sprints with continuous feedback' },
          { step: '04', title: 'AI & Automation', desc: 'Integrating intelligence into your product' },
          { step: '05', title: 'Launch & Scale', desc: 'Deploying and growing your product' },
        ].map((item, index) => (
          <View key={item.step} style={styles.workflowItem}>
            <View style={styles.workflowStepContainer}>
              <LinearGradient
                colors={[COLORS.primary, COLORS.cyan]}
                style={styles.workflowStepBg}
              >
                <Text style={styles.workflowStep}>{item.step}</Text>
              </LinearGradient>
              {index < 4 && <View style={styles.workflowLine} />}
            </View>
            <View style={styles.workflowContent}>
              <Text style={styles.workflowTitle}>{item.title}</Text>
              <Text style={styles.workflowDesc}>{item.desc}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Tech Stack */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tech Stack</Text>
        <View style={styles.techGrid}>
          {TECH_STACK.map((tech) => (
            <View key={tech} style={styles.techBadge}>
              <Text style={styles.techText}>{tech}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* CTA */}
      <View style={styles.ctaSection}>
        <LinearGradient
          colors={[COLORS.primary + '20', COLORS.cyan + '10', 'transparent']}
          style={styles.ctaGradient}
        >
          <Ionicons name="rocket" size={36} color={COLORS.primary} style={{ marginBottom: 12 }} />
          <Text style={styles.ctaTitle}>Ready to Build?</Text>
          <Text style={styles.ctaSubtitle}>
            Let's turn your idea into a product. Book a free 30-minute consultation.
          </Text>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.push('/contact')}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>Book Free Call</Text>
            <Ionicons name="calendar-outline" size={16} color={COLORS.primaryForeground} />
          </TouchableOpacity>
        </LinearGradient>
      </View>

      {/* Quick Links */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Explore</Text>
        {[
          { title: 'About Us', icon: 'information-circle-outline' as const, route: '/about' as const },
          { title: 'Our Team', icon: 'people-outline' as const, route: '/team' as const },
          { title: 'Pricing', icon: 'pricetag-outline' as const, route: '/pricing' as const },
          { title: 'FAQ', icon: 'help-circle-outline' as const, route: '/faq' as const },
        ].map((link) => (
          <TouchableOpacity
            key={link.title}
            style={styles.quickLink}
            onPress={() => router.push(link.route)}
            activeOpacity={0.7}
          >
            <Ionicons name={link.icon} size={22} color={COLORS.primary} />
            <Text style={styles.quickLinkText}>{link.title}</Text>
            <Ionicons name="chevron-forward" size={18} color={COLORS.muted} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerBrand}>LilByte Tech Studio</Text>
        <Text style={styles.footerText}>AI-powered products for startups</Text>
        <Text style={styles.footerCopy}>© 2026 LilByte. All rights reserved.</Text>
      </View>
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

  // Hero
  heroSection: {
    padding: 24,
    paddingTop: 20,
    alignItems: 'center',
  },
  heroLogo: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  heroBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: COLORS.primary + '15',
    borderWidth: 1,
    borderColor: COLORS.primary + '30',
    borderRadius: 9999,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginBottom: 20,
  },
  heroBadgeText: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  heroTitle: {
    color: COLORS.foreground,
    fontSize: 36,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 44,
    marginBottom: 16,
  },
  heroTitleAccent: {
    color: COLORS.primary,
  },
  heroSubtitle: {
    color: COLORS.muted,
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 28,
    maxWidth: 320,
  },
  heroButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 9999,
  },
  primaryButtonText: {
    color: COLORS.primaryForeground,
    fontSize: 15,
    fontWeight: '600',
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 9999,
  },
  outlineButtonText: {
    color: COLORS.foreground,
    fontSize: 15,
    fontWeight: '500',
  },

  // Stats
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginHorizontal: 16,
    backgroundColor: COLORS.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  statItem: {
    alignItems: 'center',
    gap: 4,
  },
  statValue: {
    color: COLORS.foreground,
    fontSize: 20,
    fontWeight: '700',
  },
  statLabel: {
    color: COLORS.muted,
    fontSize: 11,
    fontWeight: '500',
  },

  // Section
  section: {
    padding: 24,
    paddingTop: 32,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    color: COLORS.foreground,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 6,
  },
  sectionSubtitle: {
    color: COLORS.muted,
    fontSize: 14,
    marginBottom: 20,
    lineHeight: 20,
  },
  seeAll: {
    color: COLORS.primary,
    fontSize: 13,
    fontWeight: '600',
  },

  // Services Grid
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  serviceCard: {
    width: (width - 60) / 2,
    backgroundColor: COLORS.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 20,
    alignItems: 'center',
    gap: 12,
  },
  serviceIcon: {
    width: 52,
    height: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceTitle: {
    color: COLORS.foreground,
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },

  // Workflow
  workflowItem: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  workflowStepContainer: {
    alignItems: 'center',
    width: 44,
  },
  workflowStepBg: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  workflowStep: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  workflowLine: {
    width: 2,
    flex: 1,
    backgroundColor: COLORS.border,
    marginVertical: 4,
  },
  workflowContent: {
    flex: 1,
    paddingLeft: 14,
    paddingBottom: 24,
  },
  workflowTitle: {
    color: COLORS.foreground,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  workflowDesc: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 18,
  },

  // Tech Stack
  techGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 8,
  },
  techBadge: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 9999,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  techText: {
    color: COLORS.foreground,
    fontSize: 13,
    fontWeight: '500',
  },

  // CTA
  ctaSection: {
    padding: 24,
  },
  ctaGradient: {
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.primary + '30',
  },
  ctaTitle: {
    color: COLORS.foreground,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },
  ctaSubtitle: {
    color: COLORS.muted,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
    maxWidth: 280,
  },

  // Quick Links
  quickLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
  },
  quickLinkText: {
    flex: 1,
    color: COLORS.foreground,
    fontSize: 15,
    fontWeight: '500',
  },

  // Footer
  footer: {
    alignItems: 'center',
    padding: 32,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    marginTop: 12,
  },
  footerBrand: {
    color: COLORS.foreground,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  footerText: {
    color: COLORS.muted,
    fontSize: 13,
    marginBottom: 8,
  },
  footerCopy: {
    color: COLORS.muted,
    fontSize: 11,
  },
});
