/**
 * Get an environment variable with type safety
 * @param key - The environment variable key
 * @param defaultValue - Optional default value if the environment variable is not set
 * @throws Error if the environment variable is required but not set
 */
export const getEnvVar = (key: string, defaultValue?: string): string => {
  const value = process.env[key] ?? defaultValue;
  
  if (value === undefined) {
    throw new Error(`Environment variable ${key} is not set`);
  }

  return value;
};

/**
 * Get a public environment variable (NEXT_PUBLIC_*)
 * These are safe to use in the browser
 */
export const getPublicEnvVar = (key: string, defaultValue?: string): string => {
  if (!key.startsWith('NEXT_PUBLIC_')) {
    throw new Error(`Public environment variables must start with NEXT_PUBLIC_: ${key}`);
  }
  return getEnvVar(key, defaultValue);
};
