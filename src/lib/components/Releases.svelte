<script>
    import { onMount } from 'svelte';
  
    let latestRelease = null;
    let error = null;
  
    onMount(async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/pocketstore-io/demo/releases'
        );
        if (!response.ok) {
          throw new Error(`Error fetching release: ${response.statusText}`);
        }
        latestRelease = (await response.json())[0];
      } catch (err) {
        error = err.message;
      }
    });
  </script>
  
  {#if error}
    <p>Error: {error}</p>
  {:else if latestRelease}
    <h2>Latest Release</h2>
    <p><strong>Version:</strong> {latestRelease.tag_name}</p>
    <p><strong>Name:</strong> {latestRelease.name}</p>
    <p><strong>Published:</strong> {new Date(latestRelease.published_at).toLocaleDateString()}</p>
    <a href="{latestRelease.html_url}" target="_blank">View on GitHub</a>
  {:else}
    <p>Loading latest release...</p>
  {/if}
  