import { githubClient } from '$lib/githubClient';
import { GITHUB_LOGIN } from './constants';
import { gql } from '@urql/core';

const GET_PINNED_REPOSITORIES_QUERY = gql`
  query PinnedRepositories($login: String!, $amount: Int!) {
    user(login: $login) {
      pinnedItems(first: $amount, types: REPOSITORY) {
        nodes {
          ... on Repository {
            id
            name
            descriptionHTML
            url
            homepageUrl
          }
        }
      }
    }
  }
`;

export async function getPinnedRepositories(
  githubLogin: PinnedRepositoriesQueryVariables['login'] = GITHUB_LOGIN,
  amount: PinnedRepositoriesQueryVariables['amount'] = 100
) {
  return githubClient
    .query<PinnedRepositoriesQuery>(GET_PINNED_REPOSITORIES_QUERY, { login: githubLogin, amount })
    .toPromise();
}

const GET_PROFILE_INFO_QUERY = gql`
  query ProfileInfo($login: String!) {
    user(login: $login) {
      name
      email
      bioHTML
    }
  }
`;

export async function getProfileInfo(
  githubLogin: ProfileInfoQueryVariables['login'] = GITHUB_LOGIN
) {
  return githubClient
    .query<ProfileInfoQuery>(GET_PROFILE_INFO_QUERY, { login: githubLogin })
    .toPromise();
}
