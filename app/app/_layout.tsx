import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';

type TabIconProps = { color: string; size: number };

const COLORS = {
  background: '#05070E',
  card: '#0B1220',
  border: '#1E293B',
  primary: '#3B82F6',
  muted: '#94A3B8',
  foreground: '#E2E8F0',
};

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.card,
            borderBottomWidth: 1,
            borderBottomColor: COLORS.border,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: COLORS.foreground,
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 18,
          },
          tabBarStyle: {
            backgroundColor: COLORS.card,
            borderTopWidth: 1,
            borderTopColor: COLORS.border,
            paddingBottom: 6,
            paddingTop: 6,
            height: 64,
          },
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.muted,
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            headerTitle: 'LilByte',
            tabBarIcon: ({ color, size }: TabIconProps) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="services"
          options={{
            title: 'Services',
            headerTitle: 'Our Services',
            tabBarIcon: ({ color, size }: TabIconProps) => (
              <Ionicons name="grid" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="team"
          options={{
            title: 'Team',
            headerTitle: 'Our Team',
            tabBarIcon: ({ color, size }: TabIconProps) => (
              <Ionicons name="people" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="contact"
          options={{
            title: 'Contact',
            headerTitle: 'Get in Touch',
            tabBarIcon: ({ color, size }: TabIconProps) => (
              <Ionicons name="mail" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="more"
          options={{
            title: 'More',
            headerTitle: 'More',
            tabBarIcon: ({ color, size }: TabIconProps) => (
              <Ionicons name="ellipsis-horizontal" size={size} color={color} />
            ),
          }}
        />
        {/* Hidden screens (accessible via navigation, not shown in tabs) */}
        <Tabs.Screen
          name="about"
          options={{
            href: null,
            headerTitle: 'About LilByte',
          }}
        />
        <Tabs.Screen
          name="faq"
          options={{
            href: null,
            headerTitle: 'FAQ',
          }}
        />
        <Tabs.Screen
          name="pricing"
          options={{
            href: null,
            headerTitle: 'Pricing',
          }}
        />
        <Tabs.Screen
          name="portfolio"
          options={{
            href: null,
            headerTitle: 'Our Work',
          }}
        />
        <Tabs.Screen
          name="team-profile"
          options={{
            href: null,
            headerTitle: 'Team Profile',
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05070E',
  },
});
