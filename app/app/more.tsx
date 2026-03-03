import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const COLORS = {
  background: '#05070E',
  foreground: '#E2E8F0',
  muted: '#94A3B8',
  card: '#0F172A',
  border: '#1E293B',
  primary: '#3B82F6',
  cyan: '#22D3EE',
};

type MenuItem = {
  title: string;
  icon: string;
  route?: string;
  external?: string;
};

type MenuSection = {
  section: string;
  items: MenuItem[];
};

const MENU_ITEMS: MenuSection[] = [
  {
    section: 'Company',
    items: [
      { title: 'About Us', icon: 'information-circle-outline', route: '/about' },
      { title: 'Our Team', icon: 'people-outline', route: '/team' },
      { title: 'Our Work / Portfolio', icon: 'briefcase-outline', route: '/portfolio' },
    ],
  },
  {
    section: 'Product',
    items: [
      { title: 'Services', icon: 'grid-outline', route: '/services' },
      { title: 'Pricing', icon: 'pricetag-outline', route: '/pricing' },
      { title: 'FAQ', icon: 'help-circle-outline', route: '/faq' },
    ],
  },
  {
    section: 'Connect',
    items: [
      { title: 'Contact Us', icon: 'mail-outline', route: '/contact' },
      { title: 'Book a Call', icon: 'calendar-outline', external: 'https://calendly.com/mishramanjeet26/30min' },
      { title: 'LinkedIn', icon: 'logo-linkedin', external: 'https://www.linkedin.com/in/manjeet-mishra-175705260/' },
    ],
  },
];

export default function MoreScreen() {
  const router = useRouter();

  const handlePress = (item: { route?: string; external?: string }) => {
    if (item.external) {
      Linking.openURL(item.external);
    } else if (item.route) {
      router.push(item.route as any);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Brand Header */}
      <View style={styles.brandCard}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/dinosaur-logo.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.brandName}>LilByte Tech Studio</Text>
        <Text style={styles.brandDesc}>AI-powered products for startups</Text>
      </View>

      {/* Menu Sections */}
      {MENU_ITEMS.map((section) => (
        <View key={section.section} style={styles.menuSection}>
          <Text style={styles.sectionLabel}>{section.section}</Text>
          <View style={styles.menuGroup}>
            {section.items.map((item, index) => (
              <TouchableOpacity
                key={item.title}
                style={[
                  styles.menuItem,
                  index < section.items.length - 1 && styles.menuItemBorder,
                ]}
                onPress={() => handlePress(item)}
                activeOpacity={0.7}
              >
                <Ionicons name={item.icon as any} size={20} color={COLORS.primary} />
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Ionicons
                  name={item.external ? 'open-outline' : 'chevron-forward'}
                  size={16}
                  color={COLORS.muted}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}

      {/* Version */}
      <View style={styles.versionInfo}>
        <Text style={styles.versionText}>LilByte App v1.0.0</Text>
        <Text style={styles.versionText}>© 2026 LilByte. All rights reserved.</Text>
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

  // Brand
  brandCard: {
    alignItems: 'center',
    padding: 32,
    paddingBottom: 24,
  },
  logoContainer: {
    width: 72,
    height: 72,
    borderRadius: 20,
    backgroundColor: COLORS.primary + '20',
    borderWidth: 2,
    borderColor: COLORS.primary + '40',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    overflow: 'hidden',
  },
  logoImage: {
    width: 56,
    height: 56,
  },
  brandName: {
    color: COLORS.foreground,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  brandDesc: {
    color: COLORS.muted,
    fontSize: 13,
  },

  // Menu
  menuSection: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  sectionLabel: {
    color: COLORS.muted,
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
    marginLeft: 4,
  },
  menuGroup: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    padding: 16,
  },
  menuItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  menuTitle: {
    flex: 1,
    color: COLORS.foreground,
    fontSize: 15,
    fontWeight: '500',
  },

  // Version
  versionInfo: {
    alignItems: 'center',
    padding: 24,
    gap: 4,
  },
  versionText: {
    color: COLORS.muted,
    fontSize: 11,
  },
});
