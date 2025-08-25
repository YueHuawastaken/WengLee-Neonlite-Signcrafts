import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68abce535bc4ed3fac46e4c3", 
  requiresAuth: true // Ensure authentication is required for all operations
});
