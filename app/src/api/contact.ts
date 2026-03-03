/**
 * API service layer – communicates with the website's backend
 */

import { Platform } from 'react-native';

// Android emulator uses 10.0.2.2 to reach host machine's localhost
// iOS simulator and web can use localhost directly
function getApiBaseUrl(): string {
  if (Platform.OS === 'android') {
    return 'http://10.0.2.2:3000';
  }
  return 'http://localhost:3000';
}

export type ProjectType = 'Website' | 'SaaS Product' | 'Mobile App' | 'AI Integration';

export type ContactFormData = {
  name: string;
  email: string;
  projectType: ProjectType;
  message: string;
};

export type ApiResponse = {
  success: boolean;
  message: string;
};

export async function submitContactForm(data: ContactFormData): Promise<ApiResponse> {
  try {
    const response = await fetch(`${getApiBaseUrl()}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      return { success: true, message: result.message || 'Message sent successfully!' };
    }

    return { success: false, message: result.error || 'Failed to send message.' };
  } catch {
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.',
    };
  }
}

export function getCalendlyUrl(): string {
  return 'https://calendly.com/mishramanjeet26/30min';
}
