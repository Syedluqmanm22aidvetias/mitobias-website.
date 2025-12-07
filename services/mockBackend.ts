import { ContactSubmission } from '../types';

// Keys for LocalStorage
const STORAGE_KEY_MESSAGES = 'mitobias_messages';
const STORAGE_KEY_ADMIN_SESSION = 'mitobias_admin_session';
const STORAGE_KEY_ADMIN_CREDS = 'mitobias_admin_creds';

// Dummy SMTP Logic
const sendEmailNotification = (submission: ContactSubmission) => {
  console.log(`
    [MOCK SMTP SERVER]
    To: mitobiastech@gmail.com
    Subject: New Lead from ${submission.name}
    ----------------------------------------
    Name: ${submission.name}
    Company: ${submission.company || 'N/A'}
    Phone: ${submission.phone}
    Email: ${submission.email}
    Message: ${submission.message}
    Timestamp: ${submission.timestamp}
    ----------------------------------------
    Status: Sent successfully.
  `);
};

export const MockBackend = {
  // --- Contact Form Logic ---
  submitContactForm: async (data: Omit<ContactSubmission, 'id' | 'timestamp'>): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const currentMessages: ContactSubmission[] = JSON.parse(localStorage.getItem(STORAGE_KEY_MESSAGES) || '[]');
        
        const newSubmission: ContactSubmission = {
          ...data,
          id: Math.random().toString(36).substr(2, 9),
          timestamp: new Date().toISOString(),
        };

        currentMessages.push(newSubmission);
        localStorage.setItem(STORAGE_KEY_MESSAGES, JSON.stringify(currentMessages));
        
        // Simulate sending email
        sendEmailNotification(newSubmission);
        
        resolve(true);
      }, 800); // Simulate network delay
    });
  },

  getMessages: async (): Promise<ContactSubmission[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
         const messages = JSON.parse(localStorage.getItem(STORAGE_KEY_MESSAGES) || '[]');
         // Sort by newest first
         resolve(messages.reverse());
      }, 300);
    });
  },

  deleteMessage: async (id: string): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const messages: ContactSubmission[] = JSON.parse(localStorage.getItem(STORAGE_KEY_MESSAGES) || '[]');
        const filtered = messages.filter(m => m.id !== id);
        localStorage.setItem(STORAGE_KEY_MESSAGES, JSON.stringify(filtered));
        resolve();
      }, 200);
    });
  },

  // --- Admin Auth Logic ---
  login: async (username: string, pass: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Get stored creds or use default
        const storedCreds = JSON.parse(localStorage.getItem(STORAGE_KEY_ADMIN_CREDS) || '{"username":"admin","password":"admin123"}');
        
        if (username === storedCreds.username && pass === storedCreds.password) {
          localStorage.setItem(STORAGE_KEY_ADMIN_SESSION, 'true');
          resolve(true);
        } else {
          resolve(false);
        }
      }, 500);
    });
  },

  updateCredentials: async (username: string, pass: string): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            localStorage.setItem(STORAGE_KEY_ADMIN_CREDS, JSON.stringify({ username, password: pass }));
            resolve();
        }, 500);
    });
  },

  isAuthenticated: (): boolean => {
    return localStorage.getItem(STORAGE_KEY_ADMIN_SESSION) === 'true';
  },

  logout: () => {
    localStorage.removeItem(STORAGE_KEY_ADMIN_SESSION);
  }
};