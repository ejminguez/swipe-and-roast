<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
    username: string
    age: number
    bio: string
    img: string
    rejection_count: number
    rank: number
}>()
</script>

<template>
    <!-- CARD -->
    <div class="flex flex-col justify-between h-1/2 rounded-md p-4 shadow-xl lg:w-1/4 mx-auto" :style="{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
        
        <div class="flex justify-between items-center w-full text-white">
            <div class="flex gap-4 justify-end items-center">
                <p>Rejected: </p>
                <p class="text-yellow-200 font-black">{{ rejection_count }}</p>
            </div>

            <div class="flex gap-4 justify-end items-center">
                <p>Rank: </p>
                <p class="text-yellow-200 font-black">{{ rank }}</p>
            </div>
        </div>

        <div class="text-white">
            <h5>{{ age }}</h5>
            <h4>{{ username }}</h4>
            <p class="italic font-thin">{{ bio }}</p>
        </div>
    </div>
</template>