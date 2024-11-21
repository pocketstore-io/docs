<script>
    import { writable } from "svelte/store";
    import { onMount } from "svelte";

    // Store to hold contributors
    export let contributors = writable([]);

    // GitHub API fetch function
    async function fetchContributors(owner, repo, token) {
        const url = `https://api.github.com/repos/${owner}/${repo}/contributors`;
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        try {
            const response = await fetch(url, { headers });
            if (!response.ok) {
                throw new Error(
                    `Error: ${response.status} ${response.statusText}`,
                );
            }

            let data = await response.json();
            data.push({
                login: "openai-chatgpt",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/14957082?s=200&v=4",
            });
            data = data.filter((contributor) =>
                ["dependabot[bot]", "openai-chatgpt","jonathan-martz"].includes(
                    contributor.login,
                ),
            );
            contributors.set(data); // Update the store
        } catch (error) {
            console.error("Failed to fetch contributors:", error);
        }
    }

    // Fetch on component mount
    onMount(() => {
        fetchContributors("pocketstore-io", "demo");
    });
</script>

<main>
    <h2 class="text-lg font-bold text-white mb-3">
        Contributors of PocketStore
    </h2>
    <div class="grid grid-cols-12 gap-3">
        <!-- Subscribe to the store -->
        {#each $contributors as contributor}
            <div class="col-span-16 md:col-span-2">
                <img src={contributor.avatar_url} alt={contributor.login} />
            </div>
        {/each}
    </div>
</main>
