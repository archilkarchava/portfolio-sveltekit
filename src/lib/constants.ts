export const githubGraphqlApiEndpoint =
  (import.meta.env.VITE_GITHUB_GRAPHQL_API_ENDPOINT as string) || 'https://api.github.com/graphql';

export const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN as string;

export const FULL_NAME = (import.meta.env.VITE_PUBLIC_FULL_NAME as string) || '';

export const EMAIL = (import.meta.env.VITE_PUBLIC_CONTACT_EMAIL as string) || '';

export const GITHUB_LOGIN =
  (import.meta.env.VITE_PUBLIC_GITHUB_LOGIN as string) || 'archilkarchava';
