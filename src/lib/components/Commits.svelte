<script>
    import { onMount } from "svelte";

    let commits = [];
    let error = null;
    let repo = "demo";

    onMount(async () => {
        if (
            localStorage.getItem("commits-" + repo) === null &&
            localStorage.getItem("commits-" + repo + "-date") !==
                new Date().toLocaleDateString()
        ) {
            try {
                const response = await fetch(
                    "https://api.github.com/repos/pocketstore-io/" +
                        repo +
                        "/commits?per_page=3", // Limit to 3 commits
                );
                if (!response.ok) {
                    throw new Error(
                        `Error fetching commits: ${response.statusText}`,
                    );
                }
                commits = await response.json();
                localStorage.setItem(
                    "commits-" + repo,
                    JSON.stringify(commits),
                );
                localStorage.setItem(
                    "commits-" + repo + "-date",
                    new Date().toLocaleDateString(),
                );
            } catch (err) {
                error = err.message;
            }
        } else {
            commits = JSON.parse(localStorage.getItem("commits-" + repo));
        }
    });
</script>

{#if error}
    <p>Error: {error}</p>
{:else if commits.length > 0}
    <ul>
        {#each commits as commit}
            <section class="card bg-white text-black rounded-lg mb-3">
                <div class="card-body">
                    <li>
                        <p>
                            <strong>Author:</strong>
                            {commit.commit.author.name}
                        </p>
                        <p><strong>Message:</strong> {commit.commit.message}</p>
                        <p class="text-ellipsis line-clamp-1">
                            <strong>Date:</strong>
                            {new Date(
                                commit.commit.author.date,
                            ).toLocaleString()}
                        </p>
                        <a href={commit.html_url} target="_blank"
                            >View Commit on GitHub</a
                        >
                    </li>
                </div>
            </section>
        {/each}
    </ul>
{:else}
    <p>Loading commits...</p>
{/if}
