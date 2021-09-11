import { githubGraphqlApiEndpoint, GITHUB_TOKEN } from '$lib/constants'
import { createClient } from '@urql/svelte';

export const githubApolloClient = createClient({
  url: githubGraphqlApiEndpoint,
  requestPolicy: 'network-only',
  fetchOptions: () => ({
    headers: {
      Authorization: GITHUB_TOKEN ? `Bearer ${GITHUB_TOKEN}` : '',
    },
  })
})
