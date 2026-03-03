import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Colors, Spacing, FontSize, BorderRadius } from '../../theme';

type Props = {
  label: string;
  color?: string;
  style?: ViewStyle;
};

export function Badge({ label, color = Colors.primary, style }: Props) {
  return (
    <View style={[styles.badge, { backgroundColor: color + '20', borderColor: color + '40' }, style]}>
      <Text style={[styles.text, { color }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: Spacing.sm + 2,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: FontSize.xs,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});
