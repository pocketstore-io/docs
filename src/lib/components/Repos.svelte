<script>
  import Docs from "./links/Docs.svelte";
</script>

<h2 class="divider divider-primary mt-6 text-white">
  Weiter Repos von PocketStore.io
</h2>
<div class="text-sm space-y-3">
  <div class="collapse collapse-plus bg-base-200 w-full">
    <input type="radio" name="my-accordion-3" checked />
    <div class="collapse-title text-xl font-medium flex justify-between">
      <Docs label="PocketStore - Storefront" repo="storefront" />
    </div>
    <div class="collapse-content">
      <p>
        Storefront ist die Standard Gesicht nach außen hin wenn man nichts
        konfiguriert hat, das ganze kann man Anpassen an seine eigenen
        Vorstellung mit dem Custom Folder. Custom wird über Storefront kopiert während des Deployments.
      </p>
      <a
        href="https://api.github.com/repos/pocketstore-io/storefront"
        class="text-blue-600">Github Repository</a
      >
    </div>
  </div>
  <div class="collapse collapse-plus bg-base-200 w-full">
    <input type="radio" name="my-accordion-3" />
    <div class="collapse-title text-xl font-medium">
      <Docs label="PocketStore - docs" repo="docs" />
    </div>
    <div class="collapse-content">
      <p>
        Docs ist die in Svelte geschriebene Darstellung von PocketStore.io.
      </p>
      <a
        href="https://api.github.com/repos/pocketstore-io/docs"
        class="text-blue-600">Github Repository</a
      >
    </div>
  </div>
</div>
