import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { getTeamMemberBySlug } from '../src/data';

const COLORS = {
  background: '#05070E',
  foreground: '#E2E8F0',
  muted: '#94A3B8',
  card: '#0F172A',
  surface: '#0B1220',
  border: '#1E293B',
  primary: '#3B82F6',
  cyan: '#22D3EE',
};

export default function TeamProfileScreen() {
  const router = useRouter();
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const member = slug ? getTeamMemberBySlug(slug) : null;

  if (!member) {
    return (
      <View style={[styles.container, styles.centered]}>
        <Ionicons name="person-outline" size={48} color={COLORS.muted} />
        <Text style={styles.emptyText}>Team member not found</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Back Button */}
      <TouchableOpacity
        style={styles.navBack}
        onPress={() => router.back()}
        activeOpacity={0.7}
      >
        <Ionicons name="arrow-back" size={20} color={COLORS.foreground} />
        <Text style={styles.navBackText}>Back</Text>
      </TouchableOpacity>

      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{member.initials}</Text>
        </View>
        <Text style={styles.name}>{member.name}</Text>
        <Text style={styles.role}>{member.role}</Text>

        {/* Social Links */}
        <View style={styles.socialRow}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => Linking.openURL(member.linkedin)}
            activeOpacity={0.7}
          >
            <Ionicons name="logo-linkedin" size={18} color={COLORS.primary} />
            <Text style={styles.socialText}>LinkedIn</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => Linking.openURL(member.github)}
            activeOpacity={0.7}
          >
            <Ionicons name="logo-github" size={18} color={COLORS.foreground} />
            <Text style={styles.socialText}>GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => Linking.openURL(`mailto:${member.email}`)}
            activeOpacity={0.7}
          >
            <Ionicons name="mail-outline" size={18} color={COLORS.cyan} />
            <Text style={styles.socialText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bio */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <View style={styles.card}>
          <Text style={styles.bioText}>{member.bio}</Text>
        </View>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.tagsRow}>
          {member.skills.map((skill) => (
            <View key={skill} style={styles.skillTag}>
              <Text style={styles.skillTagText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* What They Build */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What They Build</Text>
        <View style={styles.card}>
          {member.whatTheyBuild.map((item) => (
            <View key={item} style={styles.listItem}>
              <Ionicons name="code-slash-outline" size={16} color={COLORS.primary} />
              <Text style={styles.listText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Tools */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tools & Technologies</Text>
        <View style={styles.tagsRow}>
          {member.tools.map((tool) => (
            <View key={tool} style={[styles.skillTag, { borderColor: COLORS.cyan + '40', backgroundColor: COLORS.cyan + '10' }]}>
              <Text style={[styles.skillTagText, { color: COLORS.cyan }]}>{tool}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Highlights */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Highlights</Text>
        <View style={styles.card}>
          {member.highlights.map((h) => (
            <View key={h} style={styles.listItem}>
              <Ionicons name="star" size={14} color="#F59E0B" />
              <Text style={styles.listText}>{h}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Fun Line */}
      {member.funLine && (
        <View style={styles.funCard}>
          <Ionicons name="sparkles" size={20} color={COLORS.primary} />
          <Text style={styles.funText}>{member.funLine}</Text>
        </View>
      )}

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  content: {
    paddingBottom: 40,
  },
  emptyText: {
    color: COLORS.muted,
    fontSize: 16,
  },
  backButton: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 9999,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backButtonText: {
    color: COLORS.foreground,
    fontSize: 14,
    fontWeight: '500',
  },

  // Nav
  navBack: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    padding: 16,
    paddingBottom: 8,
  },
  navBackText: {
    color: COLORS.foreground,
    fontSize: 15,
    fontWeight: '500',
  },

  // Profile Header
  profileHeader: {
    alignItems: 'center',
    padding: 24,
    paddingTop: 8,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: COLORS.primary + '20',
    borderWidth: 3,
    borderColor: COLORS.primary + '40',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  avatarText: {
    color: COLORS.primary,
    fontSize: 32,
    fontWeight: '700',
  },
  name: {
    color: COLORS.foreground,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 4,
  },
  role: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16,
  },
  socialRow: {
    flexDirection: 'row',
    gap: 12,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 9999,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  socialText: {
    color: COLORS.foreground,
    fontSize: 12,
    fontWeight: '500',
  },

  // Section
  section: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    color: COLORS.foreground,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 18,
  },
  bioText: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 22,
  },

  // Tags
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillTag: {
    backgroundColor: COLORS.primary + '15',
    borderWidth: 1,
    borderColor: COLORS.primary + '30',
    borderRadius: 9999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  skillTagText: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: '600',
  },

  // List
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 10,
  },
  listText: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 20,
    flex: 1,
  },

  // Fun
  funCard: {
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: COLORS.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.primary + '25',
    padding: 18,
  },
  funText: {
    color: COLORS.muted,
    fontSize: 14,
    fontStyle: 'italic',
    flex: 1,
    lineHeight: 20,
  },
});
