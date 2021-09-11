import type { getPinnedRepositories } from '$lib/api';
import type { Awaited } from './utils';

export type PinnedRepositories = Extract<
  NonNullable<
    NonNullable<
      Awaited<ReturnType<typeof getPinnedRepositories>>['data']['user']
    >['pinnedItems']['nodes']
  >[number],
  { id: string }
>[];
