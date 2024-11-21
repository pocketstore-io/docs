<script>
  import { onMount } from "svelte";

  let latestRelease = null;
  let error = null;

  onMount(async () => {
    if (
      localStorage.getItem("version-demo") === null &&
      localStorage.getItem("version-demo-date") !==
        new Date().toLocaleDateString()
    ) {
      try {
        const response = await fetch(
          "https://api.github.com/repos/pocketstore-io/demo/releases",
        );
        if (!response.ok) {
          throw new Error(`Error fetching release: ${response.statusText}`);
        }
        latestRelease = (await response.json())[0];
        localStorage.setItem("version-demo", JSON.stringify(latestRelease));
      } catch (err) {
        error = err.message;
      }
    } else {
      latestRelease = JSON.parse(localStorage.getItem("version-demo"));
    }
  });
</script>

{#if error}
  <p>Error: {error}</p>
{:else if latestRelease}
  <div class="card card-side bg-base-200 shadow-xl mb-3">
    <figure>
      <img
        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
        alt="Movie"
      />
    </figure>
    <div class="card-body text-black">
      <h2 class="card-title">Latest Release!</h2>
      <p>
        <strong>Version:</strong>
        {latestRelease.tag_name} <br>
        <strong>Published:</strong>
        {new Date(latestRelease.published_at).toLocaleDateString()}
      </p>
      <div class="card-actions justify-end">
        <a href={latestRelease.html_url} class="btn btn-primary" target="_blank"
          >View on GitHub</a
        >
      </div>
    </div>
  </div>
{:else}
  <p>Loading latest release...</p>
{/if}
