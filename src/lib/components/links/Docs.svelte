<script>
    import { onMount } from "svelte";

    export let repo;
    export let label;

    let latest = "";
    let link = "";
    let error = null;

    onMount(async () => {
        link = "https://api.github.com/repos/pocketstore-io/" + repo;
        if (
            localStorage.getItem("version-" + repo) === null &&
            localStorage.getItem("version-" + repo + "-date") !==
                new Date().toLocaleDateString()
        ) {
            try {
                const response = await fetch(link + "/releases");
                if (!response.ok) {
                    throw new Error(
                        `Error fetching release: ${response.statusText}`,
                    );
                }
                latest = (await response.json())[0].tag_name;
                localStorage.setItem("version-" + repo, latest);
                if (latest !== []) {
                    localStorage.setItem(
                        "version-" + repo + "-date",
                        new Date().toLocaleDateString(),
                    );
                }
            } catch (err) {
                error = err.message;
            }
        } else {
            latest = localStorage.getItem("version-" + repo);
        }
    });
</script>

<div class="test">
    <span class="repo-name">{label} |</span>
    <span class="version-tag">
        {latest}
    </span>
</div>
