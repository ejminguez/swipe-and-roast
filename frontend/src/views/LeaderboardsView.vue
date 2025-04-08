<script lang="ts" setup>
import Card from '@/components/Card.vue'
import testImage from '@/assets/dags.jpg'
</script>

<template>
    <section class="grid gap-8">
        <h1 class="text-center">TOP REJECTIONS</h1>
        <div class="flex flex-col gap-4 justify-center items-center h-screen">
            <Card username="Dags" :age="25" bio="brightens & evens skin in 5 days" :img='testImage' :rejection_count="25" :rank="1" />
            <Card username="Dags" :age="25" bio="brightens & evens skin in 5 days" :img='testImage' :rejection_count="25" :rank="2" />
            <Card username="Dags" :age="25" bio="brightens & evens skin in 5 days" :img='testImage' :rejection_count="25" :rank="3" />
            <Card username="Dags" :age="25" bio="brightens & evens skin in 5 days" :img='testImage' :rejection_count="25" :rank="4" />
        </div>
    </section>
</template>