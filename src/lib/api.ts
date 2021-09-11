import { githubApolloClient } from '$lib/githubApollo'
import { GITHUB_LOGIN } from './constants'
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
`

export async function getPinnedRepositories(
  githubLogin: PinnedRepositoriesQueryVariables['login'] = GITHUB_LOGIN,
  amount: PinnedRepositoriesQueryVariables['amount'] = 100
) {
  return githubApolloClient.query<PinnedRepositoriesQuery>(GET_PINNED_REPOSITORIES_QUERY, {login: githubLogin, amount}).toPromise()
}

const GET_PROFILE_INFO_QUERY = gql`
  query ProfileInfo($login: String!) {
    user(login: $login) {
      name
      email
      bioHTML
    }
  }
`

export async function getProfileInfo(
  githubLogin: ProfileInfoQueryVariables['login'] = GITHUB_LOGIN
) {
  return githubApolloClient.query<ProfileInfoQuery>(GET_PROFILE_INFO_QUERY, {login: githubLogin}).toPromise()
}
