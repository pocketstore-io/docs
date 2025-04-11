<script>
	import SvelteMarkdown from "svelte-markdown";
	import { page } from "$app/stores";
	import { writable } from "svelte/store";
  
	let md = writable("");
	let sidebar = writable("");
  
	const load = async (slug) => {
	  try {
		const sidebarRes = await fetch(`/sidebar/requirements.md`);
		if (sidebarRes.ok) {
		  sidebar.set(await sidebarRes.text());
		}
  
		const articleRes = await fetch(`/articels/${slug}.md`);
		if (articleRes.ok) {
		  md.set(await articleRes.text());
		} else {
		  const errorRes = await fetch(`/error/404.md`);
		  if (errorRes.ok) {
			md.set(await errorRes.text());
		  }
		}
	  } catch (error) {
		console.error("Failed to load content:", error);
	  }
	};
  
	// Reactively re-fetch content when the slug changes
	$: {
	  const slug = $page.params.slug;
	  load(slug);
	}
  </script>
  
  <section class="page mx-auto max-w-6xl px-3 py-3 my-3">
	<section class="grid grid-cols-7 gap-6">
	  {#if $sidebar}
		<div class="col-span-7 md:col-span-2">
		  <div class="divider divider-primary mt-6 mb-3 text-white">Sidebar</div>
		  <div class="prose !max-w-full">
			<SvelteMarkdown source={$sidebar} />
		  </div>
		</div>
	  {/if}
	  <div class="col-span-7 md:col-span-5">
		<div class="prose !max-w-full">
		  <SvelteMarkdown source={$md} />
		</div>
	  </div>
	</section>
  </section>