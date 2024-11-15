<script>
    import "../tailwind.css";
</script>

<header class="bg-white px-3 py-3">
    <section class="flex justify-between mx-auto max-w-6xl">
        <div class="logo flex items-center">
            <a href="/" class="text-black font-bold ">PocketStore.io - Docs</a>
        </div>
        <nav class="md:block hidden">
            <input type="text" placeholder="Hallo Welt" class="input input-neutral input-sm placeholder-white" />
        </nav>
        <nav class="md:hidden block">Hallo Welt</nav>
    </section>
</header>
<main class="min-h-screen bg-gray-800">
    <slot></slot>
</main>
<footer class="bg-white px-3 py-3">
    <div class="grid grid-cols-6 gap-3 text-black mx-auto max-w-6xl">
        <div class="col-span-6 md:col-span-2">Test</div>
        <div class="col-span-6 md:col-span-2">Test</div>
        <div class="col-span-6 md:col-span-2">Test</div>
    </div>
</footer>
