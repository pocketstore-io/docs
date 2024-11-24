<script lang="ts">
    import Releases from "./../lib/components/Releases.svelte";
    import Contributor from "./../lib/components/Contributor.svelte";
    import Fa from "svelte-fa";
    import {
        faCheckSquare,
        faChevronRight,
        faEye,
    } from "@fortawesome/free-solid-svg-icons";
    import { faGithub } from "@fortawesome/free-brands-svg-icons";
    import History from "../lib/components/History.svelte";
    import Commits from "../lib/components/Commits.svelte";
    import Repos from "../lib/components/Repos.svelte";
    import Status from "$lib/components/Status.svelte";
    import PocketbasePhpSdk from "$lib/components/pocketbase-php-sdk.svelte";

    let copyToClipboard = (command) => {
        navigator.clipboard.writeText(command);
    };
</script>

<section class="page text-black px-3 py-3">
    <div class="mx-auto max-w-6xl">
        <div class="grid grid-cols-6 gap-x-6">
            <div class="col-span-6 md:col-span-3 text-center py-24 px-6">
                <img src="/pocketstore-logo-white.svg" alt="" />
                <p class="mb-5 mt-5 text-white">
                    Welcome to your Documentation of PocketStore.
                    <br />
                    Your Store out of your Pocket
                </p>
                <section class="action join">
                    <button
                        class="px-3 py-3 join-item rounded-none flex items-center"
                    >
                        <Fa icon={faEye} size="2x" color="white" class="mr-3" />
                        <span class="text-[#b8dbe4] hover:font-bold"
                            >Watch our Demo</span
                        >
                    </button>
                    <button class="px-3 py-3 join-item rounded-none flex">
                        <span>Take a look at the Code</span>
                        <Fa icon={faChevronRight} size="1x" color="white" />
                        <Fa
                            icon={faGithub}
                            size="2x"
                            color="white"
                            class="ml-2"
                        />
                    </button>
                </section>
                <section class="badges space-y-3">
                    <div class="badge badge-neutral text-black badge-lg">
                        <Fa icon={faCheckSquare} color="black" class="mr-2" />
                        <span>Checkout with PayPal</span>
                    </div>
                    <div class="badge badge-neutral text-black badge-lg">
                        <Fa icon={faCheckSquare} color="black" class="mr-2" />
                        <span>Checkout with Klarna</span>
                    </div>
                    <div class="badge badge-neutral text-black badge-lg">
                        <Fa icon={faCheckSquare} color="black" class="mr-2" />
                        <span>Checkout with Stripe</span>
                    </div>
                    <div class="badge badge-neutral text-black badge-lg">
                        <Fa icon={faCheckSquare} color="black" class="mr-2" />
                        <span>Easy to Setup</span>
                    </div>
                    <div class="badge badge-neutral text-black badge-lg">
                        <Fa icon={faCheckSquare} color="black" class="mr-2" />
                        <span>Based on PocketBase</span>
                    </div>
                </section>
            </div>
            <div class="col-span-6 md:col-span-3">
                <div class="w-full pt-24 pb-6">
                    <Status />
                    <div
                        class="coding inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased
                                    bg-[#b8dbe4] pb-6 pt-4 rounded-lg leading-normal overflow-hidden"
                    >
                        <div class="top mb-2 flex">
                            <div class="h-3 w-3 bg-red-500 rounded-full"></div>
                            <div
                                class="ml-2 h-3 w-3 bg-orange-300 rounded-full"
                            ></div>
                            <div
                                class="ml-2 h-3 w-3 bg-green-500 rounded-full"
                            ></div>
                        </div>
                        <div class="mt-3 flex">
                            <span class="text-black mr-3">bash:~$</span>
                            <button
                                class="text-[#1f6fed]"
                                onclick={() => {
                                    copyToClipboard(
                                        "git clone https://github.com/pocketstore-io/demo.git",
                                    );
                                }}
                                >git clone
                                https://github.com/pocketstore-io/demo.git</button
                            >
                        </div>
                        <div class="mt-3 flex">
                            <span class="text-black mr-3">bash:~$</span>
                            <button
                                class="text-[#1f6fed]"
                                onclick={() => {
                                    copyToClipboard(
                                        "cd demo && chmod u+x ./bin/init.go",
                                    );
                                }}>cd demo && chmod u+x ./bin/init.go</button
                            >
                        </div>
                        <div class="mt-3 flex">
                            <span class="text-black mr-3">bash:~$</span>
                            <button
                                class="text-[#1f6fed]"
                                onclick={() => {
                                    copyToClipboard("go run ./bin/init.go");
                                }}>go run ./bin/init.go</button
                            >
                        </div>
                    </div>
                </div>
                <Contributor></Contributor>
            </div>
            <div class="col-span-6 md:col-span-3">
                <History></History>
                <Repos></Repos>
                <PocketbasePhpSdk />
            </div>
            <div class="col-span-6 md:col-span-3 text-[#b8dbe4]">
                <p class="text-sm"></p>
                <Releases></Releases>
                <Commits></Commits>
            </div>
        </div>
    </div>
</section>
