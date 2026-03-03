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
import { teamMembers } from '../src/data';

const COLORS = {
  background: '#05070E',
  foreground: '#E2E8F0',
  muted: '#94A3B8',
  card: '#0F172A',
  border: '#1E293B',
  primary: '#3B82F6',
  cyan: '#22D3EE',
};

const MEMBER_COLORS = ['#3B82F6', '#22D3EE', '#38BDF8', '#8B5CF6'];

const CULTURE = [
  { title: 'Remote-first', icon: 'globe-outline' as const, desc: 'Work from anywhere, anytime' },
  { title: 'AI-first', icon: 'hardware-chip-outline' as const, desc: 'AI in everything we build' },
  { title: 'Product-first', icon: 'cube-outline' as const, desc: 'Users before technology' },
  { title: 'Fast execution', icon: 'flash-outline' as const, desc: 'Ship fast, learn faster' },
];

export default function TeamScreen() {
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
          <Ionicons name="people" size={12} color={COLORS.primary} />
          <Text style={styles.badgeText}>The Team</Text>
        </View>
        <Text style={styles.title}>Meet Our Team</Text>
        <Text style={styles.subtitle}>
          A small, focused team of engineers and builders who care deeply about shipping great products.
        </Text>
      </View>

      {/* Team Members */}
      {teamMembers.map((member, index) => (
        <TouchableOpacity
          key={member.slug}
          style={styles.memberCard}
          onPress={() => router.push({ pathname: '/team-profile', params: { slug: member.slug } })}
          activeOpacity={0.7}
        >
          {/* Avatar */}
          <View
            style={[
              styles.avatar,
              {
                backgroundColor: MEMBER_COLORS[index % MEMBER_COLORS.length] + '20',
                borderColor: MEMBER_COLORS[index % MEMBER_COLORS.length] + '40',
              },
            ]}
          >
            <Text
              style={[
                styles.avatarText,
                { color: MEMBER_COLORS[index % MEMBER_COLORS.length] },
              ]}
            >
              {member.initials}
            </Text>
          </View>

          {/* Info */}
          <View style={styles.memberInfo}>
            <Text style={styles.memberName}>{member.name}</Text>
            <Text style={styles.memberRole}>{member.role}</Text>
            <Text style={styles.memberIntro} numberOfLines={2}>
              {member.intro}
            </Text>

            {/* Skills */}
            <View style={styles.skillsRow}>
              {member.skills.slice(0, 3).map((skill) => (
                <View key={skill} style={styles.skillBadge}>
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              ))}
              {member.skills.length > 3 && (
                <View style={[styles.skillBadge, { backgroundColor: COLORS.primary + '15' }]}>
                  <Text style={[styles.skillText, { color: COLORS.primary }]}>
                    +{member.skills.length - 3}
                  </Text>
                </View>
              )}
            </View>
          </View>

          <Ionicons name="chevron-forward" size={20} color={COLORS.muted} />
        </TouchableOpacity>
      ))}

      {/* Culture */}
      <View style={styles.cultureSection}>
        <Text style={styles.cultureTitleMain}>Our Culture</Text>
        <View style={styles.cultureGrid}>
          {CULTURE.map((item) => (
            <View key={item.title} style={styles.cultureCard}>
              <Ionicons name={item.icon} size={24} color={COLORS.primary} />
              <Text style={styles.cultureTitle}>{item.title}</Text>
              <Text style={styles.cultureDesc}>{item.desc}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={{ height: 32 }} />
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

  // Member Card
  memberCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 12,
    backgroundColor: COLORS.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 16,
    gap: 14,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    color: COLORS.foreground,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 2,
  },
  memberRole: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 6,
  },
  memberIntro: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 8,
  },
  skillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  skillBadge: {
    backgroundColor: COLORS.border,
    borderRadius: 9999,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  skillText: {
    color: COLORS.muted,
    fontSize: 10,
    fontWeight: '600',
  },

  // Culture
  cultureSection: {
    padding: 24,
    paddingTop: 32,
  },
  cultureTitleMain: {
    color: COLORS.foreground,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
  },
  cultureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  cultureCard: {
    width: '47%' as any,
    backgroundColor: COLORS.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 16,
    gap: 8,
  },
  cultureTitle: {
    color: COLORS.foreground,
    fontSize: 14,
    fontWeight: '600',
  },
  cultureDesc: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 16,
  },
});
