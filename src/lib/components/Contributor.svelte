<script>
    import { get, writable } from "svelte/store";
    import { onMount } from "svelte";

    // Store to hold contributors
    export let contributors = writable([]);
    export let counter = writable([]);

    // GitHub API fetch function
    async function fetchContributors(owner, repo, token) {
        const url = `https://api.github.com/repos/${owner}/${repo}/contributors`;
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        if (
            localStorage.getItem("contributors") === null &&
            localStorage.getItem("contributors-date") !==
                new Date().toLocaleDateString()
        ) {
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
                localStorage.setItem("contributors", data.length);
                counter.set(data.length);
                data = data.filter((contributor) =>
                    [
                        "dependabot[bot]",
                        "openai-chatgpt",
                        "jonathan-martz",
                    ].includes(contributor.login),
                );
                contributors.set(data); // Update the store
                localStorage.setItem("contributors", JSON.stringify(data));
                localStorage.setItem(
                    "contributors-date",
                    new Date().toLocaleDateString(),
                );
            } catch (error) {
                console.error("Failed to fetch contributors:", error);
            }
        } else {
            contributors.set(
                JSON.parse(localStorage.getItem("contributors") ?? ""),
            );

            counter.set(JSON.parse(localStorage.getItem("contributors") ?? ""));
        }

        console.log("count of contributors: " + get(counter).length);
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
