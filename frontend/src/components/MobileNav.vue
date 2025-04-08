<script setup lang="ts">
import { HomeIcon } from '@heroicons/vue/16/solid';
import { InformationCircleIcon } from '@heroicons/vue/16/solid';
</script>

<template>
    <nav class="flex bg-white shadow-md w-[50%]">
        <div class="px-2 py-4 flex flex-col gap-2">
            <RouterLink to="/" class="flex gap-2 items-center">
            <HomeIcon class="h-6 w-6" />
            <span>Home</span>
        </RouterLink>
        <RouterLink to="/about" class="flex gap-2 items-center">
            <InformationCircleIcon class="h-6 w-6" />
            <span>About</span>
        </RouterLink>
        </div>
    </nav>
</template>