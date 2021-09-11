import { githubGraphqlApiEndpoint, GITHUB_TOKEN } from '$lib/constants'
import { createClient } from '@urql/core';

export const githubClient = createClient({
  url: githubGraphqlApiEndpoint,
  requestPolicy: 'network-only',
  fetchOptions: () => ({
    headers: {
      Authorization: GITHUB_TOKEN ? `Bearer ${GITHUB_TOKEN}` : '',
    },
  })
})
