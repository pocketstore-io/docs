<script>
  import SvelteMarkdown from "svelte-markdown";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  let md = "";
  let sidebar = "";

  onMount(async () => {
    const res = await fetch(`/sidebar/` + $page.params.slug + `.md`);
    if (res.status === 200) {
      sidebar = await res.text();
    }

    const response = await fetch(`/articels/` + $page.params.slug + `.md`);
    if (response.status === 200) {
      md = await response.text();
    } else {
      const response = await fetch(`/error/404.md`);
      md = await response.text();
    }
  });
</script>

<section class="page mx-auto max-w-6xl prose px-3 py-3 my-3">
  <section class="grid grid-cols-7 gap-3">
    {#if sidebar}
      <div class="col-span-7 md:col-span-2">
        <SvelteMarkdown source={sidebar} />
      </div>
    {/if}
    <div class="col-span-7 md:col-span-5">
      <SvelteMarkdown source={md} />
    </div>
  </section>
</section>

<style>
  a {
    text-decoration: none; /* Removes the underline */
  }

  a:hover {
    text-decoration: underline; /* Optionally, add underline on hover */
  }
</style>
