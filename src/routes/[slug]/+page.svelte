<script>
  import SvelteMarkdown from "svelte-markdown";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  $: $page,
    () => {
      load();
    };

  let md = "";
  let sidebar = "";

  let load = async function () {
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
  };

  onMount(async () => {
    load();
  });
</script>

<section class="page mx-auto max-w-6xl px-3 py-3 my-3">
  <section class="grid grid-cols-7 gap-6">
    {#if sidebar}
      <div class="col-span-7 md:col-span-2">
        <div class="divider divider-primary mt-6 mb-3 text-white">Sidebar</div>
        <div class="prose !max-w-full">
          <SvelteMarkdown source={sidebar} />
        </div>
      </div>
    {/if}
    <div class="col-span-7 md:col-span-5">
      <div class="prose !max-w-full">
        <SvelteMarkdown source={md} />
      </div>
    </div>
  </section>
</section>
