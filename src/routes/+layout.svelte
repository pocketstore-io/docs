<script>
    import Fa from "svelte-fa";
    import "../tailwind.css";
    import {
        faCircleInfo,
        faPlay,
    } from "@fortawesome/free-solid-svg-icons";
</script>

<header class="bg-white px-3 py-3">
    <section class="flex justify-between mx-auto max-w-6xl">
        <div class="logo flex items-center">
            <a href="/">
                <img src="/pocketstore-logo.svg" class="h-12" alt="" /></a
            >
        </div>
        <nav class="md:block hidden">
            <input
                type="text"
                placeholder="Hallo Welt"
                class="input input-neutral input-sm placeholder-white"
            />
            <ul class="flex justify-end space-x-6">
                <li>
                    <a href="/getting-started" class="flex">
                        <Fa icon={faPlay} class="mt-1 mr-3" />
                        <span class="text-black">Getting Started</span>
                    </a>
                </li>
                <li>
                    <a href="/requirements" class="flex">
                        <Fa icon={faCircleInfo} class="mt-1 mr-3" />
                        <span class="text-black">Requirements</span>
                    </a>
                </li>
            </ul>
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
