import { getPinnedRepositories, getProfileInfo } from '$lib/api';
import { EMAIL, FULL_NAME, GITHUB_LOGIN } from '$lib/constants';
import type { PinnedRepositories } from '$types/common';
import xss from 'xss';

export async function get() {
  let pinnedRepositories: PinnedRepositories;
  try {
    const res = await getPinnedRepositories(GITHUB_LOGIN, 6);
    const data = res.data;
    pinnedRepositories =
      data?.user?.pinnedItems.nodes?.flatMap((node) => {
        if (node && 'id' in node) {
          // Github already purifies HTML for us,
          // we are doing it one more time just in case
          return { ...node, descriptionHTML: xss(node.descriptionHTML) };
        }
        return [];
      }) ?? [];
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }

  let name = FULL_NAME;
  let email = EMAIL;

  if (!name || !email) {
    try {
      const profileRes = await getProfileInfo(GITHUB_LOGIN);
      if (!name) {
        name = profileRes.data.user?.name || '';
      }
      if (!email) {
        email = profileRes.data.user?.email || '';
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  return {
    body: {
      name,
      email,
      pinnedRepositories
    }
  };
}
