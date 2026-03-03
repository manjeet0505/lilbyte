import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { submitContactForm, getCalendlyUrl } from '../src/api';
import type { ProjectType } from '../src/api';

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
  error: '#EF4444',
  success: '#22C55E',
};

const PROJECT_TYPES: ProjectType[] = ['Website', 'SaaS Product', 'Mobile App', 'AI Integration'];

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState<ProjectType>('Website');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      Alert.alert('Missing Fields', 'Please fill in all fields before sending.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    setLoading(true);
    try {
      const result = await submitContactForm({
        name: name.trim(),
        email: email.trim(),
        projectType,
        message: message.trim(),
      });

      if (result.success) {
        setSent(true);
        setName('');
        setEmail('');
        setProjectType('Website');
        setMessage('');
      } else {
        Alert.alert('Error', result.message);
      }
    } catch {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const openCalendly = () => {
    Linking.openURL(getCalendlyUrl());
  };

  const openEmail = () => {
    Linking.openURL('mailto:lilbyteorg@gmail.com');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.badge}>
            <Ionicons name="mail" size={12} color={COLORS.primary} />
            <Text style={styles.badgeText}>Contact Us</Text>
          </View>
          <Text style={styles.title}>Let's Build Together</Text>
          <Text style={styles.subtitle}>
            Have a project in mind? Send us a message or book a free consultation call.
          </Text>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionCard} onPress={openCalendly} activeOpacity={0.7}>
            <View style={[styles.actionIcon, { backgroundColor: COLORS.primary + '15' }]}>
              <Ionicons name="calendar-outline" size={24} color={COLORS.primary} />
            </View>
            <Text style={styles.actionTitle}>Book a Call</Text>
            <Text style={styles.actionDesc}>Free 30-min consultation</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard} onPress={openEmail} activeOpacity={0.7}>
            <View style={[styles.actionIcon, { backgroundColor: COLORS.cyan + '15' }]}>
              <Ionicons name="mail-outline" size={24} color={COLORS.cyan} />
            </View>
            <Text style={styles.actionTitle}>Email Us</Text>
            <Text style={styles.actionDesc}>lilbyteorg@gmail.com</Text>
          </TouchableOpacity>
        </View>

        {/* Success State */}
        {sent ? (
          <View style={styles.successCard}>
            <Ionicons name="checkmark-circle" size={48} color={COLORS.success} />
            <Text style={styles.successTitle}>Message Sent!</Text>
            <Text style={styles.successDesc}>
              Thank you for reaching out. We'll get back to you within 24 hours.
            </Text>
            <TouchableOpacity
              style={styles.resetButton}
              onPress={() => setSent(false)}
              activeOpacity={0.7}
            >
              <Text style={styles.resetButtonText}>Send Another Message</Text>
            </TouchableOpacity>
          </View>
        ) : (
          /* Contact Form */
          <View style={styles.formCard}>
            <Text style={styles.formTitle}>Send a Message</Text>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Your Name</Text>
              <TextInput
                style={styles.input}
                placeholder="John Doe"
                placeholderTextColor={COLORS.muted + '80'}
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
                autoCorrect={false}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email Address</Text>
              <TextInput
                style={styles.input}
                placeholder="john@startup.com"
                placeholderTextColor={COLORS.muted + '80'}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Project Type</Text>
              <View style={styles.projectTypeRow}>
                {PROJECT_TYPES.map((type) => (
                  <TouchableOpacity
                    key={type}
                    style={[
                      styles.projectTypeChip,
                      projectType === type && styles.projectTypeChipActive,
                    ]}
                    onPress={() => setProjectType(type)}
                    activeOpacity={0.7}
                  >
                    <Text
                      style={[
                        styles.projectTypeText,
                        projectType === type && styles.projectTypeTextActive,
                      ]}
                    >
                      {type}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Your Message</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Tell us about your project, goals, and timeline..."
                placeholderTextColor={COLORS.muted + '80'}
                value={message}
                onChangeText={setMessage}
                multiline
                numberOfLines={5}
                textAlignVertical="top"
              />
            </View>

            <TouchableOpacity
              style={[styles.submitButton, loading && styles.submitButtonLoading]}
              onPress={handleSubmit}
              disabled={loading}
              activeOpacity={0.8}
            >
              {loading ? (
                <Text style={styles.submitButtonText}>Sending...</Text>
              ) : (
                <>
                  <Text style={styles.submitButtonText}>Send Message</Text>
                  <Ionicons name="send" size={16} color={COLORS.primaryForeground} />
                </>
              )}
            </TouchableOpacity>
          </View>
        )}

        {/* Info Cards */}
        <View style={styles.infoSection}>
          <View style={styles.infoCard}>
            <Ionicons name="time-outline" size={20} color={COLORS.primary} />
            <View>
              <Text style={styles.infoTitle}>Response Time</Text>
              <Text style={styles.infoDesc}>Usually within 24 hours</Text>
            </View>
          </View>

          <View style={styles.infoCard}>
            <Ionicons name="shield-checkmark-outline" size={20} color={COLORS.primary} />
            <View>
              <Text style={styles.infoTitle}>No Obligation</Text>
              <Text style={styles.infoDesc}>Free consultation, no strings attached</Text>
            </View>
          </View>

          <View style={styles.infoCard}>
            <Ionicons name="lock-closed-outline" size={20} color={COLORS.primary} />
            <View>
              <Text style={styles.infoTitle}>Confidential</Text>
              <Text style={styles.infoDesc}>Your ideas are safe with us</Text>
            </View>
          </View>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </KeyboardAvoidingView>
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

  // Quick Actions
  quickActions: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 12,
    marginBottom: 24,
  },
  actionCard: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 16,
    alignItems: 'center',
    gap: 8,
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionTitle: {
    color: COLORS.foreground,
    fontSize: 14,
    fontWeight: '600',
  },
  actionDesc: {
    color: COLORS.muted,
    fontSize: 11,
    textAlign: 'center',
  },

  // Success
  successCard: {
    marginHorizontal: 16,
    backgroundColor: COLORS.card,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.success + '30',
    padding: 32,
    alignItems: 'center',
    gap: 12,
  },
  successTitle: {
    color: COLORS.foreground,
    fontSize: 22,
    fontWeight: '700',
  },
  successDesc: {
    color: COLORS.muted,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
  resetButton: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 9999,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  resetButtonText: {
    color: COLORS.foreground,
    fontSize: 14,
    fontWeight: '500',
  },

  // Form
  formCard: {
    marginHorizontal: 16,
    backgroundColor: COLORS.card,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 24,
  },
  formTitle: {
    color: COLORS.foreground,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    color: COLORS.foreground,
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 6,
  },
  input: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: COLORS.foreground,
    fontSize: 15,
  },
  textArea: {
    minHeight: 120,
    paddingTop: 14,
  },
  projectTypeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  projectTypeChip: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 9999,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  projectTypeChipActive: {
    backgroundColor: COLORS.primary + '20',
    borderColor: COLORS.primary,
  },
  projectTypeText: {
    color: COLORS.muted,
    fontSize: 13,
    fontWeight: '500',
  },
  projectTypeTextActive: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: COLORS.primary,
    borderRadius: 9999,
    paddingVertical: 16,
    marginTop: 8,
  },
  submitButtonLoading: {
    opacity: 0.7,
  },
  submitButtonText: {
    color: COLORS.primaryForeground,
    fontSize: 16,
    fontWeight: '600',
  },

  // Info
  infoSection: {
    paddingHorizontal: 16,
    marginTop: 24,
    gap: 10,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: COLORS.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 16,
  },
  infoTitle: {
    color: COLORS.foreground,
    fontSize: 14,
    fontWeight: '600',
  },
  infoDesc: {
    color: COLORS.muted,
    fontSize: 12,
  },
});
