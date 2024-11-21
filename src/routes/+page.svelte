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
                    <div class="flex justify-between items-center">
                        <div
                            class="gopher w-16 h-16 ml-6"
                            title="Gopher by @github:marcusolsson/gophers"
                        ></div>
                        <div class="version text-white">
                            PocketStore Version: 0.0.1
                        </div>
                        <div class="version text-white">Status: alpha</div>
                    </div>
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
                                        "cd demo && chmod u+x ./bin/init.sh",
                                    );
                                }}>cd demo && chmod u+x ./bin/init.sh</button
                            >
                        </div>
                        <div class="mt-3 flex">
                            <span class="text-black mr-3">bash:~$</span>
                            <button
                                class="text-[#1f6fed]"
                                onclick={() => {
                                    copyToClipboard("./bin/init.sh");
                                }}>./bin/init.sh</button
                            >
                        </div>
                    </div>
                </div>
                <Contributor></Contributor>
            </div>
            <div class="col-span-6 md:col-span-3">
                <History></History>
                <Repos></Repos>
            </div>
            <div class="col-span-6 md:col-span-3 text-[#b8dbe4]">
                <p class="text-sm"></p>
                <Releases></Releases>
                <Commits></Commits>
            </div>
        </div>
    </div>
</section>

<style>
    .gopher {
        background-size: cover;
        background-image: url("data:image/png;base64,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");
    }
</style>
