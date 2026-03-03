import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, FontSize, Spacing } from '../../theme';

type Props = {
  title: string;
  subtitle?: string;
  badge?: string;
};

export function SectionHeader({ title, subtitle, badge }: Props) {
  return (
    <View style={styles.container}>
      {badge && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badge}>{badge}</Text>
        </View>
      )}
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: Spacing.xl,
    paddingHorizontal: Spacing.md,
  },
  badgeContainer: {
    backgroundColor: Colors.primary + '15',
    borderWidth: 1,
    borderColor: Colors.primary + '30',
    borderRadius: 9999,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs + 1,
    marginBottom: Spacing.md,
  },
  badge: {
    color: Colors.primary,
    fontSize: FontSize.xs,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  title: {
    color: Colors.foreground,
    fontSize: FontSize.xxl,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  subtitle: {
    color: Colors.muted,
    fontSize: FontSize.md,
    textAlign: 'center',
    lineHeight: 22,
    maxWidth: 340,
  },
});
