<script lang="ts">
    import Releases from "./../lib/components/Releases.svelte";
    import Contributor from "./../lib/components/Contributor.svelte";
    import Fa from "svelte-fa";
    import {
        faChevronLeft,
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
            <div class="col-span-6 md:col-span-3 text-center py-12 px-6">
                <section class="notes mb-6">
                    <div
                        class="alert alert-warning text-red-600 font-bold text-sm text-center block"
                    >
                        This Project is still in Development, Fragile and not
                        for Production.
                    </div>
                </section>
                <img src="/pocketstore-logo-white.svg" alt="" />
                <section class="forks my-3 space-x-3 flex justify-center">
                    <img
                        class=""
                        alt="GitHub forks"
                        src="https://img.shields.io/github/forks/pocketstore-io/demo"
                    />
                    <img
                        class=""
                        src="https://img.shields.io/github/stars/pocketstore-io/demo"
                        alt=""
                    />
                </section>
                <p class="mb-5 mt-5 text-white">
                    Welcome to your Documentation of PocketStore.
                    <br />
                    Your Store out of your Pocket
                </p>
                <section class="actions mb-3">
                    <a href="https://demo.pocketstore.io" class="px-3 py-3 btn btn-secondary">
                        <Fa icon={faEye} size="2x" color="white" />
                        <Fa icon={faChevronLeft} size="1x" color="white" />
                        <span class="text-[#b8dbe4] hover:font-bold"
                            >Watch our Demo</span
                        >
                    </a>
                    <a
                        target="_blank"
                        href="https://github.com/pocketstore-io/demo"
                        class="px-3 py-3 btn btn-primary"
                    >
                        <span>Take a look at the Code</span>
                        <Fa icon={faChevronRight} size="1x" color="white" />
                        <Fa
                            icon={faGithub}
                            size="2x"
                            color="white"
                            class="ml-2"
                        />
                    </a>
                </section>
            </div>
            <div class="col-span-6 md:col-span-3 mb-3">
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
                                        "cd demo && go run ./bin/init.go",
                                    );
                                }}>cd demo && go run ./bin/init.go</button
                            >
                        </div>
                    </div>
                </div>
                <Contributor></Contributor>
            </div>
            <div class="col-span-6 mb-6">
                <section class="grid grid-cols-6 gap-3">
                    <div class="col-span-6">
                        <div
                            class="divider divider-primary text-lg font-bold text-white"
                        >
                            Demos mit PockeStore
                        </div>
                    </div>
                    <div class="col-span-6 md:col-span-2">
                        <a
                            href="https://www.gummersbach-imbiss.de"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/demos/gummersbach-imbiss.png"
                                alt=""
                            /></a
                        >
                    </div>
                    <div class="col-span-6 md:col-span-2">
                        <a
                            href="https://ikea.pocketstore.io"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/demos/ikea.pocketstore.io.png" alt="" />
                        </a>
                    </div>
                    <div class="col-span-6 md:col-span-2">
                        <a
                            href="https://www.gummersbach-biker.shop"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/demos/gummersbach-biker.png" alt="" /></a
                        >
                    </div>
                </section>
            </div>
            <div class="col-span-6 md:col-span-3">
                <History></History>
                <Repos></Repos>
                <PocketbasePhpSdk />
            </div>
            <div class="col-span-6 md:col-span-3 text-[#b8dbe4]">
                <div class="divider divider-primary">Releases</div>
                <p class="text-sm"></p>
                <Releases></Releases>
                <Commits></Commits>
            </div>
        </div>
    </div>
</section>
