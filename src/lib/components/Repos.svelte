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
            <p>hello</p>
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
            <p>hello</p>
            <a
                href="https://api.github.com/repos/pocketstore-io/storefront"
                class="text-blue-600">Github Repository</a
            >
        </div>
    </div>
    <div class="collapse collapse-plus bg-base-200 w-full">
        <input type="radio" name="my-accordion-3" />
        <div class="collapse-title text-xl font-medium">
            <Docs label="Pocketbase - Data" repo="pb_data" />
        </div>
        <div class="collapse-content">
            <p>hello</p>
            <a
                href="https://api.github.com/repos/pocketstore-io/storefront"
                class="text-blue-600">Github Repository</a
            >
        </div>
    </div>
    <div class="collapse collapse-plus bg-base-200 w-full">
        <input type="radio" name="my-accordion-3" />
        <div class="collapse-title text-xl font-medium">
            <Docs label="Pocketbase - Hooks" repo="pb_hooks" />
        </div>
        <div class="collapse-content">
            <p>hello</p>
            <a
                href="https://api.github.com/repos/pocketstore-io/storefront"
                class="text-blue-600">Github Repository</a
            >
        </div>
    </div>
    <div class="collapse collapse-plus bg-base-200 w-full">
        <input type="radio" name="my-accordion-3" />
        <div class="collapse-title text-xl font-medium">
            <Docs label="Svelte - Docs" repo="pb_migrations" />
        </div>
        <div class="collapse-content">
            <p>hello</p>
            <a
                href="https://api.github.com/repos/pocketstore-io/storefront"
                class="text-blue-600">Github Repository</a
            >
        </div>
    </div>
</div>
