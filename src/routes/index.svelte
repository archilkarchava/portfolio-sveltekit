<script lang="ts" context="module">
  export async function load({ fetch }) {
    const url = `/index.json`
    const res = await fetch(url)

    if (res.ok) {
      return {
        props: await res.json()
      }
    }

    return {
      status: res.status,
      error: new Error(`Could not load ${url}`)
    }
  }
</script>

<script lang="ts">
  import githubIconUrl from '$assets/github.svg?url'
  import { GITHUB_LOGIN } from '$lib/constants'
  import type { PinnedRepositories } from '$types/common'

  export let name: string
  export let email: string
  export let pinnedRepositories: PinnedRepositories
</script>

<svelte:head>
  <title>{name}</title>
  <meta name="title" content={name} />
  <meta name="description" content="Portfolio" />
  <meta
    name="keywords"
    content="Software Engineer, Portfolio, Front-End, React, Svelte, Svelte-kit, Tailwind, HTML, CSS, JavaScript, TypeScript, Node, nodejs"
  />
  <meta name="author" content={name} />
</svelte:head>

<main class="flex flex-col w-full h-full">
  <div class="max-w-4xl p-5 m-auto">
    <div>
      <h1 class="text-4xl font-bold leading-tight sm:text-6xl">
        {name}
      </h1>
      <div class="flex items-center mt-1 text-2xl sm:mt-3 sm:text-4xl">
        <a href={`mailto:${email}`} class="mr-4">
          {email}
        </a>
        <a
          title="My Github"
          href={`https://github.com/${GITHUB_LOGIN}`}
          target="_blank"
          rel="noopener noreferrer"
          class="text-current hover:opacity-70"
        >
          <img alt="Github Icon" src={githubIconUrl} class="w-6 h-6 sm:w-9 sm:h-9" />
        </a>
      </div>
    </div>
    {#if pinnedRepositories.length}
      <div class="mt-8">
        <h2 class="mb-2 text-2xl">Some of my projects:</h2>
        <ol class="flex flex-wrap -m-2">
          {#each pinnedRepositories as repo}
            <li
              class="flex-grow w-full p-4 m-2 border border-gray-300 rounded-lg md:w-5/12 dark:border-gray-700"
            >
              <div>
                <div class="flex flex-row">
                  {#if repo.homepageUrl}
                    <div class="flex flex-col items-start mr-2 text-lg font-semibold">
                      <span>website: </span>
                      <span>code: </span>
                    </div>
                  {/if}
                  <div class="flex flex-col flex-grow text-lg font-semibold">
                    {#if repo.homepageUrl}
                      <a href={repo.homepageUrl} target="_blank" rel="noopener noreferrer">
                        <span>{repo.homepageUrl}</span>
                      </a>
                    {/if}
                    <a href={repo.url} target="_blank" rel="noopener noreferrer">
                      <span title={repo.name}>{repo.name}</span>
                    </a>
                  </div>
                </div>
                {#if repo.descriptionHTML}
                  <div>{@html repo.descriptionHTML}</div>
                {/if}
              </div>
            </li>
          {/each}
        </ol>
      </div>
    {/if}
  </div>
</main>
